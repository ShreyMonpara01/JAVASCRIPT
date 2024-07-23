let users = []
let totalfees =Number(0);
let totacourese =Number(0);

const studentdelet = (index) => {
    users.splice(index,1)
    uimaker();
}
// delete all
const DeleteAll = () => {

    users=[];   
  
    document.getElementById('tbody').innerHTML = "";
    document.getElementById("totalfees").innerHTML = 0;
    document.getElementById("totacourese").innerHTML = 0;
  
    uiMaker();
  }

let uimaker = () => {
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr")
       // sr no.
        let td = document.createElement("td")
        td.innerHTML=i+1

        let td1 = document.createElement("td")
        td1.innerHTML = users[i].name
        let td2 = document.createElement("td")
        td2.innerHTML = users[i].Grid
        let td3 = document.createElement("td")
        td3.innerHTML = users[i].Course
        let td4 = document.createElement("td")
        td4.innerHTML = users[i].Fees
        let td5 = document.createElement("td")
        td5.innerHTML = users[i].Number

        let td6 = document.createElement("td")
        td6.innerHTML="Remove"
        td6.addEventListener("click", () => studentdelet(i))

        tr.append(td1, td2, td3, td4, td5, td6)
        document.getElementById("tbody").append(tr)
    }
}

const studentdata = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let Grid = document.getElementById('Grid').value;
    let Course = document.getElementById('Course').value;
    let Fees = document.getElementById('Fees').value;
    let Number = document.getElementById('Number').value;


    let user = {
        name: name,
        Grid: Grid,
        Course: Course,
        Fees: Fees,
        Number: Number
    }

    users.push(user);
    console.log(users);
    uimaker();
    
  totalsalary+= Number(Fees);
  totalemp+=1;

  document.getElementById("totalfees").innerHTML = `totalfees : ${totalfees}`;
  document.getElementById("totacourese").innerHTML = `totacourese : ${totacourese}`;
}

document.getElementById('studentdata').addEventListener("submit", studentdata)
