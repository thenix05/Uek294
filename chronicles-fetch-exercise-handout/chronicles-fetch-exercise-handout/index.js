// index.js - Chronicles API Client
import { 
    fetchChronicles, 
    fetchChronicleById, 
    createChronicle, 
    updateChronicle, 
    deleteChronicle 
  } from './lib/api/chronicles.js';
  
  // Helper function to log results with a title
  const logResult = (title, data) => {
    console.log('\n' + '='.repeat(50));
    console.log(`${title}:`);
    console.log('='.repeat(50));
    console.log(data);
  };
  
  // Helper function to handle errors
  const handleError = (operation, error) => {
    console.error(`\n❌ Error during ${operation}:`);
    console.error(error.message);
  };
  
  // Main async function to run all operations in sequence
  async function main() {
    try {
      console.log('🚀 Starting Chronicles API client...');
      
      // 1. Fetch all chronicles
      console.log('\n📋 Fetching all chronicles...');
      const allChronicles = await fetchChronicles();
      logResult('All Chronicles', allChronicles);
      
      // Save the first chronicle's ID for later use if it exists
      const firstChronicleId = allChronicles.length > 0 ? allChronicles[0].id : null;
      
      // 2. Create a new chronicle
      console.log('\n✏️ Creating a new chronicle...');
      const newChronicleData = {
        title: "The Rise of Modern Web Frameworks",
        text: "Von jQuery zu React, Vue und Angular - die Geschichte moderner Web-Frameworks ist eine Geschichte der steigenden Komplexität und Leistungsfähigkeit von Webanwendungen. #WebDev #Frontend #JavaScript"
      };
      
      const createdChronicle = await createChronicle(newChronicleData);
      logResult('Created Chronicle', createdChronicle);
      
      // 3. Fetch a specific chronicle by ID
      console.log(`\n🔍 Fetching chronicle with ID: ${createdChronicle.id}...`);
      const singleChronicle = await fetchChronicleById(createdChronicle.id);
      logResult('Single Chronicle', singleChronicle);
      
      // 4. Update the chronicle we just created
      console.log(`\n✏️ Updating chronicle with ID: ${createdChronicle.id}...`);
      const updatedData = {
        id: createdChronicle.id,
        title: "The Evolution of Modern Web Frameworks",
        text: "Von jQuery zu React, Vue und Angular - die Geschichte moderner Web-Frameworks zeigt die Evolution des Webs von einfachen Interaktionen zu komplexen Anwendungen. Dieser Artikel wurde aktualisiert mit neuen Informationen. #WebDev #Frontend #JavaScript",
      };
      
      const updatedChronicle = await updateChronicle(updatedData);
      logResult('Updated Chronicle', updatedChronicle);
      
      // 5. Delete the chronicle we created
      console.log(`\n🗑️ Deleting chronicle with ID: ${createdChronicle.id}...`);
      await deleteChronicle(createdChronicle.id);
      console.log(`✅ Chronicle with ID: ${createdChronicle.id} successfully deleted.`);
      
      // 6. Try to fetch the deleted chronicle to verify it's gone
      try {
        console.log(`\n🔍 Attempting to fetch deleted chronicle with ID: ${createdChronicle.id}...`);
        await fetchChronicleById(createdChronicle.id);
      } catch (error) {
        console.log(`✅ Confirmed: Chronicle with ID: ${createdChronicle.id} no longer exists.`);
      }
      
      // 7. If we had existing chronicles, show one
      if (firstChronicleId) {
        console.log(`\n🔍 Fetching an existing chronicle with ID: ${firstChronicleId}...`);
        const existingChronicle = await fetchChronicleById(firstChronicleId);
        logResult('Existing Chronicle', existingChronicle);
      }
      
      console.log('\n✅ All operations completed successfully!');
      
    } catch (error) {
      console.error('\n❌ An error occurred in the main process:');
      console.error(error);
    }
  }
  
  // Run the main function
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });