function login()
{
    var a=document.getElementById('uname').value
    var b=document.getElementById('pwd').value
    const emp={
        "username":a,
        "password":b
    }
    fetch("http://localhost:2000/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"           
        },
        body:JSON.stringify(emp)
    }).then(response=> {return response.json()}).then(data=>{
          if(data.success==true){
            localStorage.setItem("token",data.token)
            window.location.replace("next.html")
           

          }
          else 
          {
              alert("enter valid username/password")
              
          }
        })
         
}
