function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var y = document.forms["myForm"]["femail"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  else if(!y.endsWith(".com")){
    alert("Email must be end with .com");
    return false;
  }
  var p1 = document.forms["myForm"]["fpwd"].value;
  var p2 = document.forms["myForm"]["frpwd"].value;
  if (p1 == "") {
    alert("Password must be filled out");
    return false;
  }
  else if(p1.length<6)
    {
      alert("Password length must be atlease 6 characters");
      return false;
    }
  if (p2 == "") {
    alert("Please confirm Password");
    return false;
  }
  
  if(!(p1==p2))
    {
      alert("Password not matched");
      return false;
    }
  
}
