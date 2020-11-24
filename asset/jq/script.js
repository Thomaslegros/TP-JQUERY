var noteun = document.getElementById("note1").Value;
var notedeux = document.getElementById("note2").Value;
var notetrois = document.getElementById("note3").Value;
var notequatre = document.getElementById("note4").Value;
var notecinq = document.getElementById("note5").Value;
var result = document.getElementById("Moyenne").Value = ((parseFloat(noteun)+parseFloat(notedeux)+parseFloat(notetrois)+parseFloat(notequatre)+parseFloat(notecinq))/5);

$(document).ready(function(){

    $('#calcul').click(function(event){

if((result >=0) && (result < 10)){
    $('#appreciation').h²& (result < 13)){
    $('#appreciation').html('Moyen.');
}
else if((result >= 13) && (result < 16)){
    $('#appreciation').html('Bien.');
}
else if((result >= 16) && (result < 20)){
    $('#appreciation').html('Très bien.');
}
else if(result == 20){
    $('#appreciation').html('Excellent.');
}
else{
    $('#appreciation').html('Les valeurs entrées sont incorrect.');
}

event.preventDefault();
    });
});

// correction laurie