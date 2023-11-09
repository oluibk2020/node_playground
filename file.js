const fs = require("fs");

//reading files
// fs.readFile('./docs/recipekey.txt', (err, data) =>{

//     if (err) {
//        console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

//writing files
// fs.writeFile('./docs/test.txt', 'hello world', () => {
//     console.log('file was written');
// })
//writing files to a file that do not exist
// fs.writeFile('./docs/test2.txt', 'hello world', () => {
//     console.log('file was written');
// })

//working with directories
//checking if folder exists, dont run
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("directory is created");
    }
  });
} else {
  //REMOVE directory
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder is deleted");
    }
  });
}

//DELETE files
if (fs.existsSync("./docs/test2")) {
  fs.unlink("./docs/test2", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}


//stream and buffer
//creating a read stream
const readStream = fs.createReadStream('./docs/test2.txt', {encoding: 'utf8'})
//creating a write stream
const writeStream = fs.createWriteStream('./docs/test3.txt')

// readStream.on('data', (chunk) => {
//     //writing buffer data to new file
//     writeStream.write('NEW STREAM')
//     writeStream.write(chunk)
// })

//using piping method to write stream into a new file
readStream.pipe(writeStream)