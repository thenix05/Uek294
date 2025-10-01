import assert from "assert"
import { afterEach, describe, it } from "node:test"
import { createChronicle, deleteChronicle, fetchChronicleById, fetchChronicles, updateChronicle } from "./lib/api/chronicles.js"

// Store the original fetch
const originalFetch = global.fetch

// Base URL for API calls
const BASE_URL = "http://localhost:8080/chronicles"

// Mock data
const MOCK_CHRONICLE = {
  title: "The History of JavaScript: A Tale of Browsers and Standards",
  text: "JavaScript wurde 1995 erfunden und hat seitdem die Webentwicklung revolutioniert. Von einfachen Interaktionen bis hin zu komplexen Single-Page-Applications, JavaScript ist heute überall zu finden. #WebDev #JavaScript #History",
  id: 1,
  user: "historian",
  createdAt: "2025-02-13T08:43:20.717196",
  updatedAt: "2025-02-13T08:43:20.717196"
}

// Helper to verify chronicle structure
const verifyChronicleStructure = (chronicle) => {
  assert.ok(typeof chronicle.id === "number", "Die Chronik-ID muss eine Zahl sein")
  assert.ok(typeof chronicle.title === "string", "Der Titel muss ein String sein")
  assert.ok(typeof chronicle.text === "string", "Der Text muss ein String sein")
  assert.ok(typeof chronicle.user === "string", "Der Autor muss ein String sein")
  assert.ok(typeof chronicle.createdAt === "string", "Das Erstellungsdatum muss ein String sein")
  assert.ok(typeof chronicle.updatedAt === "string", "Das Änderungsdatum muss ein String sein")
}

// Mock fetch helper that also checks request structure, URL and method
const mockFetch = (response, expectedRequest = {}) => {
  global.fetch = async (url, options = {}) => {
    // Check URL
    if (expectedRequest.url) {
      assert.strictEqual(url, expectedRequest.url, `Die URL sollte ${expectedRequest.url} sein`)
    }
	
	// Content-Type Header Comparison
    const contentTypeHeader = Object.keys(options.headers || {}).find(
      (key) => key.toLowerCase() === "content-type"
    )	

    // Check method
    if (expectedRequest.method === "GET") {
      // For GET requests, check that method is not explicitly set (since it's the default)
      assert.ok(!options.method || options.method === "GET", "Bei GET Requests ist es besser, keine explizite Methode zu setzen, da GET die Standardmethode ist")
    } else if (expectedRequest.method) {
      // For non-GET requests, method should be explicitly set
      assert.strictEqual(options.method, expectedRequest.method, `Die HTTP-Methode sollte ${expectedRequest.method} sein`)
    }

    // Check POST/PUT/PATCH requests
    if (options.method === "POST" || options.method === "PUT" || options.method === "PATCH") {
      assert.strictEqual(
          options.headers?.[contentTypeHeader],
          "application/json",
          "POST/PUT/PATCH Requests sollten den content-type: application/json Header haben"
      )

      assert.ok(!!options.body && typeof options.body === "string", "Bei POST/PUT/PATCH requests sollte der Body ein JSON String sein. Nutze JSON.stringify(body)")
    }

    // Check GET/DELETE requests
    if (!options.method || options.method === "GET" || options.method === "DELETE") {
      assert.notStrictEqual(
          options.headers?.[contentTypeHeader],
          "application/json",
          "GET/DELETE Requests sollten den content-type: application/json Header NICHT haben"
      )
      assert.ok(!!!options.body, "Bei GET/DELETE Requests sollte es keinen Body haben")
    }

    return response
  }
}

