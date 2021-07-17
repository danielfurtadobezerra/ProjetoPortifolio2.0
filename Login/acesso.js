function acesso(form){
    /*
    Checa nome e senha - caso digite com letras maiúsculas, será convertido para letres minúsculas
    */

    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()
   


    if (form.nome.value == "admin" && form.senha.value == "admin"||form.nome.value == "daniel" && form.senha.value == "daniel281973"||form.nome.value == "livia" && form.senha.value == "livinha06"||form.nome.value == "andre" && form.senha.value == "zdnrnd12"){
                
        location = "acesso.html"
              
    }else{
        form.nome.value = ""
        form.senha.value = ""
        alert("Seu login ou sua senha estão incorretos!")
    }
}