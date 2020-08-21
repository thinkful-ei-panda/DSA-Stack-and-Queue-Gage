const { STORE } = require('../store/store');

const { log, ifPalindromes , sortStack } = STORE;


const palindromesDrill = () =>{
  const palindromeTest = ['dad','level','false','1001', 'Tauhida', 'A man, a plan, a canal: Panama' ];
  let res =[];
  for(let i of palindromeTest){
    res.push(ifPalindromes(i));
  }
  return [...res,...palindromeTest];
};

// log(palindromesDrill());

const sortArrStack = () => {
  const test = [1,5,8,3,1,4,]; //8,5,4,3,1,1
  const test2 = [3,1,2]; //3,2,1
  return sortStack(test);
};
log(sortArrStack());