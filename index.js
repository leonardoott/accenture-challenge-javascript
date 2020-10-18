window.setInterval(() => { if (waitCount) waitCount--; else if (strSend) postNumber() }, 300) //Usei um loopzinho temporal de 300 milise...
let strSend = "", strResultApi = "", waitCount = 0, strAlphabet = []
for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) strAlphabet.push(String.fromCharCode(i).toUpperCase()) //populei o arrey usando o santo charcode

function registerNumber(number) {    
    if (strSend) {
        let firstNumber = strSend[0] 
        if (number != firstNumber) postNumber();        
        if (strSend.length == ( ["7", "9"].indexOf(firstNumber) > -1 ? 4 : 3 ) ) { //Verfico se o limite de combinações por numero já chegou ao limite
            postNumber();
            return; 
        }
    }
    strSend += number;
    waitCount = 1;
}

function postNumber() {
    document.getElementById("display").innerHTML = getLetter(strSend);
    strSend = "";
    waitCount = 0;
}

function getLetter(_strSend) {    //Aqui representei a chamada ao Backend!
    let i = _strSend[0];
     //Fiz uma logicazinha pra pegar a letra levando em consideração a regrinha quando temos a tecla 7 e 9 com 4 caracteres cada uma
    let index = (((i-1) * 3)-1)-((['7','9'].indexOf(i) > -1 ? 4 : 3)-_strSend.length)+( i >= 7 ? 1 : 0)+( i == 9 ? 1 : 0)
    strResultApi += index > -1 ? strAlphabet[index] : " "
    return strResultApi;
}

//E Fim!!! =) @leonardoott