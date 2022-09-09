const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        removeFocus(); //сначала удалаяем стили со ВСЕХ элементов
        item.classList.add('selected') // потом на нужный элемент навешиваем стиль

    }
    );

})

 removeFocus = () => {  
    items.forEach(item=> {
        item.classList.remove('selected');
    })
}