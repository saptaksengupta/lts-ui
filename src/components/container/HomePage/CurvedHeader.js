import React from 'react';
import styles from './homePage.module.css';

const CurvedHeader = () => {

    const bgImage = require('../../../images/undraw_completed.svg')

    return (
        <div className={styles.curvedHeader}>
            <div className={styles.title} style={{flex: 1}}>
                {/* Hello, Dude */}
            </div>  
            <div className={styles.imageContainer} style={{flex: 2}}>
                <img src={bgImage} height="550"></img>
            </div>
        </div>
    )
}

export default CurvedHeader;