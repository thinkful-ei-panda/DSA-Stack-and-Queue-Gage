const Queue = require('./queue');
const { STORE } = require('../store/store');

const { log, displayQueue, removeTargetFromQueue } = STORE;

const createList = () => {
  const QL = new Queue;
  const {starTrakQ } = STORE;
  
  for(let i of starTrakQ){
    QL.enqueue(i);
  }

  QL.top = removeTargetFromQueue(QL,'Spock');
   
  return QL;

};

// let emptyTest = new Queue;

// log(createList());
// log(STORE.peakQueue(createList()));
// log(STORE.queueIsEmpty(createList()));
// log(STORE.queueIsEmpty(emptyTest));

log(displayQueue(createList()));