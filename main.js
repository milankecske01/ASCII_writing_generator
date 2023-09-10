/*
TODO: úgy döntöttem, hogy átállok arra, hogy minden karakter ugyanolyan magas lesz szóval a jövőben nem lezs szükség a padelésre
+ a pre (output) magasságának átállítása arra ami a jelenlegi font betűmérete
*/
let output = document.getElementById("output")
let fonts = document.getElementById("fonts")
let currentFont="alligator2_Windows_1252_LIMITED";
const fontList= {
alligator2_Windows_1252_LIMITED:{//ez a lopott
"!":
`::: 
:+: 
+:+ 
+#+ 
+#+ 
   
### `,
"\"":`::: ::: 
:+: :+: 
        
        
        
        
        `,
"#":
`   :::   :::    
   :+:   :+:    
+:+:+:+:+:+:+:+ 
   +#+   +:+    
+#+#+#+#+#+#+#+ 
   #+#   #+#    
   ###   ###     
`,
"$":
`     :::     
   :+:+:+:+:  
  +:+  +:+     
   +#++:++#+  
      +#+ +#+ 
   #+#+#+#+#  
      ###     `,
"%":
`:::   :::       
:+:   :+:       
      +:+       
      +#+       
      +#+       
      #+#   #+# 
      ###   ### `,
"&":
` :::::::     
:+:   :+:    
 +:+ +:+     
  +#++:  ++# 
 +#+ +#+#+#  
#+#   #+#+   
 ##########  `,
"'":
`::: 
:+  
    
    
    
    
    `,
"(":
`  ::: 
:+:  
+:+   
+#+   
+#+   
#+#  
 ### `,
")":
`:::   
:+:  
 +:+ 
 +#+ 
 +#+ 
#+#  
###  `,
"*":
`              
 :+:     :+:  
   +:+ +:+    
++#++:++#++:++ 
   +#+ +#+    
 #+#     #+#  
             `,
"+":
`              
     :+:      
     +:+      
+#++:++#++:++ 
     +#+      
     #+#`,
",":
`    
    
    
    
    
#+# 
##  `,
"-":
`              
              
              
+#++:++#++:++ 
              
              
              `,
".":
`    
    
    
    
    
#+# 
### `,
"/":
`      ::: 
     :+:  
    +:+   
   +#+    
  +#+     
 #+#      
###      `,
"0":
` :::::::  
:+:   :+: 
+:+  :+:+ 
+#+ + +:+ 
+#+#  +#+ 
#+#   #+# 
 #######  `,
"1":
`  :::   
:+:+:   
  +:+   
  +#+   
  +#+   
  #+#   
####### `,
"2":
` ::::::::  
:+:    :+: 
      +:+  
    +#+    
  +#+      
 #+#       
########## `,
"3":
` ::::::::  
:+:    :+: 
       +:+ 
    +#++:  
       +#+ 
#+#    #+# 
 ########  `,
"4":
`    :::     
   :+:       
  +:+ +:+   
 +#+  +:+   
+#+#+#+#+#+ 
      #+#   
      ###   `,
"5":
`:::::::::: 
:+:    :+: 
+:+        
+#++:++#+  
       +#+ 
#+#    #+# 
 ########  `,
"6":
` ::::::::  
:+:    :+: 
+:+        
+#++:++#+  
+#+    +#+ 
#+#    #+# 
 ########  `,
"7":
`::::::::::: 
:+:     :+: 
       +:+  
      +#+   
     +#+    
    #+#     
    ###     `,
"8":
` ::::::::  
:+:    :+: 
+:+    +:+ 
 +#++:++#  
+#+    +#+ 
#+#    #+# 
 ########  `,
"9":
` ::::::::  
:+:    :+: 
+:+    +:+ 
 +#++:++#+ 
       +#+ 
#+#    #+# 
 ########  `,
":":
`    
:+: 
    
    
    
#+# 
    `,
";":
`    
:+: 
    
    
    
#+# 
##  `,
"<":
`   ::: 
  :+:  
 +:+   
+#+    
 +#+   
  #+#  
   ### `,
"=":
`              
              
+:+:+:+:+:+:+ 
              
+#+#+#+#+#+#+ 
              
              `,
">":
`:::    
 :+:   
  +:+  
   +#+ 
  +#+  
 #+#   
###     `,
"?":
` :::::::::  
:+:     :+: 
       +:+  
      +#+   
    +#+     
            
    ###     `,
"@":
`   :::::::::::    
:+: :+:+:+:+:+:  
+:+ +:+   +:+ +:+ 
+#+ +:+   +#+ +:+ 
+#+ +#+   +#+ +#+ 
#+# #+#+#+#+#+   
  #####          `,
"a":
`    :::     
  :+: :+:   
 +:+   +:+  
+#++:++#++: 
+#+     +#+ 
#+#     #+# 
###     ### `,
"b":
`:::::::::  
:+:    :+: 
+:+    +:+ 
+#++:++#+  
+#+    +#+ 
#+#    #+# 
#########  `,
"c":
` ::::::::  
:+:    :+: 
+:+        
+#+        
+#+        
#+#    #+# 
 ########  `,
"d":
`:::::::::  
:+:    :+: 
+:+    +:+ 
+#+    +:+ 
+#+    +#+ 
#+#    #+# 
#########  `,
"e":
`:::::::::: 
:+:        
+:+        
+#++:++#   
+#+        
#+#        
########## `,
"f":
`:::::::::: 
:+:        
+:+        
:#::+::#   
+#+        
#+#        
###        `,
"g":
` ::::::::  
:+:    :+: 
+:+        
:#:        
+#+   +#+# 
#+#    #+# 
 ########  `,
"h":
`:::    ::: 
:+:    :+: 
+:+    +:+ 
+#++:++#++ 
+#+    +#+ 
#+#    #+# 
###    ### `,
"i":
`::::::::::: 
    :+:     
    +:+     
    +#+     
    +#+     
    #+#     
########### `,
"j":
`::::::::::: 
    :+:     
    +:+     
    +#+     
    +#+     
#+# #+#     
 #####`,
"k":
`:::    ::: 
:+:   :+:  
+:+  +:+   
+#++:++    
+#+  +#+   
#+#   #+#  
###    ### `,
"l":
`:::        
:+:        
+:+        
+#+        
+#+        
#+#        
########## `,
"m":
`::::    ::::  
+:+:+: :+:+:+ 
+:+ +:+:+ +:+ 
+#+  +:+  +#+ 
+#+       +#+ 
#+#       #+# 
###       ### `,
"n":
`::::    ::: 
:+:+:   :+: 
:+:+:+  +:+ 
+#+ +:+ +#+ 
+#+  +#+#+# 
#+#   #+#+# 
###    #### `,
"o":
` ::::::::  
:+:    :+: 
+:+    +:+ 
+#+    +:+ 
+#+    +#+ 
#+#    #+# 
 ########  `,
"p":
`:::::::::  
:+:    :+: 
+:+    +:+ 
+#++:++#+  
+#+        
#+#        
###        `,
"q":
` ::::::::   
:+:    :+:  
+:+    +:+  
+#+    +:+  
+#+  # +#+  
#+#   +#+   
 ###### ### `,
"r":
`:::::::::  
:+:    :+: 
+:+    +:+ 
+#++:++#:  
+#+    +#+ 
#+#    #+# 
###    ### `,
"s":
` ::::::::  
:+:    :+: 
+:+        
+#++:++#++ 
       +#+ 
#+#    #+# 
 ########  `,
"t":
`::::::::::: 
    :+:     
    +:+     
    +#+     
    +#+     
    #+#     
    ###     `,
"u":
`:::    ::: 
:+:    :+: 
+:+    +:+ 
+#+    +:+ 
+#+    +#+ 
#+#    #+# 
 ########  `,
"v":
`:::     ::: 
:+:     :+: 
+:+     +:+ 
+#+     +:+ 
 +#+   +#+  
  #+#+#+#   
    ###     `,
"w":
`:::       ::: 
:+:       :+: 
+:+       +:+ 
+#+  +:+  +#+ 
+#+ +#+#+ +#+ 
 #+#+# #+#+#  
  ###   ###   `,
"x":
`:::    ::: 
:+:    :+: 
 +:+  +:+  
  +#++:+   
 +#+  +#+  
#+#    #+# 
###    ### `,
"y":
`:::   ::: 
:+:   :+: 
 +:+ +:+  
  +#++:   
   +#+    
   #+#    
   ###    `,
"z":
`::::::::: 
     :+:  
    +:+   
   +#+    
  +#+     
 #+#      
######### `,
"[":
`:::::: 
:+:    
+:+    
+#+    
+#+    
#+#    
###### `,
"\\":
`:::       
:+:      
 +:+     
  +#+    
   +#+   
    #+#  
     ### `,
"]":
`:::::: 
    :+: 
    +:+ 
    +#+ 
    +#+ 
    #+# 
###### `,
"^":
`    :::     
  :+: :+:   
+:+     +:+ 
          
          
          
          `,
"_":
`           
           
           
           
           
           
########## `,
"`":
`::: 
:+ 
   
   
   
   
   `,
"{":
`   :::: 
  :+:   
  +:+   
+#+     
  +#+   
  #+#   
   #### `,
"|":
`::: 
:+: 
+:+ 
    
+#+ 
#+# 
### `,
"}":
`::::    
  :+:   
  +:+   
    +#+ 
  +#+   
  #+#   
####    `,
"~":
`  :::::   ::: 
:+:   :+:+:   
              
              
              
              
              `,
" ":
`  
  
  
  
  
  
  `
},
example_incomplete:{
    "?":
    `
    
     ____
    /    \\
         |
        /
       /
       |
       o`,
    "a":
    `

           /\\
          /  \\
         /    \\
        /      \\
       /        \\
      /----------\\
     /            \\
    /              \\`,
    "b":
    `    -------
    |      >
    |       >
    |      >
    |-----
    |      >
    |       >
    |      >
    L-----`,
    " ":
    `  `,
    }
}
for (const font of Object.keys(fontList)) {
    let option=document.createElement("option")
    option.innerHTML=font
    option.value=font
    fonts.appendChild(option)
}

