let users=[]
const uiMaker = () => {
      document.getElementById('tbody').innerHTML=""
      for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = users[i].name;
        let td2 = document.createElement('td');
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement('td');
        td3.innerHTML = users[i].coures;
        let td4 = document.createElement('td');
        td4.innerHTML = users[i].number;
        let td5 = document.createElement('td');
        td5.innerHTML = users[i].fee;
      

        tr.append(td1, td2, td3, td4, td5)
        document.getElementById('tbody').append(tr)

    }
}
const data = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("grid").value;
    let department = document.getElementById("department").value;
    let expireance = document.getElementById("expireance").value
    let s_no
    let level
    let salary = document.getElementById("salary").value
}