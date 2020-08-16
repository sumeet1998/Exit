
function submit()
{
    // alert('you have successfully completed');
    var user=document.querySelector("#usernameid").value;

    var pass=document.querySelector("#passwordid").value;

    let info1=document.createElement("div");

    info1.style.background="red";
    info1.style.display="flex";
    info1.style.justifyContent="center";

    let userinfo=document.createElement("div");

    userinfo.textContent=user;
    userinfo.textContent=pass;

    let comment=document.querySelector("#InfoBox");

   comment.appendChild(user);
   comment.appendChild(pass);

    
   document.querySelector("#usernameid").value="";
   document.querySelector("#passwordid").value="";


}