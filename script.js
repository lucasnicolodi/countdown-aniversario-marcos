/* demonstração de como substituir um texto em html ->
document.getElementById("container__tempo__texto--dias").innerText = "";  */

let anoAtual = new Date().getFullYear();

const diaAniversario = "22";
const mesAniversario = "Oct";
const aniversarioEsteAno = new Date(`${diaAniversario} ${mesAniversario} ${anoAtual}`);

function tempoAteNiver(){
    const dataAtual = new Date();
    var countdown; // qtde milisegundos até niver
    
    if(dataAtual < aniversarioEsteAno){
        countdown = aniversarioEsteAno - dataAtual;
    } else {
        countdown = aniversarioEsteAno.setFullYear(aniversarioEsteAno.getFullYear() + 1) - dataAtual; //adicionando um ano para pegar o aniversário do próximo ano
    }

    var totalSecsAteNiver = Math.floor(countdown / 1000);
    var dias = Math.floor(totalSecsAteNiver / 3600 / 24);
    var hrs = Math.floor((totalSecsAteNiver / 3600) - (dias * 24));
    var mins = Math.floor(((totalSecsAteNiver / 60) - (dias * 24 * 60))-(hrs*60));
    var secs = Math.floor(((totalSecsAteNiver - (dias * 24 * 3600))-(hrs*3600))-(mins*60));

    if(dias < 10){
        document.getElementById("container__tempo__texto--dias").innerText = "0" + dias;
    } else{
        document.getElementById("container__tempo__texto--dias").innerText = dias;
    }
    if(hrs < 10){
        document.getElementById("container__tempo__texto--hrs").innerText = "0" + hrs;
    } else{
        document.getElementById("container__tempo__texto--hrs").innerText = hrs;
    }
    if(mins < 10){
        document.getElementById("container__tempo__texto--mins").innerText = "0" + mins;
    } else{
        document.getElementById("container__tempo__texto--mins").innerText = mins;
    }
    if(secs < 10){
        document.getElementById("container__tempo__texto--secs").innerText = "0" + secs;
    } else{
        document.getElementById("container__tempo__texto--secs").innerText = secs;
    }
 



}

tempoAteNiver();

setInterval(tempoAteNiver, 1000);