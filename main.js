
function myfn(){
var a = parseInt(prompt("Please enter a number only: "));
var b = Number(a);
return b;
}
var x = myfn(); // asign value 

for(i=0; i<4;){
if(!isNaN(x)){
	alert("Thanks for your input: " + x );
	break;
}else{
	alert("Not a Valid input TRY AGAIN !!")
		x=myfn();
				
}
}









