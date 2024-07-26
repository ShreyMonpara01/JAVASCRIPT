let users = []
const uiMaker = () => {
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < users.length; i++) {
       let tr =document.createElement("tr")
//    Full Name
       let  td1 =document.createElement("td")
       td1.innerHTML=users[i].fname
//  mobile no
       let td2 =document.createElement("td")
       td2.innerHTML=users[i].number
//  email
       let td3 =document.createElement("td")
       td3.innerHTML=users[i].email
//    Birth Date :
       let td4 =document.createElement("td")
       td4.innerHTML=users[i].bdate
// Home Address
       let td5 =document.createElement("td")
       td5.innerHTML=users[i].add

       tr.append(td1,td2,td3,td4,td5)
       document.getElementById("tbody").append(tr)
    }

    document.getElementById("tbody1").innerHTML = ""
    for (let i = 0; i < users.length; i++) {
       let tr =document.createElement("tr")
//    father name:
       let td6 =document.createElement("td")
       td6.innerHTML=users[i].fathername
// father mobile.no:
       let td7 =document.createElement("td")
       td7.innerHTML=users[i].fathernumber
// father email:
       let td8 =document.createElement("td")
       td8.innerHTML=users[i].femail
// mothername:
       let td9 =document.createElement("td")
       td9.innerHTML=users[i].mothername
// mother mobile.no:
       let td10 =document.createElement("td")
       td10.innerHTML=users[i].mobileno
// mother email:
       let td11 =document.createElement("td")
       td11.innerHTML=users[i].memail

       tr.append(td6,td7,td8,td9,td10,td11)
       document.getElementById("tbody1").append(tr)
    }

    document.getElementById("tbody2").innerHTML = ""
    for (let i = 0; i < users.length; i++) {
        let tr =document.createElement("tr")

        let td12 =document.createElement("td")
       td12.innerHTML=users[i].schoolname

       let td13 =document.createElement("td")
       td13.innerHTML=users[i].stdmarks

      tr.append(td12,td13)
       document.getElementById("tbody2").append(tr)

    }
}



const handleData = (e)=>{
    e.preventDefault(); 

 let user ={
    FullName: document.getElementById("fname").value.trim(),
    mobileno: document.getElementById("number").value,
    Email: document.getElementById("email").value,
    BirthDate: document.getElementById("bdate").value,
    homeadd: document.getElementById("add").value,
    fathername: document.getElementById("fathername").value,
    fathernumber: document.getElementById("fathernumber").value,
    fatheremail: document.getElementById("fatheremail").value,
    mothername: document.getElementById("mothername").value,
    mothermobileno: document.getElementById("mobileno").value,
    motheremail: document.getElementById("memail").value,
    schoolname: document.getElementById("schoolname").value,
    std12marks: document.getElementById("stdmarks").value,
 };
let isValidfullname = /[a-zA-Z]+\\.?/
let mobileno = /^([+]\d{2}[ ])?\d{10}$/
const handleValidation = (e) => {
       // e.preventDefault();
       let data = {
           fullname:document.querySelector("fname").value,
           mobileno:document.querySelector("number").value,
       }
       if(e.key){
              if(!regexfullname.test(data.fullname)){
                  document.querySelector("fname").classList.add("error")
              }
              else{
                  document.querySelector("fname").classList.add("remov")
              }
          }
      }

    users.push(user);
    console.log(users);
    uiMaker()
}

document.getElementById("userData").addEventListener("submit", handleData);