import navbar from "./index.js"
let baseURL="https://dark-cyan-fish-yoke.cyclic.app"

let loginform=document.getElementById("login")

loginform.addEventListener("submit",(event)=>{
    event.preventDefault()
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let obj={email,password}
     
    async function login(){
         try {
            let res=await fetch(`${baseURL}/users/login`,{
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"Application/json"
                }
            })
                let data=await res.json()               
                alert(data.msg)
                if(data.msg=="Wrong Credentials"){
                    window.location.href="./login.html"
                }else{
                    let token=data.token
                    localStorage.setItem("token",token)
                    let name=data.name;
                    localStorage.setItem("name",name)
                    window.location.href="./index.html"
                }   
         } catch (error) {
            console.log(error)
         }
    }
    login()
})



let signup_btn=document.getElementById("signup")

signup_btn.addEventListener("click",()=>{
    window.location.href="./signup.html"
})
