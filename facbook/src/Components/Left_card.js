import React from "react";
import Left_card_data from "./Data/Left_card_data";




function Left_card(props) {
    return (
        <div className="left-card">
            <div className="empty"></div>
            <Card ImgSrc={Left_card_data[0].ImgSrc}
                Title={Left_card_data[0].Title} />

            <Card ImgSrc={Left_card_data[1].ImgSrc}
                Title={Left_card_data[1].Title} />

            <Card ImgSrc={Left_card_data[2].ImgSrc}
                Title={Left_card_data[2].Title} />

            <Card ImgSrc={Left_card_data[3].ImgSrc}
                Title={Left_card_data[3].Title} />

            <Card ImgSrc={Left_card_data[4].ImgSrc}
                Title={Left_card_data[4].Title} />

            <Card ImgSrc={Left_card_data[5].ImgSrc}
                Title={Left_card_data[5].Title} />

        </div>
    );
};





function Card(props) {
    return (
        <div className="container">
            <div className="all-containers">
                <img src={props.ImgSrc} className="logo-names" />
            </div>
            <div className="names">
                <p className="p-names">{props.Title}</p>
            </div>
        </div>
    );
};

export default Left_card;