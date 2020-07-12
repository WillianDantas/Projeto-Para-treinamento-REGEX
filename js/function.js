function mascaraRegex(){
  	window.location.href = "MascaraRegex.html";
}

function Regex(){
	window.location.href = "Index.html";
}

function TestRegex(){
	 window.location.href = "TestRegex.html";
}

window.onload = function(){

	mascaraCNPJ();
	mascaraTelefone();
	mascaraData();
	mascaraHora();
	mascaraCPF();
}

function mascaraCNPJ(){
	var vaCnpj = document.getElementById('cnpj'); 

	  vaCnpj.addEventListener("keyup", function(ev){
	  var value = ev.target.value;
	  value=value.replace(/\D/g,"");
      value = value.replace(/(\d{2})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
   	  value = value.replace(/(\d{3})(\d)/, "$1/$2");
   	  value = value.replace(/(\d{4})(\d)/, "$1-$2");

	  vaCnpj.value =  value;
	});	
}


function mascaraCPF(){
	var vaCpf = document.getElementById('cpf'); 

	  vaCpf.addEventListener("keyup", function(ev){
	  var value = ev.target.value;
	  value=value.replace(/\D/g,"");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
   	  value = value.replace(/(\d{3})(\d)/, "$1-$2");


	  vaCpf.value =  value;
	});	
}


function mascaraTelefone(){
	var vaTelefone = document.getElementById('telefone'); 

	  vaTelefone.addEventListener("keyup", function(ev){
	  var value = ev.target.value;
	  value=value.replace(/\D/g,"");
      value = value.replace(/(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");

	  //value=value.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");

	  vaTelefone.value =  value;
	});	
}

function mascaraData(){
	var vaData = document.getElementById('data'); 

	  vaData.addEventListener("keyup", function(ev){
	  var value = ev.target.value;
	  value=value.replace(/\D/g,"");
      value = value.replace(/(\d{2})(\d)/, "$1/$2");
      value = value.replace(/(\d{2})(\d)/, "$1/$2");

	  //value=value.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");

	  vaData.value =  value;
	});	
}

function mascaraHora(){
	var vaHora = document.getElementById('hora'); 

	  vaHora.addEventListener("keyup", function(ev){
	  var value = ev.target.value;
	  value = value.replace(/\D/g,"");
      value = value.replace(/(\d{2})(\d)/, "$1:$2");
      value = value.replace(/(\d{2})(\d)/, "$1:$2");

	  //value=value.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");

	  vaHora.value =  value;
	});	
}