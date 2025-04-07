// import fs from 'fs';
// import path from 'path';

// const mainFilePath = path.resolve('dist/main.js'); // Use absolute path
// const oldImport = './styles/index.scss'; // The string to find
// const newImport = './styles/index.css';   // The string to replace with

// // Read the file and replace the import path
// fs.readFile(mainFilePath, 'utf8', (err, data) => {
//   if (err) throw err;
  
//   console.log('Original content of main.js:', data);  // Print original content
//   const regex = /import\s+['"](.+\/styles\/index\.scss)['"]/g; // Regex for matching import
//   const result = data.replace(regex, `import './styles/index.css'`); // Perform the replacement

//   console.log('Result after replacement:', result); // Show the result after replacement

//   if (result === data) {
//     console.log('No changes made to main.js');
//   } else {
//     // Attempt to write the updated content back to main.js
//     try {
//       fs.writeFileSync(mainFilePath, result, 'utf8'); // Use synchronous write
//       console.log('Updated imports in main.js');
//     } catch (err) {
//       console.error('Error writing to main.js:', err);
//     }
//   }
// });

import fs from 'fs';
import path from 'path';

const mainFilePath = path.resolve('dist/main.js'); // Use absolute path
const oldImport = './styles/index.scss';
const newImport = './styles/index.css';

// Read the file and replace the import path
fs.readFile(mainFilePath, 'utf8', (err, data) => {
  if (err) throw err;
  
  console.log('Original content of main.js:', data);  // Print original content
  const result = data.replace(oldImport, newImport);
  
  console.log('Attempting to replace:', oldImport);
  console.log('Result after replacement:', result);
  
  // Check if any changes were made
  if (result === data) {
    console.log('No changes made to main.js');
  } else {
    fs.writeFile(mainFilePath, result, 'utf8', (err) => {
      if (err) throw err;
      console.log('Updated imports in main.js');
    });
  }
});