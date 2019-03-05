const word = document.getElementsByClassName("standOut")[0].innerHTML;
//console.log(word, word.firstChild, typeof word.firstChild, word.innerHTML, typeof word.innerHTML, word.innerHTML[0], word.innerHTML[0].style, word.innerHTML.style, word.style, word.firstChild.firstChild);
//const thingie = word.innerHTML[0];
//console.log(thingie, thingie.style);
//console.log(word.childNodes, word.childNodes[0]);
const element = document.querySelector('.standOut');
var letters = element.innerHTML;
console.log(element, letters, letters[0]);
//letters.replace(letters[0], "poo");
//element.innerHTML = element.innerHTML.replace(letters[0], `<span style="color: yellow;">${letters[0]}</span>`);
//element.innerHTML = element.innerHTML.replace(`<span style="color: yellow;">${letters[0]}</span>`, letters[0]);
//element.innerHTML = element.innerHTML.replace(letters[1], `<span style="color: yellow;">${letters[1]}</span>`);
//for (let i = 0; i < letters.length; i++) {
//let letterPointer = 0;
//while (true) {

//for (let i = 0; i < 100; i++) {
//    setInterval(newColor(letterPointer), 1000);
//    letterPointer = letterPointer = letters.length * 2 ? 0 : letterPointer + 1;
//
//    //only change the one you want to
//    //    setTimeout(newColor(i), 10000);
//    //    element.innerHTML = element.innerHTML.replace(letters[i], `<span style="color: yellow;">${letters[i]}</span>`);
//    //    setTimeout(function () {
//    //        element.innerHTML = element.innerHTML.replace(`<span style="color: yellow;">${letters[i]}</span>`, letters[i])
//    //    }, 1000);
//}

let letterPointer = 0,
    ratio = 2,
    timer = 1000;
let timeThis = setInterval(function () {
    newColor(letterPointer);
    letterPointer = letterPointer === letters.length * ratio ? 0 : letterPointer + 1;
}, timer);

function newColor(letterPointer) {
    if (letterPointer % ratio === 0) {
        element.innerHTML = element.innerHTML.replace(letters[letterPointer / ratio], `<span class="standOutMore">${letters[letterPointer/ratio]}</span>`);
    } else {
        element.innerHTML = element.innerHTML.replace(`<span class="standOutMore">${letters[Math.floor(letterPointer/ratio)]}</span>`, letters[Math.floor(letterPointer / ratio)]);
    }
}
