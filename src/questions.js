const questions = [
    {
        id: 1,
        text: "Which of the following is the capital city of France?",
        answers: [
            { id: "1-1", text: "Brugges", isRight: false },
            { id: "1-2", text: "Saint Germain", isRight: false },
            { id: "1-3", text: "Paris", isRight: true },
            { id: "1-4", text: "Maryland", isRight: false },
        ]
    },
    {
        id: 2,
        text: "Which of the following was created by Facebook team?",
        answers: [
            { id: "2-1", text: "Ember.js", isRight: false },
            { id: "2-2", text: "React.js", isRight: true },
            { id: "2-3", text: "Vuje.js", isRight: false },
            { id: "2-4", text: "Angular", isRight: false },
        ]
    },
    {
        id: 3,
        text: "Which of the following is transparent ?",
        answers: [
            { id: "3-1", text: "Snow", isRight: false },
            { id: "3-2", text: "Fanta", isRight: false },
            { id: "3-3", text: "Coca-Cola", isRight: false },
            { id: "3-4", text: "Water", isRight: true },
        ]
    },
]

export default questions;