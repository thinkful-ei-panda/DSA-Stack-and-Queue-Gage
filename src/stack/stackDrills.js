const Stack = require('./stack');
const { STORE } = require('../store/store');

const { log } = STORE;

const contentPush = () => {

  const { starTrakTeam } = STORE;

  const starTrak = new Stack;

  let i =0;
  while(i <  starTrakTeam.length ){
    starTrak.push(starTrakTeam[i]);
    i++;
  }

  starTrak.top = STORE.removeTarget(starTrak,'McCoy');

  return starTrak;
};


// log(contentPush());
// log(STORE.peakStack(contentPush()));
// log(STORE.isEmpty(contentPush()));
// log(STORE.isEmpty('throw error'));

log(STORE.display(contentPush()));


