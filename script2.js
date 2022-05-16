function getData()
{
    const token=localStorage.getItem("token")
    fetch("http://locahost:2000/emps",{
        headers:{
            "Authorization":"Bearer "+token
        }
        
    }).then
}