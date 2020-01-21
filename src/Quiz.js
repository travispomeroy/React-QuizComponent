import React, {Component} from "react";
let quizData = require("./quiz_data.json");
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    render() {
        const isQuizEnded = (this.state.quiz_position - 1) === quizData.quiz_questions.length;
        return (
            <div>
                {
                    isQuizEnded ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                }
            </div>
        )
    }
}

export default Quiz;