// stacks/

// functions: push, pop, peek, length

// part 1

var letters = [];

// switch for to change the result
// var word = "freecodecamp"
var word = "racecar";

var rword = "";

//put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i])
  letters
}

// pop off the stack in reverse order

for (var i = 0; i < word.length; i++){
  rword += letters.pop()
  rword
}

if (rword === word) {
 console.log(word + " is a palindrome")
} else {
 console.log(word + " is not a palindrome")

}

// part 2

var Stack = function() {
  this.count = 0;
  this.storage = {};
  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  // remove and returns the value at the end of the stacck
  this.pop = function() {
    if (this.count === 0){
      return undefined
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  this.size = function(){
    return this.count;
  }
  //returns the value at the end of the stack
  this.peek = function(){
    return this.storage[this.count-1];
  }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push("feeecodecamp")
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())

