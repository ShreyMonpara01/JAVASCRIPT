const Occurrencesarray = () => {
  // array
  let array = [1,3,3,4,3,5,6,7];
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
