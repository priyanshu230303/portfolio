const dynamicContent=document.getElementById("dynamic");   // we have given a variable name and put in span by giving id of span
 
const phrases=["beginner..","learner..","college student.."]  //given pharses what we have to put in  span
let phraseIndex=0   
let letterIndex=0;
const typingspeed=100;
const erasingspeed=50;

function printletters(phrase){   // it accept phrases whose letters are to pbe printed
    if(letterIndex==phrase.length){
        clearLetters();
    }
   else if(letterIndex < phrase.length){                // 0 and beginner has 8 so it will check until letter index reaches seven the below code wil go on
        dynamicContent.textContent+=phrase.charAt(letterIndex);      // this line is giving value to span tag which will fill in web page if we dont use + the index will not increase and it will be on same place
        letterIndex += 1;
        setTimeout(function(){
            printletters(phrase)
        },typingspeed);
    }

    function clearLetters(){
        if(letterIndex==-1){
            phraseIndex=(phraseIndex+1)%phrases.length;    // this is to run loop so that when phrseindex comes to 3 ans module by its length it again comet to 0
        letterIndex=0;
        printletters(phrases[phraseIndex])
        }
        else if(letterIndex>-1){
    let updatedPhrase="";
    for(let index=0; index<letterIndex;index++){
        updatedPhrase+=phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent=updatedPhrase;
    letterIndex-=1;
    setTimeout(clearLetters,erasingspeed)  // dont use () this sign
}
    }
}
printletters(phrases[phraseIndex]);