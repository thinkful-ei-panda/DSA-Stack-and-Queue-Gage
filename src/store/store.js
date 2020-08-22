/* eslint-disable eqeqeq */
const STORE ={
  starTrakTeam : [
    'Kirk',
    'Spock',
    'McCoy',
    'Scotty',
  ],
  starTrakQ : [
    'Kirk',
    'Spock',
    'Uhura',
    'Sulu',
    'Checkov'
  ],
  log : console.log,
  peakStack : (lis) =>{
    if(typeof lis !== 'object') throw new Error('not an object');

    if(lis.top === null)
      return 'the stack is empty';
    return lis.top.data;
  },
  peakQueue : (lis) =>{
    if(typeof lis !== 'object') throw new Error('not an object');

    if(lis.first == null)throw new Error('no content in submitted queue');

    return lis.first.value;
  },
  isEmpty : (lis)=>{
    if(typeof lis !== 'object') throw new Error('not an object');
    if(lis.top === null) return true;
    return false;
  },
  queueIsEmpty: (lis)=>{
    if(typeof lis !== 'object') throw new Error('not an object');
    if(lis.first === null) return true;
    return false;
  },
  display : (lis) =>{
    if(typeof lis !== 'object') throw new Error('not an object');

    if(lis.top === null)return 'nothing to display';
    let { top } = lis;
    let res = '';
    let i = 1;
    while(top !== null){
      res += `item ${i}: ${top.data}\n`;
      top = top.next , i++ ;
    }
    return res; 
  },
  displayQueue : (lis) => {
    if(typeof lis !== 'object') throw new Error('not an object');

    if(lis.first === null)return 'nothing to display';
    let { first } = lis;
    let res = '';
    let i = 1;
    while(first !== null){
      res += `item ${i}: ${first.data}\n`;
      first = first.next , i++ ;
    }
    return res; 
  }
  removeTarget : (lis,target)=>{
    if(typeof lis !== 'object') throw new Error('not an object');
    const { top } = lis;
    if(top === null) return 'nothing to remove';

    let store = null, temp = top; 

    if(temp !== null && temp.data === target ){
      lis.top = temp.next;
      return lis;
    }

    while((temp !== null) && (temp.data !== target)){
      store = temp;
      temp = temp.next;
    }
    if(temp === null) return 'nothing could be found , nothing removed';
    
    store.next = temp.next; 

    return lis.top = store; 
  },
  ifPalindromes  : (str) => {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    if(typeof str !== 'string'){
      throw new Error('not a string');
    }
    let l = str.length; 
    let i = 0 ; 
    while (i < str.length){
      if(str[i] !== str[l - 1]) return false;      
      i++, l--;
    }
    return true; 
  },
  sortStack : (stackA) =>{
    for(let i = 0 ; i < stackA.length ; i++){
      if(isNaN(stackA[i]))stackA[i] = 0; 
    }
    let stackB = [];
    let temp; 
  
    while(stackA.length){
      temp = stackA.pop();
      while( temp !== null) {
        if(temp <= stackB[stackB.length-1] || stackB.length === 0){
          stackB.push(temp);
          temp = null;
        }else{
          stackA.push(stackB.pop());
        }
      }
    }
    return stackB;
  },
  langParser : (fun) =>{
    let funLang = fun.toString();

    let open_P = 0;    // (
    let closed_P = 0;  // )
    let open_Cb = 0;   //{
    let closed_Cb = 0; //}
    let open_B = 0;    //[
    let closed_B = 0;  //]
    let pointer = 0;
    let i = 0;
    let message = '';

    while( i < funLang.length){
      if(funLang[i].match(/[\][{()}]/g)){
        pointer = i + 1; 
        if(funLang[i] === '(') open_P++, message = (errorStr)=>`open bracket for '(' around char ${i} in \n" ${errorStr}"\n isn't closed`;
        if(funLang[i] === ')') closed_P++ , message = (errorStr)=>`closing bracket for ')' around char ${i} in \n" ${errorStr}"\n is expecting open tag`;
        if(funLang[i] === '[') open_B++ , message = (errorStr)=>`open bracket for '[' around char ${i} in \n" ${errorStr}"\n isn't closed`;
        if(funLang[i] === ']') closed_B++ , message = (errorStr)=>`closing bracket for ']' around char ${i} in \n" ${errorStr}"\n is expecting open tag`;
        if(funLang[i] === '{') open_Cb++ , message = (errorStr)=>`open bracket for '{' around char ${i} in \n"${errorStr}"\n isn't closed`;
        if(funLang[i] === '}') closed_Cb++ , message = (errorStr)=> `closing bracket for '}' around char ${i} in \n"${errorStr}" \n is expecting open tag`;
      }
      if( open_P === closed_P && open_B === closed_B && open_Cb === closed_Cb ){
        pointer = 0;
        message = ''; 
      }
      i++;
    }
    if(pointer){
      // console.error(message);
      let errorStr = '';
      let nBefore ;
      if(pointer > 12){
        nBefore = pointer - 10;
      }else{
        nBefore = 0;
      }
      while(nBefore < pointer + 5  ){
        if(funLang[nBefore]) errorStr += funLang[nBefore];
        nBefore ++;
      }
      console.error(message(errorStr));
      
    }else{
      return true; 
    }
    return false;
  }

};

module.exports= {
  STORE,
}; 