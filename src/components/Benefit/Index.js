
import styles from './Index.module.scss';
import img1 from '../../assets/img/avatar1.webp';
import img2 from '../../assets/img/avatar2.webp';
import img3 from '../../assets/img/avatar3.webp';
import img4 from '../../assets/img/avatar4.webp';
import backImg1 from '../../assets/img/career-woman.webp';
import backImg2 from '../../assets/img/homepreneur.webp';
import backImg3 from '../../assets/img/homemaker.webp';
import backImg4 from '../../assets/img/student.webp';
import DetailCard from './UI/DetailCard';

function Benefit() {
    const benefitDetail = [
        { 
            id: 1, alt: "image", className: '', imgSrc: img1,backimgSrc: backImg1,
            heading: "Career-women", intro: "Glass ceiling Discrimination"
        },
        { 
            id: 2, alt: "image", className: '', imgSrc: img2,imgSrc: img1,backimgSrc: backImg2,
            heading: "Homepreneur", intro: "Business expansion Brand visibility"
        },
        { 
            id: 3, alt: "image", className: '', imgSrc: img3,imgSrc: img1,backimgSrc: backImg3,
            heading: "Homemaker", intro: "Finacial dependence"
        },
        { 
            id: 4, alt: "image", className: '', imgSrc: img4,imgSrc: img1,backimgSrc: backImg4,
            heading: "Student", intro: "Carreer planning Loneliness"
        },
    ]
    return (
        <div className={styles.wrapper}>
            <h1>Who can benefit?</h1>
            <DetailCard list={benefitDetail} />
        </div>
    )
}

export default Benefit;
