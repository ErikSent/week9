const inputString = document.querySelector('#userInput');

const btnOnce = document.querySelector('#print1');
const ulOnce = document.querySelector('#listOnce');

const btnTwice = document.querySelector('#print2');
const ulTwice = document.querySelector('#listTwice');

const btnTen = document.querySelector('#print10');
const ulTen = document.querySelector('#listTen');


btnOnce.addEventListener('click', () => {
    const userInput = inputString.value;
    const newListItem = document.createElement('li');
    newListItem.appendChild(document.createTextNode(userInput));
    ulOnce.appendChild(newListItem);


});

btnTwice.addEventListener('click', () => {
    const userInput = inputString.value;

    for(let i = 0; i < 2; i++) {

        const newListItem = document.createElement('li');
        newListItem.appendChild(document.createTextNode(userInput));
        ulTwice.appendChild(newListItem);

     }

});

btnTen.addEventListener('click', () => {
    const userInput = inputString.value;

    for(let i = 0; i < 10; i++) {

        const newListItem = document.createElement('li');
        newListItem.appendChild(document.createTextNode(userInput));
        ulTen.appendChild(newListItem);

     }
});