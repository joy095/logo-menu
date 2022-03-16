import React from "react";
import Right_card_data from "./Data/Righrt_card_data";




function Right_card() {
    return (

        <div className="Right-Card">
            <div id="empty"></div>
            <div id="first_container">
                <div id="first_card">
                    <p id="para">Contacts</p>
                    <div className="empty2"></div>    
                </div>
                <div id="left">
                <div id="camera"><img src="./img/right/camera.svg" className="contact_hover" /></div>
                <div id="small_search"><img src="./img/right/search.svg" className="contact_hover" /></div>
                <div id="dot"><img src="./img/right/three_dot.svg" className="contact_hover" /></div>
                </div>
            </div>
            
                <Card ImgSrc={Right_card_data[0].ImgSrc}
                Title={Right_card_data[0].Title} />

                <Card ImgSrc={Right_card_data[1].ImgSrc}
                Title={Right_card_data[1].Title} />

                <Card ImgSrc={Right_card_data[2].ImgSrc}
                Title={Right_card_data[2].Title} />

        </div>

    );
};


function Card(props) {
    return (
        <div className="container">
            <div className="all-containers">
            <div id="contact"></div>
                <div id="online_logo"></div>
                <img src={props.ImgSrc} className="logo-names_right" />
            </div>
            <div className="names">
                <p className="p-names">{props.Title}</p>
            </div>
        </div>
    );
};



export default Right_card;