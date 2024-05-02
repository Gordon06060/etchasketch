const container = document.querySelector('#container');
const newContainer = document.querySelector('#newContainer');

function changeColor(event){
    event.target.style.backgroundColor = 'red';
}

function changeColorBack(event){
    event.target.style.backgroundColor = 'white';
}



for (n=0; n<16; n++){
    const rowdiv = document.createElement('div');
    rowdiv.classList.add('rowdiv');
    container.appendChild(rowdiv);
    for (i=0; i<16; i++){
        const div1 = document.createElement('div');
        div1.classList.add('div1');
        rowdiv.appendChild(div1);
        div1.addEventListener('mouseover', changeColor);
        div1.addEventListener('mouseout', changeColorBack);

    };
};

function createGrid(){
    let input = prompt('How many grids do you want');
    container.remove();
    for (n=0; n<input; n++){
        const rowdiv = document.createElement('div');
        rowdiv.classList.add('rowdiv');
        newContainer.appendChild(rowdiv);
        for (i=0; i<input; i++){
            const div1 = document.createElement('div');
            div1.classList.add('div1');
            rowdiv.appendChild(div1);
            div1.addEventListener('mouseover', changeColor);
            div1.addEventListener('mouseout', changeColorBack);

        };
    };
};

const button = document.querySelector('#gridbutton');
button.addEventListener('click', createGrid);



