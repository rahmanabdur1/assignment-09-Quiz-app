import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { id, name, logo, total } = data;

    return (
        <div className="card w-96 shadow-xl">
            <figure>
                <img src={logo} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total: {total}</p>
                <div className="card-actions justify-end">
                    <Link to={`/quiz/${id}`}>
                        <button className="btn btn-primary text-white">Show All Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
