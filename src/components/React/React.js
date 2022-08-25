const questionReact = [
    {
        questionTitle: 'What is React?',
        options: [
          { answerText: 'Provides the structure of the page', isCorrect: false },
          { answerText: 'Is the standard markup language for documents designed to be displayed in a web browser', isCorrect: false },
          { answerText: 'Is an open-source front-end JavaScript library', isCorrect: true },
          { answerText: 'is a scripting or programming language that allows you to implement complex features on web pages', isCorrect: false },
        ],
      },
      {
        questionTitle: 'What is JSX?',
        options: [
          { answerText: 'JSX stands for JavaScript XML.', isCorrect: true },
          { answerText: 'Is a keyword or term assigned to a piece of information', isCorrect: false },
          { answerText: 'It is a state', isCorrect: false },
          { answerText: 'It is a component', isCorrect: false },
        ],
      },
      {
        questionTitle: 'What is the virtual DOM?',
        options: [
          { answerText: 'virtual DOM it is a library', isCorrect: false },
          { answerText: 'virtual DOM take charge of the creation in the all components use in React', isCorrect: false },
          { answerText: 'virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM', isCorrect: true },
          { answerText: 'virtual DOM is the same DOM, but is normally use it in a cloud', isCorrect: false },
        ],
      },
      {
        questionTitle: 'How to create components in React?',
        options: [
          { answerText: 'Function Components', isCorrect: false },
          { answerText: 'Class Components:', isCorrect: false },
          { answerText: 'Components in Components', isCorrect: false },
          { answerText: 'All of the above', isCorrect: true },
        ],
      },
      {
        questionTitle: 'What is state in React?',
        options: [
          { answerText: 'State of a component is an object that holds some information that may change over the lifetime of the component', isCorrect: true },
          { answerText: 'They are data passed down from a parent component to a child component.', isCorrect: false },
          { answerText: 'is a cross-browser wrapper around the browsers native event', isCorrect: false },
          { answerText: 'is a special string attribute you should include when creating arrays of elements', isCorrect: false },
        ],
      },
      {
        questionTitle: 'What are props in React?',
        options: [
          { answerText: 'Basically it just provides syntactic sugar', isCorrect: false },
          { answerText: 'is a plain object describing what you want to appear on the screen in terms', isCorrect: false },
          { answerText: 'is a special string attribute you should include when creating arrays of elements', isCorrect: false },
          { answerText: 'Using props, we can pass data from one component to another', isCorrect: true },
        ],
      },
      {
        questionTitle: 'What is React Hooks?',
        options: [
          { answerText: 'With React Hooks We can directly style an element using inline style attributes', isCorrect: false },
          { answerText: 'React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components', isCorrect: true },
          { answerText: 'With React Hooks We can create a separate JavaScript object', isCorrect: false },
          { answerText: 'React Hooks used for caching CPU-Expensive functions.', isCorrect: false },
        ],
      },
      {
        questionTitle: 'What is the use of refs?',
        options: [
          { answerText: 'The ref is used to return a reference to the element, they can be useful when you need a direct access to the DOM element or an instance of a component', isCorrect: true },
          { answerText: 'is a plain object describing what you want to appear on the screen in terms', isCorrect: false },
          { answerText: 'are the built-in functions that permit developers for using the state and lifecycle methods within React components', isCorrect: false },
          { answerText: 'It is a component', isCorrect: false },
        ],
      },
      {
        questionTitle: 'Why should we not update the state directly?',
        options: [
          { answerText: 'You can update state directly', isCorrect: false },
          { answerText: 'Cause throw a error ', isCorrect: false },
          { answerText: 'If you try to update the state directly then it wont re-render the component.', isCorrect: true },
          { answerText: 'Because it is necessary a prop to update the state', isCorrect: false },
        ],
      },
      {
        questionTitle: 'How to write comments in React?',
        options: [
          { answerText: '// for Single line , /* multi line */', isCorrect: false },
          { answerText: 'The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.', isCorrect: true },
          { answerText: '{} curly braces', isCorrect: false },
          { answerText: '/*  */', isCorrect: false },
        ],
      },
  
];
export default questionReact;