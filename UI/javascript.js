
function check(form)
{ 

 if(form.userid.value == "siraj" && form.pswrd.value == "mypwd")
  {
    window.open('home.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}
