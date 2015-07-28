
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

	function totalGeral() {
		var pizzaSalgadaTotal = Number(document.getElementById('totalpizza').value.replace("R$ ", "").replace(',','.'));
		var pizzaDoceTotal = Number(document.getElementById('Totalpizza').value.replace("R$ ", "").replace(',','.'));
		var sobremesaTotal = Number(document.getElementById('Totalsobremesa').value.replace("R$ ", "").replace(',','.'));
		var totalGeral = pizzaSalgadaTotal + pizzaDoceTotal + sobremesaTotal;
		console.log(totalGeral);
		document.getElementById('pag').totalcompra.value = "R$ "+ (totalGeral.toFixed(2));
	}

	
function OnlyNumber(e){
  var tecla=(window.event)?event.keyCode:e.which;
  if((tecla>47 && tecla<58)) return true;
  else{
  if (tecla==8 || tecla==0) return true;
  else  return false;
}
}


function finalizaCompra(){
  t_pizza = document.getElementById("compra").value;
  qtd_pizza = document.getElementById("pizzasalgada").value;
  total_pizza = document.getElementById("totalpizza").value;

  t_pizza1 = document.getElementById("compra1").value;
  qtd_pizza1 = document.getElementById("Quantipizzadoce").value;
  total_pizza1 = document.getElementById("Totalpizza").value;

   t_pizza2 = document.getElementById("compra2").value;
  qtd_pizza2 = document.getElementById("QuantiSobremesa").value;
  total_pizza2 = document.getElementById("Totalsobremesa").value;

  total_compras = document.getElementById("totalcompra").value;

  alert("Compra realizada com sucesso! \n --------------------------------- \n"+qtd_pizza+" Pizza de "+t_pizza+" por "+total_pizza+"\n"+qtd_pizza1+" Pizza de "+t_pizza1+" por "+total_pizza1+"\n" +qtd_pizza2+" Sobremesa "+t_pizza2+" de "+total_pizza2+"\n --------------------------------- \n  Total: "+total_compras);
}

 
