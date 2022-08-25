const questions = [
  {
    questionTitle: 'What is JavaScript??',
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

      { answerText: 'Str,Int,List,Bool,	Dict', isCorrect: false },
      { answerText: 'Number , String, Boolean, Object, Undefined', isCorrect: true },
      { answerText: 'Integer, Boolean, Floating Point, Valueless or Void', isCorrect: false },
      { answerText: 'byte, char ,short, int', isCorrect: false },
    ],
  },
  {
    questionTitle: 'What is the use of isNaN function??',
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
      { answerText: 'Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.', isCorrect: true },
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
];
export default questions