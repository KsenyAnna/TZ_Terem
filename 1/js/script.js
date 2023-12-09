button1.onclick = function show_block () {
    let myBlock = document.getElementsByClassName('block_one');

    if (myBlock[0].style.display === 'none') {
        myBlock[0].style.display = 'block';
    } else {
        myBlock[0].style.display = 'none';
    }
};

button2.onclick = function block_change () {
    let items = document.getElementsByClassName('block_two__item');

    if (getComputedStyle(items[0]).order === '1') {
        items[0].style.WebkitOrder = '2';
        items[1].style.WebkitOrder = '1';
    } else {
        items[0].style.WebkitOrder = '1';
        items[1].style.WebkitOrder = '2';
    }
};