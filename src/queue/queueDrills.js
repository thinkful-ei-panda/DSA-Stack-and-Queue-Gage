const Queue = require('./queue');
const { STORE } = require('../store/store');

const { log } = STORE;

const createList = () => {
  const QL = new Queue;
  const {starTrackTeam } = STORE;
  for(let i of starTrackTeam){
    QL.enqueue(i);
  }
  return QL;
};

log(createList);