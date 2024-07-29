const Occurrencesarray = () => {
  // array
  let array = [1, 2, 2, 3, 2, 4, 5];
  // get
  let get = 2;
  // count
  let count = 0;
  // for in if or array
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === get) {
        count++;
    }
    
}
console.log(count);
};

Occurrencesarray()
