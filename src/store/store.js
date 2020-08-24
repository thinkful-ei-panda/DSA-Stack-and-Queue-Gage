/* eslint-disable quotes */
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
  danceLine : [
    {
      name : 'Jane',
      gender : 'M',
    },
    {
      name : 'Frank',
      gender : 'F',
    },
    {
      name : 'Lesa',
      gender : 'F',
    },
    {
      name : 'Dave',
      gender : 'M',
    },
    {
      name : 'Joe',
      gender : 'M',
    },
    {
      name : 'Caitlin',
      gender : 'F',
    },
    {
      name : 'Dustin',
      gender : 'M',
    },
    {
      name : 'Brittney',
      gender : 'F',
    },
    {
      name : 'Jimmy',
      gender : 'M',
    },
    {
      name : 'Madonna',
      gender : 'F',
    },
    {
      name : 'Jacky',
      gender : 'F',
    },

  ],
  bankLine : [
    {
      name : 'Neive Boyle',
      paperWork : true,
    },
    {
      name : 'Darien Greig',
      paperWork : true,
    },
    {
      name : 'Keely Craft',
      paperWork : true,
    },
    {
      name : 'Daniyal Payne',
      paperWork : true,
    },
    {
      name : 'Marianna Hinton',
      paperWork : true,
    },
    {
      name : 'Lemar Hughes',
      paperWork : false,
    },
    {
      name : 'Mackenzie Hogan',
      paperWork : true,
    },
    {
      name : 'Tilly-Mae Appleton',
      paperWork : true,
    },
    {
      name : `Bevan O'Sullivan`,
      paperWork : false,
    },
    {
      name : 'Veer Howe',
      paperWork : true,
    },
    {
      name : 'Kieron Vasquez',
      paperWork : true,
    },
    {
      name : 'Conna Thomson',
      paperWork : true,
    },
    {
      name : 'Tulisa Bird',
      paperWork : true,
    },
    {
      name : 'Rheanna Stacey',
      paperWork : true,
    },
    {
      name : 'Tyler Moon',
      paperWork : true,
    },
    {
      name : 'Holly Benitez',
      paperWork : true,
    },
    {
      name : 'Kareem Hammond',
      paperWork : true,
    },
    {
      name : 'Shelby Brady',
      paperWork : true,
    },
    {
      name : 'Mikayla Herman',
      paperWork : false,
    },
    {
      name : 'Walid Weir',
      paperWork : true,
    },
    {
      name : 'Erica Morrison',
      paperWork : true,
    },

  ],
  something :[
    `going home`,
    `going back to work`,
    `going to his other bank`,
    `going to hang out with friends`,
    `going to go sit in the park and thing about life.`,
    `going to go back home to watch T.V.`,
    `going to a salon to get a haircut`,
    `going to get pudding`,
    `going to go code up something`,
    `going to get a bite to eat`,
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
      res += `item ${i}: ${first.value}\n`;
      first = first.next , i++ ;
    }
    return res; 
  },
  removeTarget : (lis, target)=>{
    if(typeof lis !== 'object') throw new Error('not an object');
    const { top } = lis;
    if(top === null) return 'nothing to remove';

    let store = null, temp = top; 

    if(temp !== null && temp.data.toLowerCase() === target.toLowerCase() ){
      lis.top = temp.next;
      return lis;
    }

    while((temp !== null) && (temp.data.toLowerCase() !== target.toLowerCase())){
      store = temp;
      temp = temp.next;
    }
    if(temp === null) return 'nothing could be found , nothing removed';
    
    store.next = temp.next; 

    return lis.top = store; 
  },
  removeTargetFromQueue : (lis, target) => {
    if(typeof lis !== 'object') throw new Error('not an object');
    const { first } = lis;
    if(first === null) return 'nothing to remove';

    let store = null, temp = first; 

    if(temp !== null && temp.value === target ){
      lis.top = temp.next;
      return lis;
    }

    while((temp !== null) && (temp.value !== target)){
      store = temp;
      temp = temp.next;
    }
    if(temp === null) return 'nothing could be found , nothing removed';
    
    store.next = temp.next; 

    return lis.top = store; 

  },
  /***** OTHER *****/
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


const   doingSomeThing = () => {
  const r = Math.floor(Math.random() * Math.floor(10));
  return STORE.something[r];
};

module.exports= {
  STORE, doingSomeThing,
}; 