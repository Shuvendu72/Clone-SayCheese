import React from 'react'
import styles from './CheeseSlickCont.module.scss'
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/4.png'
import img5 from '../../assets/img/5.png'
import img6 from '../../assets/img/6.jpg'
import img7 from '../../assets/img/7.png'
import img8 from '../../assets/img/8.png'
import CheeseSlick from './CheeseSlick'
function CheeseSlickCont() {

    const CheeseItem = [
        { id: 1, alt: "image", imgSrc: img1, component: 'CheeseImage'},
        { id: 2, alt: "image", imgSrc: img2, component: 'CheeseImage'},
        { id: 3, alt: "image", imgSrc: img3, component: 'CheeseImage'},
        { id: 4, alt: "image", imgSrc: img4, component: 'CheeseImage'},
        { id: 5, alt: "image", imgSrc: img5, component: 'CheeseImage'},
        { id: 6, alt: "image", imgSrc: img6, component: 'CheeseImage'},
        { id: 7, alt: "image", imgSrc: img7, component: 'CheeseImage'},
        { id: 8, alt: "image", imgSrc: img8, component: 'CheeseImage'},
    ]
    return (
        <div className="cheeseSlick-container">
            <CheeseSlick Items={CheeseItem} />
        </div>
    )
}

export default CheeseSlickCont;
