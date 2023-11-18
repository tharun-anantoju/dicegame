let randNum1 = Math.floor(Math.random()*6)+1;
let randNum2 = Math.floor(Math.random()*6)+1;

document.querySelector('.img1').setAttribute('src' , 'images/dice'+randNum1.toString()+'.png');
document.querySelector('.img2').setAttribute('src' , 'images/dice'+randNum2.toString()+'.png');

if(randNum1 > randNum2){
    document.querySelector('h1').textContent = '🚩player 1 wins'
}
else if(randNum1 < randNum2){
    document.querySelector('h1').textContent = '🚩player 2 wins'
}
else{
    document.querySelector('h1').textContent = 'draw'
}