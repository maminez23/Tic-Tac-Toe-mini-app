console.log('hello')
var symbol = 'O';
function draw(){
    symbol = (symbol === 'X')? 'O' : 'X'
    this.textContent = symbol;
}


var tds = document.getElementsByTagName('td');
for(let i = 0 ; i < tds.length; i++){
    tds[i].addEventListener('click', draw)
}




document.getElementsByTagName('button')[0].addEventListener('click', function(){
    for(let i = 0 ; i < tds.length; i++){
        tds[i].textContent = ''
        }
});
