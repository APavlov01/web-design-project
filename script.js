var counter=0;
function myFunction() 
{	
	var egg = document.getElementById("easteregg");
	counter++;
	if (egg.style.display == "none" && counter==5)
	{
    	egg.style.display = "list-item";
    }
    else
    {
        egg.style.display = "none";
	}
}