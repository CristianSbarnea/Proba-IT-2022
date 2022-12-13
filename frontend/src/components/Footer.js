import './styles/Footer.css'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitch from '../assets/twitch.png'

export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return <>
    <div className="footer">
        <footer className="footerElement">
            <a href="https://www.facebook.com/LsacBucuresti/"><img className="footer-img facebook-img"src={facebook}></img></a>
            <a href="https://www.twitch.tv/lsac_bucuresti"><img className="footer-img twitch-img"src={twitch}></img></a>
            <a href="https://www.instagram.com/lsacbucuresti/"><img className="footer-img instagram-img"src={instagram}></img></a>
            <p>Copyright {year} | La muncă, nu la întins mâna.</p>
        </footer>
    </div>
    </>
}