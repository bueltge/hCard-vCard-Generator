	var outputfield = "samplecode",
	    postout = 
	
		function GetElementsWithClassName( tagname, classname ) {
			
			var elements = document.getElementsByTagName(tagname),
			    elementswclass = new Array();
			
			for ( i = 0; i < elements.length; i++ ) {
				if ( elements[i].className == classname ) {
					elementswclass[elementswclass.length] = elements[i];
				}
			}
			
			return elementswclass;
		}
		
	function codeit() {
		/* get values of text fields */
		var vorg = document.getElementById('vorg').value;
		var vtitle = document.getElementById('vtitle').value;
		/*var vfn = document.getElementById('vfn').value;*/
		var vgiven_name = document.getElementById('vgiven_name').value;
		var vadditional_name = document.getElementById('vadditional_name').value;
		var vfamily_name = document.getElementById('vfamily_name').value;
		var vsortstring = document.getElementById('vsortstring').value;
		var bday = document.getElementById('bday').value;
		var vrole = document.getElementById('vrole').value;
		var adrtype = document.getElementById('adrtype').value;
		var vurl = document.getElementById('vurl').value;
		var vnote = document.getElementById('vnote').value;
		var street = document.getElementById("street").value;
		var extendedaddress = document.getElementById("extendedaddress").value;
		var city = document.getElementById("city").value;
		var state = document.getElementById("state").value;
		var zip = document.getElementById("zip").value;
		var countryname = document.getElementById("countryname").value;
		var phone = document.getElementById("phone").value;
		var photo = document.getElementById("photo").value;
		/* GEO */
		var latitude = document.getElementById("latitude").value;
		var longitude = document.getElementById("longitude").value;
		/* EMAIL */
		var emailtype = document.getElementById("emailtype").value;
		var emailvalue = document.getElementById("emailvalue").value;
		var agent = document.getElementById("agent").value;
		var mailer = document.getElementById("mailer").value;	
			   
			   
		/* set results field */
		var resultstr = '<div class="vcard">\n';
		if (photo) resultstr += '  <img src="' + photo + '" alt="photo" class="photo"/>\n';
		if (vorg) resultstr += ' <div class="org">' + vorg + '<\/div>\n';
		if (vrole) resultstr += ' <div class="role">' + vrole + '<\/div>\n';
		if (vtitle) resultstr += ' <span class="title">' + vtitle + '<\/span>\n';
		if (vurl) resultstr += ' <a class="url fn n" href="' + vurl + '">\n';
		else resultstr += ' <span class="fn n">\n';
		if (vgiven_name) resultstr += '  <span class="given-name">' + vgiven_name + '<\/span>\n';
		if (vadditional_name) resultstr += '  <span class="additional-name">' + vadditional_name + '<\/span>\n';
		if (vfamily_name) resultstr += '  <span class="family-name">' + vfamily_name + '<\/span>\n';
		if (vurl) resultstr += ' <\/a>\n';
		else resultstr += ' <\/span>\n';
		if (vsortstring) resultstr += ' <span class="sort-string">' + vsortstring + '<\/span>\n';
		if (street || extendedaddress || city || state || zip || countryname) {
			if (adrtype) {
				resultstr += ' <div class="adr ' + adrtype +'">\n';
			} else{
				resultstr += ' <div class="adr">\n';
			}
			if (street) resultstr += '   <div class="street-address">' + street + '<\/div>\n';
			if (extendedaddress) resultstr += '   <div class="extendedaddress">' + extendedaddress + '<\/div>\n';
			if (zip) resultstr += '     <span class="postal-code">' + zip +'<\/span>\n';
			if (city) resultstr += '     <span class="locality">' + city + '<\/span>\n';
			if (state) resultstr += '     <span class="region">' + state + '<\/span>\n';
			if (countryname) resultstr += '     <div class="country-name">' + countryname + '<\/div>\n';
			resultstr += ' <\/div>\n';
		}
		if (phone) resultstr += ' <div class="tel">' + phone + '<\/div>\n';
		if (vnote) resultstr += ' <div class="note">' + vnote + '<\/div>\n';
		/* GEO */
		if (latitude && longitude) {
			resultstr += ' <div class="geo">\n';
			resultstr += '     <span class="latitude">' + latitude + '<\/span>\n';
			resultstr += '     <span class="longitude">' + longitude + '<\/span>\n';
			resultstr += ' <\/div>\n';
		}
		/* EMAIL */
		if (emailtype && emailvalue) {
			resultstr += ' <div class="e-mail">\n';
			if (emailtype) {
				if (agent) resultstr += '   <span class="agent">\n';
				resultstr += '     <a href="mailto:' + emailvalue +'" class="' + emailtype +'" >' + emailvalue +'<\/a>\n';
				if (agent) resultstr += '   </span>\n';
			}
			if (mailer) resultstr += '     <div class="mailer">' + mailer +'<\/div>\n';
			resultstr += ' <\/div>\n';
		}
		/* BDAY */
		if (bday) resultstr += ' <div class="bday">' + bday +'<\/div>\n';
		resultstr += '<\/div>';
		    document.getElementById(outputfield).value = resultstr;		    
		    document.getElementById("preview").innerHTML = resultstr;

	}
		
	function doinit() {
	   if (!document.getElementById) return;
		
	   var inputs = document.getElementsByTagName('input');
	
	   for (var i = 0; i < inputs.length; i++) {		
		   inputs[i].onclick = inputs[i].onkeyup = codeit;
	   }
	   doreset();
	}
	
	function doreset() {
		codeit();
	}
		
		window.onload = doinit;