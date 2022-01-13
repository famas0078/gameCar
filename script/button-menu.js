let locationX = 0;
let locationY = 0;
document.addEventListener("keyup", function (event) {
    if (event.code == 'KeyD' && locationX==0){
        locationX++;
        block.classList.remove('left');
        block.classList.add('right');
	    console.log(`X = ${locationX}\nY = ${locationY}`);
}});
document.addEventListener("keyup", function (event) {
    if (event.code == 'KeyA' && locationX==1){
        locationX--;
        block.classList.remove('right');
        block.classList.add('left');
	    console.log(`X = ${locationX}\nY = ${locationY}`);;
}});
document.addEventListener("keyup", function (event) {
    if (event.code == 'KeyW' && locationY==0){
        locationY++;
        block.classList.remove('buttom');
        block.classList.add('top');
	    console.log(`X = ${locationX}\nY = ${locationY}`);
}});
