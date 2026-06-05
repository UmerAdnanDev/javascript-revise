const fs = require('fs');
// Read txt file
function readTxtFile() {
    try {
        const data = fs.readFileSync('data/example.txt', 'utf8');
        console.log('text content:');
        console.log(data);
        return data;
    } catch (err) {
        console.log('File not found!');
    }
}
readTxtFile()

// Read json file (parsed)
function readJsonFile() {
    try {
        const data = fs.readFileSync('data/data.json', 'utf8');
        const jsonData = JSON.parse(data);
        console.log('JSON content:');
        console.log(jsonData);
        return jsonData;
    } catch (err) {
        console.log('File not found!');
    }
}
readJsonFile()
// Write file from variable
function readFile(filename){
  try {
    const data = fs.readFileSync(filename, 'utf8');
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    console.log('File content:');
    console.log(data);
    return null;
  } catch (err) {
    console.log('File not found!');
  }
}
readFile("abc.csv")
readFile("data/abc.json")
