import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
const Quiz = () => {
    const quiz = useLoaderData();
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);

    const handleClick = (answer) => {
        if (answer === quiz.data.questions[questionIndex].correctAnswer) {
            setCorrectAnswer(true);
            setTotalCorrectAnswer(totalCorrectAnswer + 1);
            alert('Correct answer');
        } else {
            setCorrectAnswer(false);
            alert('Incorrect answer');
        }
    };

    const seeCorrectAnswer = () => {
        if (correctAnswer) {
            toast(quiz.data.questions[questionIndex].correctAnswer);
        } else {
            alert('No correct answer yet');
        }
    };

    const totalCorrectAnswerCount = () => {

        alert(totalCorrectAnswer)

    };

    return (
        <div className="p-28 flex justify-center ">
            <div className="p-6 bg-sky-500/50  shadow-lg w-90 max-w-lg">
                <p>See correct: {correctAnswer}</p>
                <h2 className="text-center">Quiz: {quiz.data.name}</h2>
                <p className="text-center">Total Questions: {quiz.data.total}</p>
                <p className="text-center mb-2">Total correctAnswer:{totalCorrectAnswer}</p>
                {quiz.data.questions.map((question, questionIndex) => (
                    <div key={question.id} className="text-center bg-cyan-950 text-white p-6 rounded-lg mb-4 ">
                        <h3 className="text-white mb-2">Question: {question.question}</h3>
                        <button className='mb-2 bg-emerald-600' onClick={seeCorrectAnswer}>See correct answer</button>
                        <ul >
                            {question.options.map((option) => (
                                <h3 className='mb-2 hover:bg-lime-600' key={option}>
                                    <button
                                        onClick={() => {
                                            setQuestionIndex(questionIndex);
                                            handleClick(option);
                                        }}
                                    >
                                        {option}
                                    </button>
                                </h3>
                            ))}
                        </ul>

                    </div>
                ))}
                <h1 className='text-center text-2xl hover:bg-lime-600'><button onClick={totalCorrectAnswerCount}>Total Correct-Answer</button></h1>
            </div>
        </div>
    );
};

export default Quiz;
