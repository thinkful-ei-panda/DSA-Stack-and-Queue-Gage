const {STORE} = require('../store/store');
const Queue = require('../queue/queue');

const {log, danceLine} = STORE;



const dancePairing = () => {
  const DanceQueue = new Queue;

  let i = 0;
  while(i< danceLine.length){
    DanceQueue.enqueue(danceLine[i]);
    i++;
  }
  let male = [],
    female = [],
    {first} = DanceQueue,
    pairings = [];

  while(first !== null){
    if(first.value.gender === 'M'){
      male.push(DanceQueue.dequeue());
    }else{
      female.push(DanceQueue.dequeue());
    }
    if(male.length && female.length){
      let a = male.pop(), b = female.pop();
      pairings.push(`${a.name} was paired up with ${b.name} for the dance`);
    }
    first = first.next;
  }
  if(male.length){
    while(male.length){
      log( `${male[0].name} is getting back in line`);
      i++;
      DanceQueue.enqueue(male.shift());
    }
  }
  if(female.length){
    while(female.length){
      log( `${female[0].name} is getting back in line`);
      i++;
      DanceQueue.enqueue(female.shift());
    }
  }
  log(DanceQueue);
  return pairings;
};


log(dancePairing());