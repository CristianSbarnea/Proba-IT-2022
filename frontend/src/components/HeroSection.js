import React from "react";
import './styles/HeroSection.css'
import whysosalty from '../assets/whysosalty.png'

export default function HeroSection() {
    return <>

        <div className="heroSection">
            <div className="heroSection_box">
                <div className="heroSection_box_left">
                    <h1 className="mainTextHeroSection">
                        Partajarea de meme-uri nu<br></br> a fost niciodată mai simplă!
                    </h1>
                    <p className="paragraphHeroSection">
                        Platforma ideală pentru studenții de la Politehnică,<br></br>
                        amuzați de câte materii o să pice semestrul asta.
                    </p>
                    <button className="btn-hero-section">
                        Upload a MEME
                    </button>
                </div>
                <div className="heroSection_box_right">
                    <img className="whysosalty" src={whysosalty} alt="Why so salty"></img>
                </div>
            </div>  
        </div>

    </>
}