const fs = require("fs");

//async have callback function
fs.writeFile("file.txt","life is beautiful.",
(err) => {
    console.log('Done your work');
    console.log(err);
}
);


fs.appendFile("file.txt"," Congrats,you just learnt about sync/async.",
(err)=>{
    console.log('Your work is done.');
}
)

fs.readFile('file.txt',"UTF-8",(err,data)=>{
    console.log(data);
})