import React from "react";
import Card from './Card'

const Cards = () => {
    let data = [
        { title: "Card title", text: "Lorem ipsum dolor sit." },
        { title: "Card title", text: "Lorem ipsum dolor sit." },
        { title: "Card title", text: "Lorem ipsum dolor sit." },
        { title: "Card title", text: "Lorem ipsum dolor sit." }
    ];
    return (
        <div className="row  mt-3 mb-3">
            {data.map((item, i) => {
                return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card key={i} title={item.title} text={item.text} />
                    </div>
                )

            })}
        </div>
    )
};

export default Cards;