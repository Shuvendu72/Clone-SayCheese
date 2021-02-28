import React, { useState } from 'react'
import BackgroudImg from './BackgroundImg/BackgroudImg';
import styles from './DetailCard.module.scss';

function DetailCard({ list, ...rest }) {
    const [imgsrc, setimgsrc] = useState(list[0].backimgSrc)
    const sectionStyle = {
        width: "100%",
        height: "110vh",
        backgroundImage: `url(${imgsrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        //   backgroundColor: "red"
    };
    console.log(list)
    return (
        <div style={sectionStyle}>
            <div className={styles.DetailCard}>
                {list.map((item) => {
                    const active = item.backimgSrc == imgsrc
                    return (
                        <div className={`${styles.card} ${active && (styles.active)}`} key={item.id} onClick={() => setimgsrc(item.backimgSrc)} >
                            <h1 key={item.id}>{item.heading}</h1>
                            <img src={item.imgSrc} />
                            <p key={item.id}>{item.intro}</p>
                        </div>
                    )
                }
                )}
                {/* {imgsrc&&(<BackgroudImg backimgSrc= {imgsrc} />)} */}

            </div>
        </div>
    )
}

export default DetailCard;
