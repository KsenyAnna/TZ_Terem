const blockOne = document.querySelector('.block_one');
const blockBlue = document.querySelector('.block_two__blue-light ');
const blockBlueLight = document.querySelector('.block_two__blue');

function show_blockOne () {
    blockOne.classList.toggle('block_one--active');
}
function blocks_change () {
    blockBlue.classList.toggle('block_two__blue--first');
    blockBlueLight.classList.toggle('block_two__blue--first');
}

window.addEventListener('load', () => {
    alert('Привет, мир');
});

button1.addEventListener("click", show_blockOne);
button2.addEventListener("click", blocks_change);
