const questions100 = [
    {
        questionTitle: 'What is scope in Javascript?',
        options: [
            { answerText: 'Scope is is a behavior in which a function or variable can be used before declaration', isCorrect: false },
            { answerText: 'Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.', isCorrect: true },
            { answerText: 'Scope is a particular way of organizing data so that it can be used efficiently.', isCorrect: false },
            { answerText: 'Scope is method removes the last element from an array and returns that element', isCorrect: false },
        ],
    },
    {
        questionTitle: 'which one is not a Javascript Engine?',
        options: [

            { answerText: 'Chakra', isCorrect: false },
            { answerText: 'V8', isCorrect: false },
            { answerText: 'Vite', isCorrect: true },
            { answerText: 'Spider Monkey', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Event loop is?',
        options: [
            { answerText: 'Event loop checks whether its two operands are equal, returning a Boolean result', isCorrect: false },
            { answerText: 'Event loop declaration is used when creating JavaScript modules to export live bindings to functions', isCorrect: false },
            { answerText: 'Event loop declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false },
            { answerText: 'Event loop is a running process that watches call stack & queues. If the call stack is empty, it takes first event in Task queue and pushes it to the call stack.', isCorrect: true },
        ],
    },
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
        questionTitle: 'setTimeout() is?',
        options: [
            { answerText: 'setTimeout() enable asynchronous', isCorrect: false },
            { answerText: 'setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.', isCorrect: true },
            { answerText: 'setTimeout() operator removes a property from an object', isCorrect: false },
            { answerText: 'setTimeout() terminates the current loop', isCorrect: false },
        ],
    },
    {
        questionTitle: 'setInterval() is?',
        options: [

            { answerText: 'setInterval() Hides the element, and prevent to use it', isCorrect: false },
            { answerText: 'setInterval() method is used to add or append one or more elements to an Array start', isCorrect: false },
            { answerText: 'setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.', isCorrect: true },
            { answerText: 'setInterval() is an operator used to return a string description of the type of a variable', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Does JavaScript support automatic type conversion?',
        options: [
            { answerText: 'Only if adding a library to a project', isCorrect: false },
            { answerText: 'Yes, but you need a function to do it', isCorrect: false },
            { answerText: 'No , Javascript dont do any conversion', isCorrect: false },
            { answerText: 'Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers.', isCorrect: true },
        ],
    },
    {
        questionTitle: 'Is JavaScript strongly typed or weakly typed?',
        options: [

            { answerText: 'JavaScript is a strongly typed language, it has everything you need', isCorrect: false },
            { answerText: 'JavaScript is a loosely typed language, meaning you dont have to specify what type of information will be stored in a variable in advance', isCorrect: true },
            { answerText: 'Javascript is a weakly typed, cause its trouble to find variables in the order of javascript', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are JavaScript Data Types?',
        options: [

            { answerText: 'Str,Int,List,Bool,	Dict', isCorrect: false },
            { answerText: 'Number , String, Boolean, Object, Undefined', isCorrect: true },
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
        questionTitle: 'What is called Variable typing in Javascript?',
        options: [
            { answerText: 'Variable typing, is used to assign a number to a variable. The same variable can be assigned to a string.', isCorrect: true },
            { answerText: 'The Variable typing, is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.', isCorrect: false },
            { answerText: 'Variable typing, represents the eventual completion (or failure) of an asynchronous operation and its resulting value', isCorrect: false },
            { answerText: 'The Variable typing, is used to create a responsive web design', isCorrect: false },
        ],
    },
    {
        questionTitle: ' How can you convert the string of any base to an integer in JavaScript?',
        options: [

            { answerText: 'Math.floor()', isCorrect: false },
            { answerText: 'toString()', isCorrect: true },
            { answerText: 'The parseInt()', isCorrect: true },
            { answerText: 'new Set()', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is == operator?',
        options: [
            { answerText: '(==) is used to assign a value to a variable', isCorrect: false },
            { answerText: 'The equality operator (==) checks whether its two operands are equal, returning a Boolean result.', isCorrect: true },
            { answerText: '(==) is called a strict equality operator, which returns true when the two operands have the same value without conversion.', isCorrect: false },
            { answerText: '(==) produces the sum of numeric operands or string concatenation', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are classes in JavaScript?',
        options: [

            { answerText: 'Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes', isCorrect: true },
            { answerText: 'Classes enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object', isCorrect: false },
            { answerText: 'Classes methods are often utility functions, such as functions to create or clone objects', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
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
        questionTitle: 'What is a pure function?',
        options: [
            { answerText: 'A Pure function is a function where the return value is only determined by its arguments without any side effects', isCorrect: true },
            { answerText: 'Pure function cannot share its name with a function or a variable in the same scope', isCorrect: false },
            { answerText: 'A Pure function is a function passed as an argument to another function', isCorrect: false },
            { answerText: 'Pure function its a integrate function in Javascript', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is Hoisting?',
        options: [

            { answerText: 'Hoisting is a function where the return value is only determined by its arguments without any side effects', isCorrect: false },
            { answerText: 'Hoisting are those that do not exist in a program and are not declared. If the program tries to read the value of an Hoisted, then a runtime error is encountered.', isCorrect: false },
            { answerText: 'Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution', isCorrect: true },
            { answerText: 'Hoisting means that an inner function always has access to the variable of its outer function, even after the outer function has returned', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is event bubbling?',
        options: [
            { answerText: 'is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element', isCorrect: false },
            { answerText: 'is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object', isCorrect: false },
            { answerText: 'is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading', isCorrect: false },
            { answerText: 'is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is event capturing?',
        options: [
            { answerText: 'is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element', isCorrect: true },
            { answerText: 'is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading', isCorrect: false },
            { answerText: 'is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object', isCorrect: false },
            { answerText: 'is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element', isCorrect: false },
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
            { answerText: 'Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.', isCorrect: true },
            { answerText: 'Undefined variables creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement', isCorrect: false },
            { answerText: 'Undefined variables declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false },
            { answerText: 'Undefined variables terminates the current loop', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is a promise?',
        options: [
            { answerText: 'Promise is a function passed as an argument to another function', isCorrect: false },
            { answerText: 'A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved', isCorrect: true },
            { answerText: 'Promise refers to the object from where it was called', isCorrect: false },
            { answerText: 'A promise declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Why do you need a promise?',
        options: [

            { answerText: 'Promises is needed to use async and await', isCorrect: false },
            { answerText: 'A promise declares a block-scoped local variable, optionally initializing it to a value', isCorrect: false },
            { answerText: 'Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code', isCorrect: true },
            { answerText: 'A promise is a function passed as an argument to another function', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are the three states of promise?',
        options: [
            { answerText: '[Pending, Fulfilled, Rejected]', isCorrect: true },
            { answerText: '[then, try, catch]', isCorrect: false },
            { answerText: '[Async, Promised, Error]', isCorrect: false },
            { answerText: '[Event, Catch, Rejected]', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is a callback hell?',
        options: [

            { answerText: 'That means instead of waiting for a response javascript will keep executing while listening for other events', isCorrect: false },
            { answerText: 'You can nest one callback inside in another callback to execute the actions sequentially one by one', isCorrect: false },
            { answerText: 'Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.', isCorrect: true },
            { answerText: 'So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is ‘this’ keyword in JavaScript?',
        options: [
            { answerText: 'keyword enable asynchronous', isCorrect: false },
            { answerText: 'keyword always return a promise', isCorrect: false },
            { answerText: 'keyword refers to the object from where it was called.', isCorrect: true },
            { answerText: 'keyword declaration is used when creating JavaScript modules to export live bindings to functions', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Which symbol is used for comments in Javascript?',
        options: [
            { answerText: '// for Single line , /* multi line */', isCorrect: true },
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
            { answerText: '(===) is called a strict equality operator, which returns true when the two operands have the same value without conversion.', isCorrect: true },
            { answerText: '(===) produces the sum of numeric operands or string concatenation', isCorrect: false },
        ],
    },
    {
        questionTitle: 'what is anonymous function?',
        options: [

            { answerText: 'Anonymous Function dont exists', isCorrect: false },
            { answerText: 'Anonymous Function is a function that does not have any name associated with it', isCorrect: true },
            { answerText: 'Anonymous Function dont have side effects', isCorrect: false },
            { answerText: 'Anonymous Function is a function how work inside of another function', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are anonymous functions used for?',
        options: [
            { answerText: 'Anonymous functions, always return a promise', isCorrect: false },
            { answerText: 'Anonumous functions work for, You can nest one callback inside in another callback to execute the actions sequentially one by one', isCorrect: false },
            { answerText: 'Anonymous functions, also known as closures , allow the creation of functions which have no specified name. They are most useful as the value of callable parameters', isCorrect: true },
            { answerText: 'Anonymous functions, is a function passed as an argument to another function', isCorrect: false },
        ],
    },
    {
        questionTitle: 'The ____ statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value. this description correspond to ?',
        options: [

            { answerText: 'var', isCorrect: true },
            { answerText: 'let', isCorrect: false },
            { answerText: 'const', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'The ____ are block-scoped, much like variables declared using the let keyword. The value of a constant cant be changed through reassignment. this description correspond to?',
        options: [

            { answerText: 'var', isCorrect: false },
            { answerText: 'let', isCorrect: false },
            { answerText: 'const', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'The ____ declaration declares a block-scoped local variable, optionally initializing it to a value. this description correspond to?',
        options: [

            { answerText: 'var', isCorrect: false },
            { answerText: 'let', isCorrect: true },
            { answerText: 'const', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
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
        questionTitle: 'What are Exports & Imports?',
        options: [

            { answerText: 'Imports and exports is necessary for use a function', isCorrect: false },
            { answerText: 'Imports and exports used in an Javascript document to make important notes and help developers mention any modification to be incorporated afterward.', isCorrect: false },
            { answerText: 'Imports and exports are used to collect the user information when they are filled, and details are provided to save into the database.', isCorrect: false },
            { answerText: 'Imports and exports help us to write modular JavaScript code. Using Imports and exports we can split our code into multiple files', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is the ‘Strict’ mode in JavaScript?',
        options: [
            { answerText: 'Strict mode is always running', isCorrect: false },
            { answerText: 'Strict mode is for other programming languages', isCorrect: false },
            { answerText: 'Strict mode is a way to introduce better error-checking into your code', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'how can it be enabled the ‘Strict’ mode?',
        options: [

            { answerText: 'You need to install a library to enable the Strict mode', isCorrect: false },
            { answerText: 'You need high knowledge in Javascript to enabled this, better is call a senior dev', isCorrect: false },
            { answerText: 'Strict mode is always running', isCorrect: false },
            { answerText: 'You can enable strict mode by adding “use strict” at the beginning of a file', isCorrect: true },
        ],
    },
    {
        questionTitle: 'Strict mode makes several changes to normal JavaScript semantics ?',
        options: [
            { answerText: 'Eliminates some JavaScript silent errors by changing them to throw errors', isCorrect: false },
            { answerText: 'Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code thats not strict mode', isCorrect: false },
            { answerText: 'Prohibits some syntax likely to be defined in future versions of ECMAScript', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
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
        questionTitle: 'Call stack is ???',
        options: [
            { answerText: 'The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped, We use call stack for memorizing which function is running right now', isCorrect: true },
            { answerText: 'The call stack are those that are declared in the program but have not been given any value. If the program tries to read the value of an The call stack, an undeclared value is returned.', isCorrect: false },
            { answerText: 'The call stack are those that do not exist in a program and are not declared. If the program tries to read the value of an The call stack, then a runtime error is encountered.', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Is the call stack LIFO or FIFO?',
        options: [

            { answerText: 'FIFO', isCorrect: false },
            { answerText: 'LIFO', isCorrect: true },
            { answerText: 'Both', isCorrect: false },
            { answerText: 'None', isCorrect: false },
        ],
    },
    {
        questionTitle: '____ is a primitive wrapper object used to represent and manipulate primitive ____ values, which are too large to be represented by the number primitive, this definition correspond to?',
        options: [
            { answerText: 'Math.floor', isCorrect: false },
            { answerText: 'The parseInt', isCorrect: true },
            { answerText: 'new Set', isCorrect: false },
            { answerText: 'BigInt', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is TypeScript and why it is used?',
        options: [

            { answerText: 'TypeScript is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike', isCorrect: false },
            { answerText: 'TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.', isCorrect: true },
            { answerText: 'TypeScript is a platform and framework for building single-page client applications using HTML', isCorrect: false },
            { answerText: 'TypeScript is a JavaScript file that contains a bunch of functions, and those functions accomplish some useful task for your webpage.', isCorrect: false },
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
        questionTitle: 'What is the purpose of double exclamation?',
        options: [

            { answerText: 'method returns a boolean indicating whether the object has the specified property as its own property', isCorrect: false },
            { answerText: 'The double exclamation or negation(!!) ensures the resulting type is a boolean.', isCorrect: true },
            { answerText: 'The double exclamation or negation(!!) calls the function with a given this value and arguments provided individually', isCorrect: false },
            { answerText: 'method calls the specified function with a given this value, and arguments provided as an array (or an array-like object)', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the purpose of the delete operator?',
        options: [
            { answerText: 'keyword declaration is used when creating JavaScript modules to export live bindings to functions', isCorrect: false },
            { answerText: 'The delete keyword is used to delete the property as well as its value.', isCorrect: true },
            { answerText: 'The delete keyword refers to the object from where it was called.', isCorrect: false },
            { answerText: 'keyword enable asynchronous', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is a prototype chain?',
        options: [

            { answerText: 'Prototype chaining are used to defines a dialog box or window', isCorrect: false },
            { answerText: 'Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.', isCorrect: true },
            { answerText: 'creates a constant whose scope can be either global or local to the block in which it is declared', isCorrect: false },
            { answerText: 'checks whether its two operands are equal, returning a Boolean result', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is IIFE?',
        options: [
            { answerText: 'Immediately Invoked Function Expression', isCorrect: true },
            { answerText: 'Instance Invoked Functional Expression', isCorrect: false },
            { answerText: 'Instant Instance For Expression', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are modules?',
        options: [

            { answerText: 'Modules is the accessibility of variables, functions, and objects in some particular part of your code during runtime', isCorrect: false },
            { answerText: 'Modules is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that dont need a web page or user interaction', isCorrect: false },
            { answerText: 'Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns', isCorrect: true },
            { answerText: 'Modules is an API that provides a mechanism by which browsers can store key/value pairs locally within the users browser', isCorrect: false },
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
            { answerText: '[] square brackets', isCorrect: false },
            { answerText: '{} curly brackets', isCorrect: true },
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
        questionTitle: 'Why do you need modules?',
        options: [

            { answerText: 'Maintainability', isCorrect: false },
            { answerText: 'Reusability', isCorrect: false },
            { answerText: 'Namespacing', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionTitle: 'Is JavaScript a compiled or interpreted language?',
        options: [
            { answerText: 'None', isCorrect: false },
            { answerText: 'Compiled language', isCorrect: false },
            { answerText: 'Interpreted language', isCorrect: true },
            { answerText: 'Both compiled and interpreted', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Who created javascript?',
        options: [

            { answerText: 'Brendan Eich in 1995', isCorrect: true },
            { answerText: 'Linus Torvalds in 1991', isCorrect: false },
            { answerText: 'James Gosling 1983', isCorrect: false },
            { answerText: 'Bill Gates 1975', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the use of preventDefault method?',
        options: [
            { answerText: 'The preventDefault() is a particular way of organizing data so that it can be used efficiently.', isCorrect: false },
            { answerText: 'The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur.', isCorrect: true },
            { answerText: 'The preventDefault() is used to display a web page within a web page', isCorrect: false },
            { answerText: 'The preventDefault() method removes the last element from an array and returns that element', isCorrect: false },
        ],
    },
    {
        questionTitle: 'How can you create an Array in JavaScript?',
        options: [
            { answerText: '[] square brackets', isCorrect: true },
            { answerText: '{} curly brackets', isCorrect: false },
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
        questionTitle: 'Is there any relation between Java and JavaScript?',
        options: [

            { answerText: 'No, they are entirely two different programming languages and have nothing to do with each other.', isCorrect: true },
            { answerText: 'Yes, there are the same language but Javascript is the newest version', isCorrect: false },
            { answerText: 'They did it by the same person', isCorrect: false },
            { answerText: 'No are the same per se but Javascript have a little features who java dont have it', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the use of stopPropagation method?',
        options: [
            { answerText: 'The stopPropagation method returns the number of milliseconds', isCorrect: false },
            { answerText: 'The stopPropagation method determines whether the passed value is a finite number. If needed, the parameter is first converted to a number', isCorrect: false },
            { answerText: 'The stopPropagation method is used to stop the event from bubbling up the event chain.', isCorrect: true },
            { answerText: 'The stopPropagation method is a value representing Not-A-Number', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is an event delegation?',
        options: [

            { answerText: 'Event delegation method is used to call a function or evaluate an expression after a specified number of milliseconds', isCorrect: false },
            { answerText: 'Event delegation specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes', isCorrect: false },
            { answerText: 'Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.', isCorrect: true },
            { answerText: 'Event delegation method is used to stop the event from bubbling up the event chain.', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is ECMAScript?',
        options: [
            { answerText: 'ECMAScript is the scripting language that forms the basis of JavaScript.', isCorrect: true },
            { answerText: 'ECMAScript method sets the month for a specified date according to universal time', isCorrect: false },
            { answerText: 'ECMAScript It is an "information" to the browser about what document type to expect', isCorrect: false },
            { answerText: 'None o the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is JSON?',
        options: [

            { answerText: 'JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.', isCorrect: true },
            { answerText: 'it is a primitive data types', isCorrect: false },
            { answerText: 'JSON is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable', isCorrect: false },
            { answerText: 'is the set of statements used to perform a specific task. A JSON can be either a named one or an anonymous one', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the purpose JSON stringify?',
        options: [
            { answerText: 'JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript', isCorrect: false },
            { answerText: 'Stringify method is the format who JSON have in Javascript', isCorrect: false },
            { answerText: 'When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
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
        questionTitle: 'What is a Cookie?',
        options: [
            { answerText: 'A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs', isCorrect: true },
            { answerText: 'A cookie it is a preparation in base of flour and butter', isCorrect: false },
            { answerText: 'A cookie it is a small component who is incorporated by default in the browser', isCorrect: false },
            { answerText: 'A cookie is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Why do you need a Cookie?',
        options: [

            { answerText: 'Is used to insert comments in the source code', isCorrect: false },
            { answerText: 'Cookies is used to display a web page within a web page', isCorrect: false },
            { answerText: 'Cookies are used to remember information about the user profile', isCorrect: true },
            { answerText: 'provides the result of a calculation', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the template literal(Template strings) in ES6?',
        options: [
            { answerText: 'Template literals are literals delimited with backtick (``) characters, allowing for multi-line strings, for string interpolation with embedded expressions', isCorrect: true },
            { answerText: 'allows JavaScript objects to define or customize their iteration behavior', isCorrect: false },
            { answerText: 'method shallow copies part of an array to another location in the same array and returns it without modifying its length', isCorrect: false },
            { answerText: 'determines whether an array includes a certain value among its entries, returning true or false as appropriate', isCorrect: false },
        ],
    },
    {
        questionTitle: 'what is localStorage Javascript?',
        options: [

            { answerText: 'localStorage object stores data only for a session. It means that the data stored in the localStorage will be deleted when the browser is closed.', isCorrect: false },
            { answerText: 'localStorage are used to remember information about the user profile', isCorrect: false },
            { answerText: 'localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is session storage in javascript?',
        options: [
            { answerText: 'The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.', isCorrect: true },
            { answerText: 'sessionStorage shallow copies part of an array to another location in the same array and returns it without modifying its length', isCorrect: false },
            { answerText: 'sessionStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.', isCorrect: false },
            { answerText: 'LocalStorage is the same as SessionStorage', isCorrect: false },
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
    {
        questionTitle: 'What is memoization?',
        options: [
            { answerText: 'Memoization is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution', isCorrect: false },
            { answerText: 'Memoization is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading', isCorrect: false },
            { answerText: 'Memoization is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it', isCorrect: false },
            { answerText: 'Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache.', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is a polyfill?',
        options: [

            { answerText: 'A polyfill is a storage in physical memory used to temporarily store data while it is being transferred from one place to another.', isCorrect: false },
            { answerText: 'A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.', isCorrect: true },
            { answerText: 'A polyfill is a self-contained series of instructions to perform a function.', isCorrect: false },
            { answerText: 'A polyfill is a program that retrieves and displays pages from the Web, and lets users access further pages through hyperlinks.', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the purpose of void 0?',
        options: [
            { answerText: 'Void(0) means that an inner function never has access to the variable of its outer function, even after the outer function has returned', isCorrect: false },
            { answerText: 'Void(0) is a behavior in which a function or variable can be used before declaration', isCorrect: false },
            { answerText: 'Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value.', isCorrect: true },
            { answerText: 'Void(0) is a self-contained series of instructions to perform a function', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is a rest parameter?',
        options: [

            { answerText: 'is a storage in physical memory used to temporarily store data while it is being transferred from one place to another', isCorrect: false },
            { answerText: 'a behavior in which a function or variable can be used before declaration', isCorrect: false },
            { answerText: 'are used to remember information about the user profile', isCorrect: false },
            { answerText: 'The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array.', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is a spread operator in JavaScript?',
        options: [
            { answerText: 'is a storage in physical memory used to temporarily store data while it is being transferred from one place to another', isCorrect: false },
            { answerText: 'a behavior in which a function or variable can be used before declaration', isCorrect: false },
            { answerText: 'are used to remember information about the user profile', isCorrect: false },
            { answerText: 'spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is a first class function?',
        options: [

            { answerText: 'is a function that accepts another function as an argument or returns a function as a return value or both.', isCorrect: false },
            { answerText: 'A programming language is said to have First-class functions when functions in that language are treated like any other variable', isCorrect: true },
            { answerText: 'is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.', isCorrect: false },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is a higher order function ?',
        options: [
            { answerText: 'is a function that accepts another function as an argument or returns a function as a return value or both.', isCorrect: true },
            { answerText: 'A programming language is said to have higher order function functions when functions in that language are treated like any other variable', isCorrect: false },
            { answerText: 'is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.', isCorrect: false },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are the benefits of initializing variables?',
        options: [

            { answerText: 'It gives cleaner code', isCorrect: false },
            { answerText: 'It provides a single place to initialize variables', isCorrect: false },
            { answerText: 'Avoid undefined values in the code', isCorrect: false },
            { answerText: 'All are corrects', isCorrect: true },
        ],
    },
    {
        questionTitle: 'How do you generate random integers?',
        options: [
            { answerText: 'You can use Math.random() with Math.floor() to return random integers.', isCorrect: true },
            { answerText: 'You can use Math.random() with partseInt() to return random integers.', isCorrect: false },
            { answerText: 'You can use Math() with floor() to return random integers.', isCorrect: false },
            { answerText: 'You can use toInteger() with round() to return random integers.', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is a RegExp object?',
        options: [

            { answerText: 'RegExp() method of regular expression in order to search a string for a pattern', isCorrect: false },
            { answerText: 'RegExp object is a regular expression object with predefined properties and methods.', isCorrect: true },
            { answerText: 'The purpose of RegExp method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false', isCorrect: false },
            { answerText: 'RegExp is a sequence of characters that forms a search pattern', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What OOP means?',
        options: [
            { answerText: 'Object-oriented Programming', isCorrect: true },
            { answerText: 'Objetive-On Programming', isCorrect: false },
            { answerText: 'Office In Personnel', isCorrect: false },
            { answerText: 'Office Oriented to Programming', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is mutable in javascript?',
        options: [

            { answerText: 'is a value (primitive or object) passed as input to a function.', isCorrect: false },
            { answerText: 'mutable is a template definition of an objects properties and methods', isCorrect: false },
            { answerText: 'is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.', isCorrect: true },
            { answerText: 'is a sequence of characters that forms a search pattern', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is inmutable in javascript?',
        options: [
            { answerText: 'Immutables are the objects whose state cannot be changed once the object is created', isCorrect: true },
            { answerText: 'mutable is a template definition of an objects properties and methods', isCorrect: false },
            { answerText: 'is a value (primitive or object) passed as input to a function.', isCorrect: false },
            { answerText: 'is a type of variable that can be changed. In JavaScript, only objects and arrays are inmutable, not primitive values.', isCorrect: false },
        ],
    },
    {
        questionTitle: 'APIs mean?',
        options: [

            { answerText: 'Programming Army Interfaces', isCorrect: false },
            { answerText: 'Sequential programming association', isCorrect: false },
            { answerText: 'Application per interview', isCorrect: false },
            { answerText: 'Application Programming Interfaces', isCorrect: true },
        ],
    },
    {
        questionTitle: 'Why do we use API?',
        options: [
            { answerText: 'a behavior in which a function or variable can be used before declaration', isCorrect: false },
            { answerText: 'We use  a sequence of characters that forms a search pattern', isCorrect: false },
            { answerText: 'APIs allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used', isCorrect: false },
            { answerText: 'APIs are needed to bring applications together in order to perform a designed function built around sharing data and executing pre-defined processes', isCorrect: true },
        ],
    },
    {
        questionTitle: 'How do you extend classes?',
        options: [

            { answerText: 'The Apply keyword is used in class declarations/expressions to create a class which is a child of another class', isCorrect: false },
            { answerText: 'The extends keyword is used in class declarations/expressions to create a class which is a child of another class', isCorrect: true },
            { answerText: 'The Concat keyword is used in class declarations/expressions to create a class which is a child of another class', isCorrect: false },
            { answerText: 'The child keyword is used in class declarations/expressions to create a class which is a child of another class', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is MERN stack?',
        options: [
            { answerText: 'MongoDB, ExpressJS, ReactJS, Node.js', isCorrect: true },
            { answerText: 'MongoDB, ExpressJS, RouterDom, Node.js', isCorrect: false },
            { answerText: 'MongoDB, ExpressJS, RouterDom, Next.js', isCorrect: false },
            { answerText: 'MongoDB, EmberJS, ReactJS, Node.js', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is MEAN stack?',
        options: [

            { answerText: 'Masonry, ExpressJS, Angular, NextJs', isCorrect: false },
            { answerText: 'MongoDB, ExpressJS, Angular, Next.js', isCorrect: false },
            { answerText: 'MongoDB, ExpressJS, Angular, Node.js', isCorrect: true },
            { answerText: 'MeteorJs, ExpressJS, Angular, Node.js', isCorrect: false },
        ],
    },
]
export default questions100