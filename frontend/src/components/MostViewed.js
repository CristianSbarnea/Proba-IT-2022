import './styles/MostViewed.css'
import meme1 from '../assets/meme1.png'
import meme2 from '../assets/meme2.png'
import meme3 from '../assets/meme3.png'

export default function MostViewed() {
    return <>
        <div className="mostViewed">
            <div className="MostViewed_box">
                <div className="MostViewed_box_text">
                    <h1 className="main-text-MostViewed">
                        Most Viewed
                    </h1>

                </div>
                <div className="MostViewed_box_photos">
                    <img className="meme-img" src = {meme1}></img>
                    <img className="meme-img" src = {meme2}></img>
                    <img className="meme-img" src = {meme3}></img>
                </div>
            </div>
        </div>

    </>
}