const { STORE } = require('../store/store');

const { log, ifPalindromes } = STORE;


const palindromesDrill = () =>{
  const palindromeTest = ['dad','level','false','1001', 'Tauhida', 'A man, a plan, a canal: Panama' ];
  let res =[];
  for(let i of palindromeTest){
    res.push(ifPalindromes(i));
  }
  return [...res,...palindromeTest];
};

log(palindromesDrill());