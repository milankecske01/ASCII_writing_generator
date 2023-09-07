let output = document.getElementById("output")
let fon = document.getElementById("font").value
let regex=/.*\.txt/
//writeText()
function writeText(){
    console.log("amingsa");
}
function changeActiveFont(){
    console.log("dfasfdadasda");
}
listFilesInFolder("/fonts")
async function listFilesInFolder(folderPath) {//Lehetne sokkal jobb a kód de egyelőre ez jó lesz
    try {
        const data = await response.text();
        const fileNames = data.split('\n').map(fileName => fileName.trim()).filter(Boolean);  
        fileNames.forEach(fileName => {
            if (fileName.includes(".txt")) {
                console.log(fileName.match(regex)[0].substring(20).split('"')[0])
            }
        });
    } catch (error) {
        console.error('Error fetching file list:', error);
    }
}
