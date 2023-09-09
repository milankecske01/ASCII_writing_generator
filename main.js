let output = document.getElementById("output")
let fonts = document.getElementById("fonts")
let currentFont="example";
const fontList= {example:{//így kell kinéznie egy fontnak
"?":`
?   
`,
"a":`
       /\\
      /  \\
     /    \\
    /      \\
   /        \\
  /----------\\
 /            \\
/              \\
`,
"b":`
|-----
|      >
|       >
|      >
|-----
|      >
|       >
|      >
|-----
`
},
funky:{
"a":`
ide kéne a betűt rakni
`,
"?":`
?   
`,
}

}

for (const font of Object.keys(fontList)) {
    let option=document.createElement("option")
    option.innerHTML=font
    option.value=font
    fonts.appendChild(option)
}
writeText()
function writeText(){
    console.log("writing text")
    let toWrite="";
    let sentence=document.getElementById("input").value
    let numberOfLetters= Object.keys(fontList[currentFont]).length
    let lettersGoneThrough=0;
    console.log(sentence)
    for (let index = 0; index < sentence.length; index++) {
        for (let letter of Object.keys(fontList[currentFont])) {
            if (letter==sentence[index].toLowerCase()){
                toWrite+=fontList[currentFont][letter]
                lettersGoneThrough=0;
                break;
            }
            lettersGoneThrough++;
        }
        if (lettersGoneThrough == numberOfLetters) {
            toWrite+=fontList[currentFont]["?"]
            lettersGoneThrough=0;
        }
    }
    output.innerHTML=toWrite
}

function changeActiveFont(){
    currentFont=fonts.value;
}





/*
Régi kód. Nem működik mivel nincs szerver
const names = listFilesInFolder("/fonts")
let regex=/.*\.txt/

for (let index = 0; index < names.length; index++) {
    let option=document.createElement("option")
    option.innerHTML=names[index]
    option.value=names[index]
    fonts.appendChild(option)
}

async function listFilesInFolder(folderPath) {//Lehetne sokkal jobb a kód de egyelőre ez jó lesz
    try {
        let names=[]
        const response = await fetch(folderPath);
        const data = await response.text();
        const fileNames = data.split('\n').map(fileName => fileName.trim()).filter(Boolean);  
        fileNames.forEach(fileName => {
            if (fileName.includes(".txt")) {
                names.push(fileName.match(regex)[0].substring(20).split('.')[0])
            }
        });
        return names;
    } catch (error) {
        console.error('Error fetching file list:', error);
    }
}
*/