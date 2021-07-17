/*
function maiusculas()  {
    let p = document.getElementById('tprin')
    let res = document.getElementById('res')

    
    if(p.value.length === 0){ //pega o valor de dentro do input e compara se está vazio ou não.
        window.alert('[ERRO] Texto não identificado!')
    } else{
        let r = p.value.toUpperCase();  // o value serve pra pegar o valor de dentro do objeto!
        res.innerHTML = r          
    }
}
*/
function maiusculas() {
    let p = document.getElementById("tprin")
    let res = document.getElementById("res")

    if (p.value.length === 0) {
        window.alert('[ERRO] Texto não identificado')
    } else {
        let r = p.value.toUpperCase();
        res.innerHTML = r 
    }
}

function minusculas()  {
    let p = document.getElementById('tprin')
    let res = document.getElementById('res')

    if(p.value.length === 0){ //pega o valor de dentro do input e compara se está vazio ou não.
        window.alert('[ERRO] Texto não identificado!')
    } else{
        let r = p.value.toLowerCase();  // o value serve pra pegar o valor de dentro do objeto!
        res.innerHTML = r
    }
}

function primeira_letra()  {
    let p = document.getElementById('tprin')
    let res = document.getElementById('res')

    if(p.value.length === 0) { //pega o valor de dentro do input e compara se está vazio ou não.
        window.alert('[ERRO] Texto não identificado!')
    } else{
        let r = p.value[0].toUpperCase()+p.value.slice(1).toLowerCase();  // o value serve pra pegar o valor de dentro do objeto!
        res.innerHTML = r
    }            
}


function inverter() {
    let p = document.getElementById('tprin')
    let res = document.getElementById('res')

    if(p.value.length === 0){ //pega o valor de dentro do input e compara se está vazio ou não.
        window.alert('[ERRO] Texto não identificado!')
    } else{   
        const word = p.value
        let r = word.split('').reverse().join().replace(/,/g, '')
        res.innerHTML = r
    }    
}



