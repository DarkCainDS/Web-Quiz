const questionCss30 = [
    {
        questionTitle: 'CSS is the abbreviation for ?',
        options: [
            { answerText: 'Cool Sheet Style', isCorrect: false },
            { answerText: 'Cascading Set Style', isCorrect: false },
            { answerText: 'Cascading Style Sheet', isCorrect: true },
            { answerText: 'Color Style Sheet', isCorrect: false },
        ],
    },
    {
        questionTitle: ' how can i use the universal selector ?',
        options: [
            { answerText: 'body{}', isCorrect: false },
            { answerText: '*{}', isCorrect: true },
            { answerText: 'style{}', isCorrect: false },
            { answerText: '${}', isCorrect: false },
        ],
    },
    {
        questionTitle: 'How can you integrate CSS on a web page ?',
        options: [
            { answerText: 'Inline method', isCorrect: false },
            { answerText: 'Embedded/Internal method', isCorrect: false },
            { answerText: 'Linked/Imported/External method', isCorrect: false },
            { answerText: 'All ofthe above', isCorrect: true },
        ],
    },
    {
        questionTitle: ' Inline Css can be expressed like?',
        options: [
            { answerText: 'import "./index.css" ', isCorrect: false },
            { answerText: '<link rel-“stylesheet” href=”./index.css”>', isCorrect: false },
            { answerText: 'p{ color:red; font-size: 20px}', isCorrect: false },
            { answerText: '<p style=”color:red; font-size: 20px;”></p>', isCorrect: true },
        ],
    },
    {
        questionTitle: 'External stylesheet can be expressed like?',
        options: [
            { answerText: 'import "./index.css" ', isCorrect: false },
            { answerText: '<link rel-“stylesheet” href=”./index.css”>', isCorrect: true},
            { answerText: 'p{ color:red; font-size: 20px}', isCorrect: false },
            { answerText: '<p style=”color:red; font-size: 20px;”></p>', isCorrect: false},
        ],
    },
    {
        questionTitle: 'Internal stylesheet can be expressed like?',
        options: [
            { answerText: 'import "./index.css" ', isCorrect: false },
            { answerText: '<link rel-“stylesheet” href=”./index.css”>', isCorrect: false},
            { answerText: '<head><style> p{ color:red; font-size: 20px}</style></head>', isCorrect: true },
            { answerText: '<p style=”color:red; font-size: 20px;”></p>', isCorrect: false},
        ],
    },
    {
        questionTitle: 'What are the advantages of CSS ?',
        options: [
            { answerText: 'Easier to maintain and update', isCorrect: true },
            { answerText: 'Object-oriented', isCorrect: false },
            { answerText: 'Memory Management', isCorrect: false },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are the CSS frameworks ?',
        options: [
            { answerText: 'Gumby, Bootstrap, Tailwind CSS', isCorrect: true },
            { answerText: 'Bootstrap, Tailwind CSS, Django', isCorrect: false },
            { answerText: 'Bootstrap, React, Skeleton', isCorrect: false },
            { answerText: 'Bulma, Tkinter, Vue', isCorrect: false },
        ],
    },
    {
        questionTitle: 'CSS style components are ?',
        options: [
            { answerText: 'Selector', isCorrect: false },
            { answerText: 'Property', isCorrect: false },
            { answerText: 'Value', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What are the elements of the CSS Box Model ?',
        options: [
            
            { answerText: 'padding, font-family, color', isCorrect: false },
            { answerText: 'border, shadow-boxm, font-size', isCorrect: false },
            { answerText: 'padding,, border, margin', isCorrect: true },
            { answerText: 'padding, background-color, transform', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is meant by RGB stream ?',
        options: [
            { answerText: 'RGB represents size in CSS', isCorrect: false },
            { answerText: 'RGB represents colors in CSS', isCorrect: true },
            { answerText: 'RGB represents image in CSS', isCorrect: false },
            { answerText: 'RGB represents position in CSS', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What was the purpose of developing CSS ?',
        options: [
            { answerText: 'CSS was developed to define the visual appearances of websites', isCorrect: true },
            { answerText: 'CSS to provide a set of general rules that suggest how content should look when rendered', isCorrect: false },
            { answerText: 'Developers use CSS to build complex interactive websites and browser games', isCorrect: false },
            { answerText: 'CSS is used to build websites and software, automate tasks, and conduct data analysis', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the difference between class selectors and id selectors? ?',
        options: [
            { answerText: 'An overall block is given to id selectors while class selector take only a single element differing from other elements.', isCorrect: false },
            { answerText: 'An overall block is given to class selector while id selectors take only a single element differing from other elements.', isCorrect: true },
            { answerText: 'It doesn´t matter ,both do the same ', isCorrect: false },
            { answerText: 'An overall block is given to class selector while id is use for javascript', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is RWD?',
        options: [
            { answerText: 'Responsive wide display', isCorrect: false },
            { answerText: 'Render word display', isCorrect: false },
            { answerText: 'Responsive Web Design', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Responsive Web Design is ?',
        options: [
            { answerText: 'is used to reduce the loading time for a web page.', isCorrect: false },
            { answerText: 'This technique is used to display the designed page perfectly on every screen size and device', isCorrect: true },
            { answerText: 'is used to define the design and layout of elements of CSS.', isCorrect: false },
            { answerText: 'helps to specify the stack order of positioned elements that may overlap one another.', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the float property of CSS ?',
        options: [
            { answerText: 'The CSS float property is used to move the image to the right or left along with the texts to be wrapped around it', isCorrect: true },
            { answerText: 'The CSS float property is used to move the image to the bottom or top along with the texts to be wrapped around it', isCorrect: false },
            { answerText: 'The CSS float property is used to move the image to the bottom or left along with the texts to be wrapped around it', isCorrect: false },
            { answerText: 'The CSS float property is used to move the image to the top or left along with the texts to be wrapped around it', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is the visibility: hidden property of CSS ?',
        options: [
            { answerText: 'It is a obsolete command', isCorrect: false },
            { answerText: 'Hides the element, and prevent to use it', isCorrect: false },
            { answerText: 'Hides the element but not occupy space. It will not affect the layout of the document.', isCorrect: false },
            { answerText: 'Hides the element, but it occupies space and affects the layout of the document.', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is the display: none property of CSS  ?',
        options: [
            { answerText: 'It is a obsolete command', isCorrect: false },
            { answerText: 'Hides the element but not occupy space. It will not affect the layout of the document.', isCorrect: true },
            { answerText: 'Hides the element, and prevent to use it', isCorrect: false },
            { answerText: 'Hides the element, but it occupies space and affects the layout of the document.', isCorrect: false },
        ],
    },
    {
        questionTitle: ' Choose the correct CSS background property/ies ?',
        options: [
            { answerText: 'background-image', isCorrect: false },
            { answerText: 'background-repeat', isCorrect: false },
            { answerText: 'background-position', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionTitle: 'How can we add gradients in CSS ?',
        options: [
            { answerText: 'Color Gradients', isCorrect: false },
            { answerText: 'Linear Gradients', isCorrect: true },
            { answerText: 'Gradients', isCorrect: false },
            { answerText: 'Full Gradients', isCorrect: false },
        ],
    },
    {
        questionTitle: 'For CSS Animations is necessary ?',
        options: [
            { answerText: '@keyframes', isCorrect: true },
            { answerText: '@animation', isCorrect: false },
            { answerText: 'animation-duration', isCorrect: false },
            { answerText: '@animation-duration', isCorrect: false },
        ],
    },
    {
        questionTitle: 'A media query is ?',
        options: [
            { answerText: 'Media query specifies the background color of an element', isCorrect: false },
            { answerText: 'Media query is used to create a responsive web design', isCorrect: true },
            { answerText: 'Media query sets the color of the four borders', isCorrect: false },
            { answerText: 'Media query attaches one or more shadows to an element', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What is CSS Flexbox ?',
        options: [
            { answerText: 'Allows you to perform calculations to determine CSS property values', isCorrect: false },
            { answerText: 'Is used to make the elements behave predictably when they are used with different screen sizes and different display devices. ', isCorrect: true },
            { answerText: 'Inserts the value of a custom property', isCorrect: false },
            { answerText: 'Allows you to import a style sheet into another style sheet', isCorrect: false },
        ],
    },
    {
        questionTitle: 'To use flexbox we define a container as a flexbox. What is the CSS to do this ?',
        options: [
            { answerText: 'Display:none', isCorrect: false },
            { answerText: 'Display:grid', isCorrect: false },
            { answerText: 'Display:flex;', isCorrect: true },
            { answerText: 'Display:block', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Justify-content allows you to do what ?',
        options: [
            { answerText: 'Defines how to position elements horizontally', isCorrect: true },
            { answerText: 'Define how to position elements vertically', isCorrect: false },
            { answerText: 'The width of the flex element', isCorrect: false },
            { answerText: 'Define how elements will wrap when the browser width is changed', isCorrect: false },
        ],
    },
    {
        questionTitle: 'Align-items allows you to do what ?',
        options: [
            { answerText: 'Define how to position elements horizontally', isCorrect: false },
            { answerText: 'Define how elements will wrap when the browser width is changed', isCorrect: false },
            { answerText: 'The width of the flex element', isCorrect: false },
            { answerText: 'Define how to position elements vertically', isCorrect: true },
        ],
    },
    {
        questionTitle: 'Choose the correct CSS border property/ies ?',
        options: [
            { answerText: 'Border Style', isCorrect: false },
            { answerText: 'Border Width', isCorrect: false },
            { answerText: 'Border Color', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        questionTitle: 'What is grid-area used for ?',
        options: [
            { answerText: 'The grid-area property specifies a grid items size and location in a grid layout', isCorrect: true },
            { answerText: 'The grid-area property specifies a default column size', isCorrect: false },
            { answerText: 'The grid-area property specifies a default row size', isCorrect: false },
            { answerText: 'The grid-area property specifies where to start the grid item', isCorrect: false },
        ],
    },
    {
        questionTitle: 'To use grid we define a container as a grid. What is the CSS to do this  ?',
        options: [
            { answerText: 'Display:none', isCorrect: false },
            { answerText: 'Display:grid', isCorrect: true },
            { answerText: 'Display:flex;', isCorrect: false },
            { answerText: 'Display:block', isCorrect: false },
        ],
    },
    {
        questionTitle: 'What are the properties of flexbox ?',
        options: [
            { answerText: 'flex-direction:', isCorrect: false},
            { answerText: 'align-items', isCorrect: false },
            { answerText: 'wrap', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    
];
export default questionCss30