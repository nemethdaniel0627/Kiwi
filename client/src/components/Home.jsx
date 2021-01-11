import React from 'react';

export default function Home() {
    return (
        <div>
            <div className="home--container">
                <h2 className="home--h2">
                    THE BEST PRODUCTS FOR THE BEST PRICES
                </h2>
                <h1 className="home--h1">
                    MEET <span className="small-h1">THE</span> NEW <span className="Amatic">Kiwi PRO</span>
                </h1>
            </div>
            {/* <div className="home--phone-container">
            </div> */}
            <img className="home--phone" src="img/phone_hand.png" alt="Phone" />
        </div>
    );
}