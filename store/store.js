const STORE ={
  starTrackTeam : [
    'Kirk',
    'Spock',
    'McCoy',
    'Scotty',
  ],
  log : console.log,
  peak : (lis) =>{
    if(typeof lis !== 'object') throw new Error('not an object');

    if(lis.top === null)
      return 'the stack is empty';
    return lis.top.data;
  },
  isEmpty : (lis)=>{
    if(typeof lis !== 'object') throw new Error('not an object');
    if(lis.top === null) return true;
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

  }
};

module.exports= {
  STORE,
}; 