import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers'

const Results = ({loadNewQuestion, allAnswers, allQuestions, onLoadResults, correctAnswers}) => {
    return (
        <div className={`results fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
            <div className="loader"><div className="icon"></div></div>
            <div className="results-overlay"></div>
            <h1>Oto twoje odpowiedzi:</h1>
            <div className="answers">
                <Answers
                    allAnswers={allAnswers}
                    allQuestions={allQuestions}
                    correctAnswers={correctAnswers}
                />
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-dark" onClick={(e) => {
                    onLoadResults();
                }}>Zatwierdź</button>
            </div>
        </div>
    );
};

Results.propTypes = {
    loadNewQuestion: PropTypes.bool.isRequired,
    allAnswers: PropTypes.array.isRequired,
    allQuestions: PropTypes.array.isRequired,
    onLoadResults: PropTypes.func.isRequired,
    correctAnswers: PropTypes.array,
};

export default Results;