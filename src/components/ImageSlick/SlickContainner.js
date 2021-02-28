import ImageSlick from './ImageSlick';
// import Slider from "react-slick";
import img1 from "../../assets/img/homebanner.webp";
import img2 from "../../assets/img/banner2.webp";
import img3 from "../../assets/img/banner3.webp";
import img4 from "../../assets/img/banner4.webp";
import img5 from "../../assets/img/iwd.webp";
import img6 from "../../assets/img/HER.webp";

function SlickContainner() {
    const slickList = [
        { 
            id: 1, alt: "image", component: 'SlickImage', className: 'slick-image', imgSrc: img1,
            button: "Book Now"
        },
        {
            id: 1, alt: "image", component: 'ContentImage', className: 'slick-image', imgSrc: img3,
            heading: "Are you happy with your carreer?", subHeading: "Say cheese offers personalized solutions to build a fulfilling carreer", button: "Register Now"
        },
        { 
            id: 1, alt: "image", component: 'ContentImage', className: 'slick-image', imgSrc: img4,
            heading: "Are your relationships harmonious?", subHeading: "join our community and cherish trusteed relationships.", button: "Register Now"
        },
        {
            id: 1, alt: "image", component: 'ContentImage', className: 'slick-image', imgSrc: img2,
            heading: "How your physical, mentel and emotional Health?", subHeading: "We offer a holistic and balanced approach.", button: "Register Now"
        },
        {
             id: 1, alt: "image", component: 'ContentImage', className: 'slick-image', imgSrc: img6,
             heading: "Let HER do the talking", subHeading: "Start your journey with the Happeness Evaluation Report (HER) assessment.", button: " Take Assessment" 
        },
        {
             id: 1, alt: "image", component: 'ContentImage', className: 'slick-image', imgSrc: img5,
             heading: "Invest in Yourself: Transform into Unstoppable Woman", subHeading: "Inspire | Network | Evalve", button: "Book Now" 
        },

    ]
    return (
        <div className="slick-container">
            <ImageSlick list={slickList} />
        </div>
    )
}

export default SlickContainner;
