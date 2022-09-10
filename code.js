 basket = [
    {id: '1', title: 'Dildo', price: 15.15},
    {id: '2', title: 'Lubricant', price: 5.10},
    {id: '3', title: 'Plug', price: 10.50},
    {id: '4', title: 'Vibrator', price: 20.45},
    {id: '5', title: 'Masturbator', price: 18.50},
    {id: '6', title: 'Bondage', price: 13.00},

];



let list = document.getElementById('list');
let summ = document.getElementById('total');

basket.forEach((basket, index) => {
    //let itemHR = document.createElement('HR')
    let itemP = document.createElement('p');
    let itemText = document.createTextNode(`${basket.id}) ${basket.title}: $${basket.price}`);
    itemP.appendChild(itemText);
    list.appendChild(itemP);
    //list.appendChild(itemHR);
    //test

});

let total = 0;
basket.forEach(item => {
    total = total + item.price;
});

summ.innerHTML = 'TOTAL: $' + total;



