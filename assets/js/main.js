const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

console.log(tabs)

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab,index) => {
    tab.onclick = () => {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        tab.classList.add('active');
        panes[index].classList.add('active')
        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
    }
})

let i = 0;
setInterval(() => {
    if ( i < tabs.length) {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        tabs[i].classList.add('active');
        panes[i].classList.add('active')
        line.style.left = tabs[i].offsetLeft + 'px';
        line.style.width = tabs[i].offsetWidth + 'px';
        i++;
    } else {
        i = 0;
    }
}, 1500)