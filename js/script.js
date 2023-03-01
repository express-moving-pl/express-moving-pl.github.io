import langArr from "./translation.js";

window.onload = function() {
    addBtnClickHandler();
}

const headerLanguages = document.querySelectorAll('.header__language .language');
const itemText = document.querySelectorAll('.item .item__text');
const advantages = document.querySelector('.lng-advantages1');

const addBtnClickHandler = () => {
    document.querySelector('.header__language').addEventListener('click', (e) => {
        if(e.target.classList.contains('language')) {
            let clickedBtn = e.target;
            let aktiveLanguage = e.target.id;
            selectClickedBtn(clickedBtn);
            changeLanguage(aktiveLanguage);
        } 
    })
}

const selectClickedBtn = (clickedBtn) => {
    removeSelectedBtn();
    clickedBtn.classList.add('language_aktive');

}

const removeSelectedBtn = () => {
    headerLanguages.forEach(language => {
        language.classList.remove('language_aktive');
    })
}
console.log(document.getElementById('header-number').href)
const changeLanguage = (aktiveLanguage) => {
    for(let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][aktiveLanguage];
    }        
    if(aktiveLanguage == 'pl') {
        document.getElementById('header-number').href = 'tel:+48508675277';
        console.log(document.getElementById('header-number').href)
        document.getElementById('footer-number').href = 'tel:+48508675277';
        itemText.forEach(text => {
            text.classList.add('item__text-pl');
        })
        advantages.style.fontWeight = '600';
    }
}