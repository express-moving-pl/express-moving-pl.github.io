import langArr from "./translation.js";

window.onload = function() {
    addBtnClickHandler();
}

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
    document.querySelectorAll('.header__language .language').forEach(language => {
        language.classList.remove('language_aktive');
    })
}
const changeLanguage = (aktiveLanguage) => {
    for(let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][aktiveLanguage];
    }        
    if(aktiveLanguage == 'pl') {
        document.getElementById('header-number').href = 'tel:+48508675277';
        document.getElementById('footer-number').href = 'tel:+48508675277';
        document.querySelector('.lng-advantages1').style.fontWeight = '600';
        document.querySelector('.services__title').classList.add('services__title-pl');
        document.querySelectorAll('.item .item__text').forEach(text => {
            text.classList.add('item__text-pl');
        })
    } else {
        document.querySelector('.lng-advantages1').style.fontWeight = '500';
        document.querySelector('.services__title').classList.remove('services__title-pl');
        document.querySelectorAll('.item .item__text').forEach(text => {
            text.classList.remove('item__text-pl');
        })
    }
}