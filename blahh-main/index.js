const pg = document.querySelector('#page');
const subMenu = document.querySelector('.sub');
const cat = document.querySelector('#cat');
const catMenu = document.querySelector('.cats');
const listBtn = document.querySelector('#list');
const closeBtn = document.querySelector('#close');
const btn = document.querySelector('#btn-1');
const menu = document.querySelector('.menu');

cat.addEventListener('click', function (event) {
    if (!event.target.classList.contains('cat-items')) {
        event.preventDefault();
    }
    catMenu.classList.toggle('show');
});

listBtn.addEventListener('click', function(){
    menu.classList.add('menu-open')
    listBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    if (tipsSection.style.display === "none" || tipsSection.style.display === "") {
        tipsSection.style.display = "block";
    } else {
        tipsSection.style.display = "none";
    }
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('menu-open')
    listBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});




btn.addEventListener('click', function(){
    location.reload();
})




document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputField = document.querySelector('#user-email');
        if (inputField.value.trim() != '') {
            btn.click();
        }   
    }
});

