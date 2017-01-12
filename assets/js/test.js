function getCook(cookiename) 
  {
  // Get name followed by anything except a semicolon
  var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
  }

//Sample usage


	var cookieValue = getCook('createdId');
	document.getElementById("test").innerHTML = cookieValue;

	var cookieValue1 = getCook('createdName');
	document.getElementById("testName").innerHTML = cookieValue1;

