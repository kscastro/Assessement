function validaCampos(){
		if(!validateNome()) return false;

		if(!validateTel()) return false;

		if(!validateRua()) return false;

		if(!validateBairro()) return false;

		if(!validateCartao()) return false;

		if(!validateValCartao()) return false;


		
	}


	function validateNome(){
		var nome = document.getElementById("nome").value;

		if(nome == ""){
				alert("Por favor preencha o seu nome");
				document.getElementById("erro_nome");
				document.getElementById("nome").focus();
		}else{
				document.getElementById("erro_nome").innerHTML="";
				return true;
		}
	}
	
	function validateTel(){
		var tel = document.getElementById("tel").value;

		if (tel ==""){
    			alert('Por favor preencha o telefone.');
    			document.getElementById("erro_tel");
    			document.getElementById("tel").focus();
    	}else{
    		document.getElementById("erro_tel").innerHTML="";
    		return true;

    	}
	}
	

	function validateRua(){
		var rua = document.getElementById("rua").value;

		if(rua == ""){
			alert("Por favor preencha o nome da sua Rua.");
			document.getElementById("erro_rua");
			document.getElementById("rua").focus();

		}else{
			document.getElementById("erro_rua").InnerHtml="";
			return true;
		}
	}

	function validateBairro(){
		var bairro = document.getElementById("bairro").value;

		if(bairro == ""){
			alert("Por favor preencha o nome do seu bairro.");
			document.getElementById("erro_bairro");
			document.getElementById("bairro").focus();

		}else{
			document.getElementById("erro_bairro").InnerHtml="";
			return true;
		}
	}
 
 	function validateCartao(){
		var cartao = document.getElementById("cartao").value;

		if(cartao == ""){
			alert("Por favor preencha o numero do seu cartao corretamente.");
			document.getElementById("erro_cartao");
			document.getElementById("cartao").focus();

		}else{
			document.getElementById("erro_cartao").InnerHtml="";
			return true;
		}
	}

	function validateValCartao(){
		var valcartao = document.getElementById("valcartao").value;

		if(valcartao == ""){
			alert("Por favor preencha a data de expiração do seu cartão");
			document.getElementById("erro_valcartao");
			document.getElementById("valcartao").focus();

		}else{
			document.getElementById("erro_valcartao").InnerHtml="";
			return true;
		}
	}

	function pizzasalg() {
    var quant = Number(document.getElementById('pizzasalgada').value);
    var val = Number(document.getElementById('valorpizzasalgada').value.replace("R$ ", "").replace(',','.'));
    console.log(quant);
    console.log(val);
    var total = quant * val ;
    document.getElementById('pag').totalpizza.value = "R$ " + (total.toFixed(2));

}

	function pizzadoce() {
    var quant = Number(document.getElementById('Quantipizzadoce').value);
    var val = Number(document.getElementById('Valorpizzadoce').value.replace("R$ ", "").replace(',','.'));
    console.log(quant);
    console.log(val);
    var total = quant * val ;
    document.getElementById('pag').Totalpizza.value = "R$ " + (total.toFixed(2));
}

	function sobremesa() {
    var quant = Number(document.getElementById('QuantiSobremesa').value);
    var val = Number(document.getElementById('Valorsobremesa').value.replace("R$ ", "").replace(',','.'));
    console.log(quant);
    console.log(val);
    var total = quant * val ;
    document.getElementById('pag').Totalsobremesa.value = "R$ " + (total.toFixed(2));
}

	



