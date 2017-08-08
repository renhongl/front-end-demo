

import React from 'react';
import '../style.css';

export default ({ carouselList }) => {
    return (
        <div className="wrap">
            <section className="switch">
                <span className="top"></span>
                {
                    carouselList.map((v, k) => {
                        return (
                            <span key={k} className="btn" className={"btn-" + (k + 1) + " btn"}></span>
                        )
                    })
                }
                <section className="content">
                    {
                        carouselList.map((v, k) => {
                            return (    
                                <img key={k} src={v.src} alt="game-image" className={v.className}/>
                            )
                        })
                    }
                </section>
            </section>
        </div>
    )
}