$(document).ready(function(){
  var xml_button = $('#getJson');

  if (str.length==0){
  document.getElementById("search_button").innerHTML = ""
  alert("Search Complete");
  return;
 }
 if (str.length>0){
   json_button.on('click',searchBox(str){
   $.ajax("superheroes.php",{
     method: "GET",
     dataType: 'json'
   }).done(function(response){
     var hero_name = response.$(superheroes);
     $('#results').append("<ul><ul>");
     $(hero_name).each(function()){
     $("#results ul").append("<li><h3>"+this.id+this.name+('aka'+this.alias+)+this.biography+"</p></li>");
    });
  }).fail(function(){
     alert(result+""+"is not an Avenger.");
   });
 });
});

function getText(){
  document.getElementById(text).value.toLowerCase();
}
