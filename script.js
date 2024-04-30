const container = document.querySelector('#container');
for (n=0; n<16; n++){
    const rowdiv = document.createElement('div');
    rowdiv.classList.add('rowdiv');
    container.appendChild(rowdiv);
    for (i=0; i<16; i++){
        const div1 = document.createElement('div');
        div1.classList.add('div1');
        rowdiv.appendChild(div1);
    };
};




