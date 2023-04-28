
const questSubText = document.querySelector('.quest-sub-txt');
const questBtn = document.querySelectorAll('.lst-btn li button');

console.log(questBtn);

 
//  listen for Question Button Click
questBtn.forEach(button => button.addEventListener('click', closeTexts));


function closeText() {

    questSubText.style.display="none";
}