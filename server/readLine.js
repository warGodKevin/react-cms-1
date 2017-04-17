const readline = require('readline');
const path = require("path");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入您的mongo url例如(mongodb://ywk888:123456@ds062059.mlab.com:62059/reat-cms)===>', (answer) => {
  let url = {url:answer};
  url = JSON.stringify(url) 
  console.log(`您输入的mongo url为: ${answer}`);
  fs.writeFile(path.resolve(__dirname, "./murl.json"),url,"utf-8",(ret)=>{
  	rl.close();
  })  
});