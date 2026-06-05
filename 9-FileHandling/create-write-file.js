const fs = require('fs');
// Sample JSON data to work with
const sampleUser = {
    id: 1,
    name: "Ali Mehdi",
    email: "alimehdi@example.com",
    age: 25
};
const sampleUsers = [
    { id: 1, name: "kinza", age: 25 },
    { id: 2, name: "khizar", age: 30 },
    { id: 3, name: "kaneez", age: 35 }
];
// File Creation
// Create and write text to .txt file
function createTxtFile() {
    const content = "Hello World!\nThis is a text file.";
    fs.writeFileSync('data/example.txt', content);
    console.log('Text file created and written!');
}
createTxtFile()
// Create and write JSON to .json file
function createJsonFile() {
    const jsonContent = JSON.stringify(sampleUsers, null, 2);// (value,replacer-> null means include all,space)
    fs.writeFileSync('data/data.json', jsonContent);
    console.log('JSON file created and written!');
}
createJsonFile()

// Create file from variable
function createFileFromData(filename, data) {
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }
    fs.writeFileSync(filename, data);
    console.log(`${filename} created!`);
}
createFileFromData('data/abc.json',{'id': 1,'date' : '2026-6-26','msg':'hello world!'})
createFileFromData('abc.csv',"This is a CSV File")  
