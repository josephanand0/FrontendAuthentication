function getData()
{
    const token=localStorage.getItem("token")
    fetch("http://localhost:2000/emps",{
        headers:{
            "Authorization":"Bearer "+token
        }
        
    }).then(response=>{return response.json()}).then(data=>{
        var table
        table='<table border="2"><tr><td>ID</td><td>Name</td><td>Age</td><td>Updation</td><td>Deletion</td></tr>'
        for(var i=0;i<data.length;i++)
        {
            table+=`<tr>
                            <td>${data[i]._id}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].age}</td>
                            <td><button id=${data[i].name}>Update</button></td>
                            <td><button id=${data[i]._id}  onclick="Delete(${data[i]._id})">Delete</button></td>
                    </tr>`
            // let delbtn=document.getElementById(`${data[i]._id}`)
            // delbtn.addEventListener('click',Delete)    
            window.location.reload
        }      
        document.getElementById("result").innerHTML=table
    })
   
}
function Delete(id)
    {
        fetch(`http://localhost:2000/deleteemp/${id}`,{
            method:"DELETE",
            headers: {
                "content-Type": "application/json"
            }
        })
      
    
        

    }

