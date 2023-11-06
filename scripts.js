/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", () => {
	let b = document.body.getElementsByClassName("btn");
	//console.log(b);
	
	b[1].addEventListener("click", function(){
		let m = document.body.getElementsByClassName("message");
		//console.log(m);
		let t =  document.getElementById("email").value;
		//console.log(t);
		if( t  != "" && t.includes("@")){
			let textn = document.createTextNode("Thank you! Your email address '"+t+"' has been added to our mailing list");
			m[0].appendChild(textn);
		} else{
			let textn = document.createTextNode('Please enter a valid email address');
			m[0].appendChild(textn);
		}
		
	});//end b[1] event listener
	
	var form = b[1].parentNode;
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);
	
	
});//end onload event listener