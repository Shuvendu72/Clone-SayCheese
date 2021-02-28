import React from 'react';
import styles from './BackgroundImg.module.scss';

function BackgroudImg({backimgSrc}) {
    // console.log(backimgSrc)
    var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${backimgSrc})`
};
    return (
        <div className={styles.image} style={sectionStyle}>
           {/* <img src={backimgSrc} /> */}
        </div>
    )
}

export default BackgroudImg;
