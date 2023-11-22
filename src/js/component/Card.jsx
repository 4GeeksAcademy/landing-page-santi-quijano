import React from "react";

const Card = (props) => {
    return (
        <div>
            <div className="card text-center mb-3" style={{ maxWidth: "20rem" }}>
                <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <div className="card-footer text-center">
                        <a href="#" className="btn btn-primary border border-dark">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;