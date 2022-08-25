const questions3 = [
    {
      questionTitle: 'What is JavaScript?',
      options: [
        { answerText: 'is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. ', isCorrect: true },
        { answerText: ' object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures', isCorrect: false },
        { answerText: 'is a cross-platform language that can be used to create high-performance applications.', isCorrect: false },
        { answerText: 'is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What are JavaScript Data Types?',
      options: [
        
        { answerText: 'Str,Int,List,Bool,	Dict', isCorrect: false},
        { answerText: 'Number , String, Boolean, Object, Undefined', isCorrect: true},
        { answerText: 'Integer, Boolean, Floating Point, Valueless or Void', isCorrect: false },
        { answerText: 'byte, char ,short, int', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What is the use of isNaN function?',
      options: [
        { answerText: 'function returns true if the argument is not a number; otherwise, it is false.', isCorrect: true },
        { answerText: 'Any object of which the value is not undefined or null', isCorrect: false },
        { answerText: 'object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.', isCorrect: false },
        { answerText: 'creates a new class with a given name using prototype-based inheritance', isCorrect: false },
      ],
    },
    {
      questionTitle: 'Which company developed JavaScript?',
      options: [
        { answerText: 'Facebook', isCorrect: false },
        { answerText: 'Google', isCorrect: false },
        { answerText: 'Sun Microsystems', isCorrect: false },
        { answerText: 'Netscape', isCorrect: true },
      ],
    },
    {
      questionTitle: 'What are undeclared variables?',
      options: [
        { answerText: 'Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.', isCorrect: true },
        { answerText: 'Undeclared variables are those that are declared in the program but have not been given any value', isCorrect: false },
        { answerText: 'Undeclared variables cannot share its name with a function or a variable in the same scope.', isCorrect: false },
        { answerText: 'Undeclared variables creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What are the advantages of JavaScript?',
      options: [
        { answerText: 'Less server interaction ', isCorrect: false },
        { answerText: 'Immediate feedback to the visitors ', isCorrect: false },
        { answerText: 'Increased interactivity ', isCorrect: false },
        { answerText: 'all of the above', isCorrect: true },
      ],
    },
    {
      questionTitle: 'What are undefined variables?',
      options: [
        { answerText: 'Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.', isCorrect: true},
        { answerText: 'Undefined variables creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement', isCorrect: false },
        { answerText: 'Undefined variables declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false },
        { answerText: 'Undefined variables terminates the current loop', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What is ‘this’ keyword in JavaScript?',
      options: [
        { answerText: 'keyword enable asynchronous', isCorrect: false },
        { answerText: 'keyword always return a promise', isCorrect: false },
        { answerText: 'keyword refers to the object from where it was called.', isCorrect: true},
        { answerText: 'keyword declaration is used when creating JavaScript modules to export live bindings to functions', isCorrect: false},
      ],
    },
    {
      questionTitle: 'Which symbol is used for comments in Javascript?',
      options: [
        { answerText: '// for Single line , /* multi line */', isCorrect: true},
        { answerText: '“#”', isCorrect: false },
        { answerText: '$', isCorrect: false },
        { answerText: '*-', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What is === operator?',
      options: [
        
        { answerText: '(===) is used to assign a value to a variable', isCorrect: false },
        { answerText: 'The equality operator (===) checks whether its two operands are equal, returning a Boolean result.', isCorrect: false },
        { answerText: '(===) is called a strict equality operator, which returns true when the two operands have the same value without conversion.', isCorrect: true},
        { answerText: '(===) produces the sum of numeric operands or string concatenation', isCorrect: false},
      ],
    },
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
        { answerText: 'for, for-on, for-off', isCorrect: false},
        { answerText: 'for, for-in, for-of', isCorrect: true},
        { answerText: 'do, do-while, breaking', isCorrect: false },
        { answerText: 'do, for, breaking', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What would be the result of 3 + 2 + ”7″ ?',
      options: [
        { answerText: '35', isCorrect: false},
        { answerText: '12', isCorrect: false },
        { answerText: '57', isCorrect: true },
        { answerText: '-12', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What do you mean by NULL in Javascript ?',
      options: [
        { answerText: 'null declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false},
        { answerText: 'null is a special value that represents an empty or unknown value', isCorrect: true},
        { answerText: 'null creates a constant whose scope can be either global or local to the block in which it is declared', isCorrect: false },
        { answerText: 'null checks whether its two operands are equal, returning a Boolean result', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What are all the types of Pop up boxes available in JavaScript ?',
      options: [
        { answerText: '.submit(), let(), const()', isCorrect:false },
        { answerText: 'console.log(), prompt(), append()', isCorrect: false },
        { answerText: '.push(), confirm()', isCorrect: false },
        { answerText: 'alert(), confirm(), prompt()', isCorrect: true},
      ],
    },
    {
      questionTitle: 'What is the use of a typeof operator ?',
      options: [
        { answerText: '‘Typeof’ operator removes a property from an object ', isCorrect: false},
        { answerText: '‘Typeof’ operator returns true if the specified property is in the specified object or its prototype chain', isCorrect: false },
        { answerText: '‘Typeof’ is an operator used to return a string description of the type of a variable', isCorrect: true},
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
        { answerText: 'The ‘And’ Operator (/=), ‘Or’ Operator (%=), and the ‘Not’ Operator (=)', isCorrect: false},
        { answerText: 'The ‘And’ Operator (==), ‘Or’ Operator (+=), and the ‘Not’ Operator (-=)', isCorrect: false },
        { answerText: 'The ‘And’ Operator (&&), ‘Or’ Operator (||), and the ‘Not’ Operator (!)', isCorrect: true  },
        { answerText: 'The ‘And’ Operator (&), ‘Or’ Operator (|), and the ‘Not’ Operator (*)', isCorrect: false },
      ],
    },
    {
      questionTitle: 'What are the features of JavaScript?',
      options: [
        { answerText: 'It is a lightweight, interpreted programming language', isCorrect: false},
        { answerText: 'It is designed for creating network-centric applications.', isCorrect: false },
        { answerText: 'It is an open and cross-platform scripting language.', isCorrect: false },
        { answerText: 'all of the above', isCorrect: true },
      ],
    },
    {
      questionTitle: 'Is JavaScript a case-sensitive language?',
      options: [
        { answerText: 'No, JavaScript is not case sensitive language', isCorrect: false},
        { answerText: 'Yes, JavaScript is a case sensitive language', isCorrect: true},
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
        { answerText: 'A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.', isCorrect: true},
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
        { answerText: 'Global Variables, Local Variables ', isCorrect: true},
        { answerText: 'Bollean variables', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionTitle: 'How to create a cookie using JavaScript?',
      options: [
        { answerText: 'document.cookie ', isCorrect: true},
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
        { answerText: 'React, Angular, Vue', isCorrect: true},
      ],
    },
    {
      questionTitle: 'How do you empty an array in JavaScript?',
      options: [
        { answerText: 'By assigning array length to 0', isCorrect:false },
        { answerText: 'By assigning an empty array', isCorrect: false },
        { answerText: 'By popping the elements of the array', isCorrect: false },
        { answerText: 'all of the above', isCorrect:true },
      ],
    },
    {
      questionTitle: 'You can use this array method to access items from an array based on a specific index,You can use both positive and negative indexing !!; This definition corresponds to?',
      options: [
        { answerText: '.index()', isCorrect: false },
        { answerText: '.indexOf()', isCorrect: false },
        { answerText: '.at()', isCorrect: true},
        { answerText: '.pop()', isCorrect: false },
      ],
    },
    {
      questionTitle: 'An arrow function can be expressed like?',
      options: [
        { answerText: 'const function = () => {}', isCorrect: true},
        { answerText: 'var function = () => {}', isCorrect: false },
        { answerText: 'let function = () => {}', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionTitle: 'Shortly Closures mean: ?',
      options: [
        { answerText: 'Closures means that an inner function always has access to the variable of its outer function, even after the outer function has returned', isCorrect: true},
        { answerText: 'Closures means that an inner function never has access to the variable of its outer function, even after the outer function has returned', isCorrect: false },
        { answerText: 'Closures is a behavior in which a function or variable can be used before declaration', isCorrect: false },
        { answerText: 'Closures is a behavior in which a function or variable can be used after declaration', isCorrect: false },
      ],
    },
  ];
  export default questions3