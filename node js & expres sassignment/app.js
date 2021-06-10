
// first
/*
var http=require('http')
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("hello im here\n");
}));
 // The server object listens on port 7000
server.listen(7000, "127.0.0.1" , () => {
    console.log("i am listening to the port 7000");
});  
*/
// --------------------------------------------------------------------------------------

// Second (to read text file content)

/* var fs = require("fs");

fs.readFile('test.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
}); */

// ----------------------------------------------------------------------------------------------------
// third 
/*
const fs = require("fs");
  
let directory_name = "npfile";
  
let filenames = fs.readdirSync(directory_name);
  
console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    console.log("File:", file);
}); */


/*  //in array format  asyn
const fs = require("fs");

let directory = "npfile";
let dirbuf = Buffer.from(directory);


fs.readdir(dirbuf,(err, files)=>{
    if (err) {
        console.log(err.mesaage);
    }else{
        console.log(files);
    }
})   */

// ------------------------------------------------------------------------------------------------------
// fourth 

/* var fs = require('fs');

fs.writeFile('node ex5.txt', "hey ho! let's go", 'utf8', function (error){
    if (error) throw error;
    console.log("contet saved");
});
console.log('execute after')  */

// -------------------------------------------------------------------------------------------------------
// 12.
/*
const dateObj = new Date();
  
// Printing the date and time parts
console.log(`Date: ${dateObj.toDateString()}`);
console.log(`Time: ${dateObj.toTimeString()}`);
*/
// ---------------------------------------------------------------------------------------------------------
// 13.
/*
const process = require('process');
var greet= process.argv[2];
// console.log(process.argv);
console.log("hello, " + greet + "!");
*/
// -------------------------------------------------------------------------------------------
// 5.
/*
const fs = require('fs');

function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text=fs.readFileSync('word.txt', 'utf-8'); 
 var count=countOccurences(text,"john");
 console.log(count);
*/
//--------------------------------------------------------------------------------------------
// 7. show hour
/*
var strftime = require('strftime');
console.log(strftime('%H'));         // to print only hour
console.log(strftime('%H:%M:%S'));  // to print hour minute second on local 
console.log(strftime('%B %d %Y'))   // to print month date year of local
*/

// ----------------------------------------------------------------------------------------------
// 8.
/* 
var http= require('http');
 var fs=require('fs');

 var server=http.createServer((req,res)=>{
     res.writeHead(200,{'Content-type': 'text/plain'});
     fs.readFile('numbers.txt', 'utf8', (err,data)=>{
         var data= data.split(" ");
         var sum = parseInt(data[0]) + parseInt(data[1]);
         console.log(sum);
         res.end("success");
     });

 });
 server.listen(8080);
 console.log("listening");
*/
// ==------------------------------------------------------------------------------------------------------------------

const fs = require('fs');

// Store file data chunks in this array
let chunks = [];
// We can use this variable to store the final data
let fileBuffer;

// Read file into stream.Readable
let fileStream = fs.createReadStream('text.txt');

// An error occurred with the stream
fileStream.once('error', (err) => {
    // Be sure to handle this properly!
    console.error(err); 
});

// File is done being read
fileStream.once('end', () => {
    // create the final data Buffer from data chunks;
    fileBuffer = Buffer.concat(chunks);
    
    // Of course, you can do anything else you need to here, like emit an event!
});

// Data is flushed from fileStream in chunks,
// this callback will be executed for each chunk
fileStream.on('data', (chunk) => {
    chunks.push(chunk); // push data chunk to array

    // We can perform actions on the partial data we have so far!
});
console.log(chunks);