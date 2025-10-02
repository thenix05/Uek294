const URL = "http://localhost:8080";

export async function getChronicles() {
  const response = await fetch(`${URL}/chronicles`);
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getChronicleDetail(id) {
  const response = await fetch(`${URL}/chronicles/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function createChronicle(chronicle) {
  const response = await fetch(`${URL}/chronicles`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(chronicle),
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function updateChronicle(chronicle) {
  const response = await fetch(`${URL}/chronicles/${chronicle.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(chronicle),
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function deleteChronicle(id) {
  const response = await fetch(`${URL}/chronicles/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  return null;
}
