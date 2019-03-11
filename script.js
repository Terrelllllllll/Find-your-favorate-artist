var age;
var genre;
$( "button" ).click(function() {
  age = $(".age").val();
  genre = $(".genre").val();
  age=parseInt(age); 
  if( genre=== "hip hop" &&  age<25){
      alert("Nba youngboy");
  } else if( genre=== "hip hop" &&  age>25){
      alert("Lil wayne");
  } else if( genre=== "R&B" &&  age>25){
      alert("Young Thug");
  } else if( genre=== "R&B" &&  age<25){
      alert("Roddy Rich");
  } else {
      alert("i don't know");
  }
});


