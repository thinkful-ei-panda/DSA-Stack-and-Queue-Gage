### Part 1: Create a stack class
Walk through the `Stack` class in the curriculum and understand it well. Then write a `Stack` class with its core functions (`push`, `pop`) from scratch.

- Create a stack called `starTrek` and add `Kirk`, `Spock`, `McCoy`, and `Scotty` to the stack.

see `./stack/stack.js`
and `./queue/queue.js`


### Part 2: Useful methods for a stack
- Using the `Stack` class above, implement the following helper functions outside of the class:
- `peek()`: allows you to look at the top of the stack without removing it

```
  peak : (lis) =>{
    if(typeof lis !== 'object') throw new Error('not an object');

    if(lis.top === null)
      return 'the stack is empty';
    return lis.top.data;
  },
```

- `isEmpty()`: allows you to check if the stack is empty or not

```
  isEmpty : (lis)=>{
    if(typeof lis !== 'object') throw new Error('not an object');
    if(lis.top === null) return true;
    return false;
  },
```
returns `false` if there is content.

- `display()`: to display the stack - what is the 1st item in your stack?

```
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
```
results are in a string and look like 
```
item 1: Scotty
item 2: McCoy
item 3: Spock
item 4: Kirk

```

- Remove `McCoy` from your stack and display the stack

(눈_눈) ....

```
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
```

log reads 
```
item 1: Scotty
item 2: Spock
item 3: Kirk
```
after calling display post remova
***note***
only down side about this function is when you call it make sure you have `listName.top = removeTarget(listName, target)` or it only returns the head with can be a pain if you try to call other functions latter. 



### Part 3: Check for palindromes using a stack
A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.


```
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
```
###### my work

```
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
  }
```
**resorts**
```
[
  true, 
  true,
  false,
  true,
  false,
  true,
  'dad',
  'level',
  'false',
  '1001',
  'Tauhida',
  'A man, a plan, a canal: Panama'
]
/*
[
  true, = (dad)
  true, = (level)
  false, = (false)
  true, = (1001)
  false, = (Tauhida)
  true, = (A man, a plan, a canal: Panama)
]
*/
```



### Part 4: Matching parentheses in an expression
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, `you are missing a ( `or` missing a ")"`.

**For version 1**, the parentheses you need to consider are `( `and` ).` Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

**Extension exercise**: Recognize 3 pairs of brackets: `()`, `[]`, and `{}`. These must be correctly nested; `"([)]`" is incorrect, and should report an error at the `)`, stating that you were expecting a `]` but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

**Extension extension exercise**: Also recognize 2 types of quote character: `""` and '`. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.


```
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
```

close enough, im not doing 3 atm that took to much time as is 



### Part 5: Sort stack
Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

```
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
```


### Part 6: Create a queue using Singly linked list
Walk through the `Queue` class in the curriculum and understand it well. Then write a `Queue` class with its core functions (`enqueue()`,` dequeue()`) from scratch.

- Create a queue called `starTrekQ` and add `Kirk`, `Spock`, `Uhura`, `Sulu`, and `Checkov` to the queue.

- Implement a `peek()` function outside of the `Queue` class that lets you take a peek at what the 1st item in the queue is.

- Implement a `isEmpty()` function outside the Queue class that allows you to check if the queue is empty or not
- Implement a `display()` function outside of the `Queue` class that lets you display what's in the queue.

- Remove `Spock` from the queue and display the resulting queue.

### Part 7: Create a queue class using Doubly linked List
Use the items listed in #6 and enqueue them to your queue.

- Check to see who is first one on the Queue?



### Part 8: Queue implementation using a stack
There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)



### Part 9: Square dance pairing
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

- F Jane

- M Frank

- M John

- M Sherlock

- F Madonna

- M David

- M Christopher

- F Beyonce

    - Female dancer is Jane, and the male dancer is Frank
    - Female dancer is Madonna, and the male dancer is John
    - Female dancer is Beyonce, and the male dancer is Sherlock
    - There are 2 male dancers waiting to dance

### Part 10: The Ophidian Bank
At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.