function changeActiveFont(){
    currentFont=fonts.value;
    writeText()
}

var padding = document.getElementById("padding").value
document.getElementById("padding").addEventListener("change", function(){
    padding = document.getElementById("padding").value
    writeText()
})

function getTallestLetter(sentence){
    let maxHeight = 0
    let currentHeight = 0
    for (let i = 0; i < sentence.length; i++) {
        try {
            currentHeight = fontList[currentFont][sentence[i]].split("\n").length
        } catch {
            currentHeight = fontList[currentFont]["?"].split("\n").length
        }
        if(maxHeight < currentHeight){
            maxHeight = currentHeight
        }
    }
    return maxHeight
}

writeText()
function writeText(){// megkapja az inputot azután kiírja a pre-be az ASCII artot
    let sentence=document.getElementById("input").value.toLowerCase()
    let lines= []
    let maxHeight= getTallestLetter(sentence)
    // ---------
    let currentLetter
    for (let inputIndex = 0; inputIndex < sentence.length; inputIndex++) {
        //Get Current letter from list
        if(sentence[inputIndex] in fontList[currentFont]){
            currentLetter = fontList[currentFont][sentence[inputIndex]]
        } else{
            currentLetter = fontList[currentFont]["?"]
        }
        currentLetter = currentLetter.split("\n")
        
        let longestLine = 0
        currentLetter.forEach(e => {longestLine = e.length > longestLine? e.length : longestLine})//find longest line then pad letters horizontally
        for (let i = 0; i < currentLetter.length; i++) {
            currentLetter[i] += " ".repeat(longestLine - currentLetter[i].length)
        }

        for (let o = 0; o < maxHeight; o++) {
            if(o < maxHeight - currentLetter.length){
                if(lines[o] === undefined){ 
                    lines[o] = " ".repeat(longestLine)
                } 
                else{ 
                    lines[o] += " ".repeat(longestLine)
                }
            } else {
                if(lines[o] === undefined){
                    lines[o] = currentLetter[o - (maxHeight - currentLetter.length)]
                } 
                else{
                    lines[o] += currentLetter[o - (maxHeight - currentLetter.length)]
                }
            }
        }

        for (let p = 0; p < lines.length; p++) {//add padding
            if (inputIndex==sentence.length-1) {
                break;
            }
            lines[p] += padding
        }
    }
    output.innerHTML=""
    for (let index = 0; index < lines.length; index++) {
        output.innerHTML+=lines[index]+"\n"
    }

    return
}
    // ---------
    //for (let index = 0; index < sentence.length; index++) {//az egész mondatot loopolja betűnként
    //    for (let letter of Object.keys(fontList[currentFont])) {//a font betűit loopolja betűnként
    //        let letterLines=fontList[currentFont][letter].split("\n");
    //        let longestLine=0;
    //        if (letter==sentence[index].toLowerCase()){
    //            for (let k = 0; k < letterLines.length; k++) {//find out how long the longest line of the current letter is
    //                if (letterLines[k].length>longestLine) {
    //                    longestLine=letterLines[k].length;
    //                }
    //            }
    //            for (let k = 0; k < letterLines.length; k++) {//pad the letter out so that all lines are the same length then add the lines to the "lines" array
    //                for (let h = 0; h < (longestLine - letterLines[k].length); h++) {
    //                    letterLines[k]+=" "
    //                }
    //                lines[k]+=letterLines[k]
    //            }
    //            lettersGoneThrough=0;
    //            break;
    //        }
    //        lettersGoneThrough++;
    //    }
//
    //    if (lettersGoneThrough == numberOfLetters) {//letter not found in font... put a  "?" in it's place (all fonts must have a ?)
    //        let letterLines=fontList[currentFont]["?"].split("\n");
    //        let longestLine=0;
    //        for (let k = 0; k < letterLines.length; k++) {//find out how long the longest line of the current letter is
    //            if (letterLines[k].length>longestLine) {
    //                longestLine=letterLines[k].length;
    //            }
    //        }
    //        for (let k = 0; k < letterLines.length; k++) {//pad the letter out so that all lines are the same length then add the lines to the "lines" array
    //            //console.log(letterLines[index])
    //            for (let h = 0; h < (longestLine - letterLines[k].length); h++) {
    //                letterLines[k]+=" "
    //            }
    //            lines[k]+=letterLines[k]           
    //        }
    //        lettersGoneThrough=0;
    //    }
    //    output.innerHTML=""
    //    for (let index = 0; index < lines.length; index++) {
    //        output.innerHTML+=lines[index]+"\n"
    //    }
        

    //}
    /*
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
    console.log(toWrite)
    */


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