const questions2 = [
  {
    questionTitle: 'How you can submit a form using JavaScript?',
    options: [
      { answerText: '.submit()', isCorrect: true },
      { answerText: 'console.log()', isCorrect: false },
      { answerText: '.push()', isCorrect: false },
      { answerText: '.filter()', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What are the looping structures in JavaScript?',
    options: [
      { answerText: 'for, for-on, for-off', isCorrect: false },
      { answerText: 'for, for-in, for-of', isCorrect: true },
      { answerText: 'do, do-while, breaking', isCorrect: false },
      { answerText: 'do, for, breaking', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What would be the result of 3 + 2 + ”7″ ?',
    options: [
      { answerText: '35', isCorrect: false },
      { answerText: '12', isCorrect: false },
      { answerText: '57', isCorrect: true },
      { answerText: '-12', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What do you mean by NULL in Javascript ?',
    options: [
      { answerText: 'null declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false },
      { answerText: 'null is a special value that represents an empty or unknown value', isCorrect: true },
      { answerText: 'null creates a constant whose scope can be either global or local to the block in which it is declared', isCorrect: false },
      { answerText: 'null checks whether its two operands are equal, returning a Boolean result', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What are all the types of Pop up boxes available in JavaScript ?',
    options: [
      { answerText: '.submit(), let(), const()', isCorrect: false },
      { answerText: 'console.log(), prompt(), append()', isCorrect: false },
      { answerText: '.push(), confirm()', isCorrect: false },
      { answerText: 'alert(), confirm(), prompt()', isCorrect: true },
    ],
  },
  {
    questionTitle: 'What is the use of a typeof operator ?',
    options: [
      { answerText: '‘Typeof’ operator removes a property from an object ', isCorrect: false },
      { answerText: '‘Typeof’ operator returns true if the specified property is in the specified object or its prototype chain', isCorrect: false },
      { answerText: '‘Typeof’ is an operator used to return a string description of the type of a variable', isCorrect: true },
      { answerText: '‘Typeof’ returns the remainder left over when one operand is divided by a second operand ', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What is the use of the Push method in JavaScript ?',
    options: [
      { answerText: 'The push() method is used to add or append one or more elements to an Array end', isCorrect: true },
      { answerText: 'The push() method is used to add or append one or more elements to an Array start', isCorrect: false },
      { answerText: 'The push() method removes the last element from an array and returns that element', isCorrect: false },
      { answerText: 'The push() property of an object which is an instance of type Array sets or returns the number of elements in that array', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What boolean operators can be used in JavaScript?',
    options: [
      { answerText: 'The ‘And’ Operator (/=), ‘Or’ Operator (%=), and the ‘Not’ Operator (=)', isCorrect: false },
      { answerText: 'The ‘And’ Operator (==), ‘Or’ Operator (+=), and the ‘Not’ Operator (-=)', isCorrect: false },
      { answerText: 'The ‘And’ Operator (&&), ‘Or’ Operator (||), and the ‘Not’ Operator (!)', isCorrect: true },
      { answerText: 'The ‘And’ Operator (&), ‘Or’ Operator (|), and the ‘Not’ Operator (*)', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What are the features of JavaScript?',
    options: [
      { answerText: 'It is a lightweight, interpreted programming language', isCorrect: false },
      { answerText: 'It is designed for creating network-centric applications.', isCorrect: false },
      { answerText: 'It is an open and cross-platform scripting language.', isCorrect: false },
      { answerText: 'all of the above', isCorrect: true },
    ],
  },
  {
    questionTitle: 'Is JavaScript a case-sensitive language?',
    options: [
      { answerText: 'No, JavaScript is not case sensitive language', isCorrect: false },
      { answerText: 'Yes, JavaScript is a case sensitive language', isCorrect: true },
      { answerText: 'JavaScript is a case insensitive language', isCorrect: false },
      { answerText: 'JavaScript is a fold case language', isCorrect: false },
    ],
  },
  {
    questionTitle: 'How can you create an object in JavaScript?',
    options: [
      { answerText: '[] square brackets', isCorrect:false },
      { answerText: '{} curly brackets', isCorrect:true },
      { answerText: '() parentheses', isCorrect: false },
      { answerText: '// double slash', isCorrect: false },
    ],
  },
  {
    questionTitle: 'A Callback is ?',
    options: [
      { answerText: 'A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.', isCorrect: true },
      { answerText: 'A callback extends an HTML or XML element, changing its behavior or providing metadata', isCorrect: false },
      { answerText: 'A callback is a component that stores HTTP responses temporarily so that it can be used for subsequent HTTP requests as long as it meets certain conditions.', isCorrect: false },
      { answerText: 'A callback is a particular way of organizing data so that it can be used efficiently.', isCorrect: false },
    ],
  },
  {
    questionTitle: 'How can you create an Array in JavaScript?',
    options: [
      { answerText: '[] square brackets', isCorrect: true },
      { answerText: '{} curly brackets', isCorrect: false},
      { answerText: '() parentheses', isCorrect: false },
      { answerText: '// double slash', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What are the scopes of a variable in JavaScript?',
    options: [
      { answerText: 'Inside variables', isCorrect: false },
      { answerText: 'Global Variables, Local Variables ', isCorrect: true },
      { answerText: 'Bollean variables', isCorrect: false },
      { answerText: 'None of the above', isCorrect: false },
    ],
  },
  {
    questionTitle: 'How to create a cookie using JavaScript?',
    options: [
      { answerText: 'document.cookie ', isCorrect: true },
      { answerText: 'document.query', isCorrect: false },
      { answerText: 'document.querySelectorAll', isCorrect: false },
      { answerText: 'document.append', isCorrect: false },
    ],
  },
  {
    questionTitle: 'Name some of the JavaScript Frameworks?',
    options: [
      { answerText: 'Django, Flask, Tkinter', isCorrect: false },
      { answerText: 'Laravel, Symphony, Terbaik', isCorrect: false },
      { answerText: 'Node, Express, MongoDb', isCorrect: false },
      { answerText: 'React, Angular, Vue', isCorrect: true },
    ],
  },
  {
    questionTitle: 'How do you empty an array in JavaScript?',
    options: [
      { answerText: 'By assigning array length to 0', isCorrect: false },
      { answerText: 'By assigning an empty array', isCorrect: false },
      { answerText: 'By popping the elements of the array', isCorrect: false },
      { answerText: 'all of the above', isCorrect: true },
    ],
  },
  {
    questionTitle: 'You can use this array method to access items from an array based on a specific index,You can use both positive and negative indexing !!; This definition corresponds to?',
    options: [
      { answerText: '.index()', isCorrect: false },
      { answerText: '.indexOf()', isCorrect: false },
      { answerText: '.at()', isCorrect: true },
      { answerText: '.pop()', isCorrect: false },
    ],
  },
  {
    questionTitle: 'An arrow function can be expressed like?',
    options: [
      { answerText: 'const function = () => {}', isCorrect: true },
      { answerText: 'var function = () => {}', isCorrect: false },
      { answerText: 'let function = () => {}', isCorrect: false },
      { answerText: 'None of the above', isCorrect: false },
    ],
  },
  {
    questionTitle: 'Shortly Closures mean: ?',
    options: [
      { answerText: 'Closures means that an inner function always has access to the variable of its outer function, even after the outer function has returned', isCorrect: true },
      { answerText: 'Closures means that an inner function never has access to the variable of its outer function, even after the outer function has returned', isCorrect: false },
      { answerText: 'Closures is a behavior in which a function or variable can be used before declaration', isCorrect: false },
      { answerText: 'Closures is a behavior in which a function or variable can be used after declaration', isCorrect: false },
    ],
  },
  ];
  export default questions2