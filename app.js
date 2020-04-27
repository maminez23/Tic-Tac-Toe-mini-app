console.log('hello')
//**********Global Variables********
var symbol = 'O';
var count = 0;
let result = [[],[],[]];

//*******Helpers*************
function updateResult(ref, text){
    var col = ref[1];
    var row = ref[0];
    console.log(col,row, result)
    result[row][col] = text;
}

function check(start){

}

//******   MAIN App **********
function draw(){
    symbol = (symbol === 'X')? 'O' : 'X';
    this.textContent = symbol;
    // *****this part will return the matrix representation of the game which is the var result
    var ref = this.id;
    updateResult(ref, this.textContent);
   //********
    count++;
    this.removeEventListener("click", draw, false);
    if(count >= 6){
        check(ref);
    }

}

//********Events*********
var tds = document.getElementsByTagName('td')
for(let i = 0 ; i < tds.length; i++){
    tds[i].addEventListener('click', draw)
}

document.getElementsByTagName('button')[0].addEventListener('click', function(){
    for(let i = 0 ; i < tds.length; i++){
        tds[i].textContent = ''
        }
});
