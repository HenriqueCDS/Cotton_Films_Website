import img from "../../assets/imageBanner.png";
import "./imageBanner.css";
export default function ImageBanner(params) {
    return(
      
            <section className="image-banner">
                <img src={img} />
            </section>
      
    )
}