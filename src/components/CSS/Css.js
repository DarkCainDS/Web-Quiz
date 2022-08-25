const questionCss = [
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

];
export default questionCss