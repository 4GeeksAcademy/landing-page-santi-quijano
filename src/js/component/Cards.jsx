import React from "react";
import React from "react";
import React from "./Card";

const Cards = () => {
    let cardInfo = [
        { title: "Card title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!" },
        { title: "Card title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!" },
        { title: "Card title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!" },
        { title: "Card title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!" }
    ];
    return (
        <div className="row  mt-3 mb-3">
            {cardInfo.map((item, i) => {
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Cards key={i} title={item.title} text={item.text} />
                    </div>
});
            }
        </div>
    );
};
export default Cards;