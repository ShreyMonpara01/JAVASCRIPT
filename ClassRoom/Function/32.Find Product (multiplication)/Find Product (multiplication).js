const product=()=> {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    // let typeofname = typeof name
    // let typeofage = typeof age
  
    document.getElementById('result').innerHTML = ` ${name}  ${age} `;
}
