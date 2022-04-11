// Triple Search Function -  Brian Daley


function UC_Search(object){ 
	// Determine Radio Value
	for (i=0, n=object.sitesearch.length; i<n; i++) {
	    if (object.sitesearch[i].checked) {
		   RV = object.sitesearch[i].value;
		   break;
	    }
	}
	
	// Quick Validation 
	if((object.q.value == '') || (object.q.value == 'Type Search Here')){
		alert('You must enter your search criteria.');
		object.q.focus();
		return false;
	}
	
	// Set Variables for People Search (Phonebook)
	if(RV == 'People'){
		object.method = "POST";
		object.action = "http://phonebk.uconn.edu/results.php";
		object.q.name = "basictext";
	}
}

document.write("<script language='javascript' type='text/javascript' src='https://alert.uconn.edu/alert/alert.js'></script>");
