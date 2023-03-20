import { Image } from "react-native-web";

const Footer = () => {
    return(
        <div className="footer">
                <div className="foot-name-school">Saka Labschool</div>
                <div className="foot-alamat-school">Jl. Jangari KM. 13, Ds. Sukajadi, Kec. Karangtengah, Kab. Cianjur</div>
                <div className="footer-text">
                    <div className="flex-foot">
                        <div className="icon-yt"></div>    
                        <a href="https://www.youtube.com/@sakalabschooltv1637">SAKA LABSCHOOL TV </a>
                        <div className="icon-ig"></div>
                        <div className="foot-ig-school">@smkn1karangtengah.labschool</div>
                        <div className="foot-web-school" ><a href="smkn1karangtengah.sch.id">smkn1karangtengah.sch.id</a></div>
                    </div>
                </div>
        </div>
    );
};
export default Footer