describe("CRUD Operationen Chronicles Backend", () => {
  afterEach(() => {
    global.fetch = originalFetch
  })

  describe("READ: fetchChronicles()", () => {
    it("soll alle Chroniken mit korrekter Struktur laden", async () => {
      const mockChronicles = [MOCK_CHRONICLE, { ...MOCK_CHRONICLE, id: 2, title: "Second chronicle" }]
      mockFetch({
        ok: true,
        json: async () => mockChronicles
      }, {
        url: BASE_URL,
        method: "GET"
      })

      const chronicles = await fetchChronicles()
      assert.ok(Array.isArray(chronicles), "fetchChronicles muss eine Liste von Chroniken zurückgeben")
      chronicles.forEach(chronicle => verifyChronicleStructure(chronicle))
    })

    it("soll bei Server-Problemen einen Fehler werfen", async () => {
      mockFetch({
        ok: false,
        status: 500
      }, {
        url: BASE_URL,
        method: "GET"
      })

      await assert.rejects(
          () => fetchChronicles(),
          Error,
          "Wenn der Server nicht erreichbar ist, muss ein Fehler geworfen werden"
      )
    })
  })

  describe("READ: fetchChronicleById(id)", () => {
    it("soll eine einzelne Chronik mit korrekter Struktur laden", async () => {
      const chronicleId = 1
      mockFetch({
        ok: true,
        json: async () => MOCK_CHRONICLE
      }, {
        url: `${BASE_URL}/${chronicleId}`,
        method: "GET"
      })

      const chronicle = await fetchChronicleById(chronicleId)
      verifyChronicleStructure(chronicle)
    })

    it("soll einen Fehler werfen, wenn die Chronik nicht existiert", async () => {
      const nonExistentId = 999
      mockFetch({
        ok: false,
        status: 404
      }, {
        url: `${BASE_URL}/${nonExistentId}`,
        method: "GET"
      })

      await assert.rejects(
          () => fetchChronicleById(nonExistentId),
          Error,
          "Wenn die Chronik nicht gefunden wird, muss ein Fehler geworfen werden"
      )
    })
  })

  describe("CREATE: createChronicle(newChronicle)", () => {
    it("soll eine neue Chronik mit korrekten Headers erstellen", async () => {
      const newChronicle = {
        title: "Neue Chronik",
        text: "Das ist eine neue Chronik"
      }

      mockFetch({
        ok: true,
        json: async () => ({ ...MOCK_CHRONICLE, ...newChronicle, id: 3 })
      }, {
        url: BASE_URL,
        method: "POST"
      })

      const createdChronicle = await createChronicle(newChronicle)
      verifyChronicleStructure(createdChronicle)
      assert.strictEqual(createdChronicle.title, newChronicle.title, "Der Titel der erstellten Chronik muss stimmen")
      assert.strictEqual(createdChronicle.text, newChronicle.text, "Der Text der erstellten Chronik muss stimmen")
    })

    it("soll einen Fehler werfen, wenn die Erstellung fehlschlägt", async () => {
      const newChronicle = {
        title: "Neue Chronik",
        text: "Das ist eine neue Chronik"
      }

      mockFetch({
        ok: false,
        status: 400
      }, {
        url: BASE_URL,
        method: "POST"
      })

      await assert.rejects(
          () => createChronicle(newChronicle),
          Error,
          "Wenn die Erstellung fehlschlägt, muss ein Fehler geworfen werden"
      )
    })
  })

  describe("UPDATE: updateChronicle(chronicle)", () => {
    it("soll eine Chronik erfolgreich aktualisieren", async () => {
      const updatedData = {
        id: 1,
        title: "Aktualisierter Titel",
        text: "Aktualisierter Text"
      }

      mockFetch({
        ok: true,
        json: async () => ({ ...MOCK_CHRONICLE, ...updatedData })
      }, {
        url: `${BASE_URL}/${updatedData.id}`,
        method: "PUT"
      })

      const updatedChronicle = await updateChronicle(updatedData)
      verifyChronicleStructure(updatedChronicle)
      assert.strictEqual(updatedChronicle.title, updatedData.title, "Der Titel muss aktualisiert werden")
      assert.strictEqual(updatedChronicle.text, updatedData.text, "Der Text muss aktualisiert werden")
    })

    it("soll einen Fehler werfen, wenn die zu aktualisierende Chronik nicht existiert", async () => {
      const updatedData = {
        id: 999,
        title: "Aktualisierter Titel",
        text: "Aktualisierter Text"
      }

      mockFetch({
        ok: false,
        status: 404
      }, {
        url: `${BASE_URL}/${updatedData.id}`,
        method: "PUT"
      })

      await assert.rejects(
          () => updateChronicle(updatedData),
          Error,
          "Wenn die Chronik nicht existiert, kann sie nicht aktualisiert werden"
      )
    })
  })

  describe("DELETE: deleteChronicle(id)", () => {
    it("soll eine Chronik erfolgreich löschen", async () => {
      const chronicleId = 1
      
      // Track if fetch was called
      let fetchWasCalled = false
      
      global.fetch = async (url, options = {}) => {
        fetchWasCalled = true
        
        // Check correct URL and method
        assert.strictEqual(url, `${BASE_URL}/${chronicleId}`, `Die URL sollte ${BASE_URL}/${chronicleId} sein`)
        assert.strictEqual(options.method, "DELETE", "Die HTTP-Methode sollte DELETE sein")
        
        // Check no body is sent
        assert.ok(!!!options.body, "Bei DELETE Requests sollte es keinen Body haben")
        
        return { ok: true }
      }

      await deleteChronicle(chronicleId)
      
      // Verify fetch was actually called
      assert.ok(fetchWasCalled, "fetch wurde nicht aufgerufen - die deleteChronicle Funktion muss einen API-Call ausführen")
    })

    it("soll einen Fehler werfen, wenn die zu löschende Chronik nicht existiert", async () => {
      const nonExistentId = 999
      mockFetch({
        ok: false,
        status: 404
      }, {
        url: `${BASE_URL}/${nonExistentId}`,
        method: "DELETE"
      })

      await assert.rejects(
          () => deleteChronicle(nonExistentId),
          Error,
          "Wenn die Chronik nicht existiert, kann sie nicht gelöscht werden"
      )
    })
  })
})