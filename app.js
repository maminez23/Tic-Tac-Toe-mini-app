console.log('hello');
//**********Global Variables********
var symbol = 'O';
var count = 0;
let result = [[],[],[]];

//*******Helpers*************
function updateResult(col, row, text){
    result[row][col] = text;
    console.log(result)
}

function verifyColumn(col, text) {
    for(let i = 0; i < 3; i++){
        if(result[i][col] !== text){
            return false
        }
    }
    return true
}

function verifyRow(row, text){
    for(let i = 0; i < 3; i++){
        if(result[row][i] !== text){
            return false
        }
    }
    return true
}
function verifyMajorDiago(text) {
    for(let i = 0; i < 3; i++){
        if(result[i][i] !== text){
            return false
        }
    }
    return true
}

function verifyMinorDiago(text) {
    for(let i = 2; i >= 0; i--){
        for(let j = 0; j < 3; j++){
            if(result[j][i] !== text){
                return false
            }
        }
    }
    return true
}

function check(col, row, text){
    console.log('inside check', text);
    if(verifyColumn(col, text) || verifyRow(row, text)) return true;
    if(col === row){
        if(verifyMajorDiago(text) || verifyMinorDiago(text)) return true
    }
}

//******   MAIN App **********
function draw(){
    symbol = (symbol === 'X')? 'O' : 'X';
    var col = this.id[1];
    var row = this.id[0];
    if(!result[row][col]){
        this.textContent = symbol;
        updateResult(col, row, symbol);
        count++;
        if(count >= 5){
            if(check(col, row, symbol)){
                if(symbol === 'X'){
                    document.getElementById('win').textContent = 'Player 1 wins'
                }
                else{
                    document.getElementById('win').textContent = 'Player 2 wins'
                }
            }
        }
    }
}

//********Events*********
var tds = document.getElementsByTagName('td');
for(let i = 0 ; i < tds.length; i++){
    tds[i].addEventListener('click', draw)
}

document.getElementsByTagName('button')[0].addEventListener('click', function(){
    for(let i = 0 ; i < tds.length; i++){
        tds[i].textContent = '';
        tds[i].addEventListener("click", draw)
    }
    count = 0;
    result = [[],[],[]]
    document.getElementById('win').textContent = ''
    symbol = 'O'
});
