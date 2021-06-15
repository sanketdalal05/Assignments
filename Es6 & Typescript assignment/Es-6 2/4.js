let chatroom1 = new Map()
chatroom1.set('sanket', {
  msg1: "hello all",
  msg2: "I am from Aurangabad"
})
chatroom1.set('john', {
  msg1: "hello im john",
  msg2: "learning es6"
})
chatroom1.set('Jack', {
  msg1: "Hello, I am Jack",
  msg2: "good morning",
  msg3: "I am Developer",
  msg4: "Lets Develop application."
})


let chatroom2 = new Map()
chatroom2.set('sam', {
  msg1: "Hello, I am sam",
  msg2: "I am from UA",
  msg3: "I am Developer",
})
chatroom2.set('ronaldo', {
  msg1: "Hello, I am ronaldo",
  msg2: "I am from UAE",
  msg3: "I am sportsman",
  msg4: "Lets Develop app"
})


console.log("Total Users in Chatroom1 : " +chatroom1.size)
chatroom1.forEach( (value, key, map) => {
  console.log(`${key}`); 
  console.log(chatroom1.get(`${key}`));
});

console.log("Total Users in Chatroom2 : " +chatroom2.size)
chatroom2.forEach( (value, key, map) => {
  console.log(`${key}`); 
  console.log(chatroom2.get(`${key}`));
});
