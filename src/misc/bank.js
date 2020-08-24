const Queue = require('../queue/queue');
const {STORE, doingSomeThing} = require('../store/store');

const {log, bankLine} = STORE;

const paperWork = () => 0 === Math.floor(Math.random() * Math.floor(4));



const bankTeller = () => {
  const bank = new Queue;

  let i = 0; 

  while ( i < bankLine.length){
    bank.enqueue(bankLine[i]);
    i++;
  }

  while(bank.first !== null){
    if(bank.first.value.paperWork){
      log(`${bank.first.value.name} successfully had information processed and is ${doingSomeThing()} `);
      bank.dequeue();
    }else{
      log(`${bank.first.value.name} seem to no completed his paper word and has to step out of line to do it again`);
      bank.first.value.paperWork = paperWork();
      bank.enqueue(bankLine[Math.floor(Math.random()*Math.floor(15))]);
      bank.enqueue(bank.dequeue()); 
    }
  }
  return 'bank is now closed';
};



log(bankTeller());