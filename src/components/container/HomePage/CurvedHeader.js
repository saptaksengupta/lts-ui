import React from 'react';
import styles from './homePage.module.css';

const CurvedHeader = () => {
    return (
        <div className={styles.curvedHeader}>
            <div className={styles.title}>
                <h1>Hello,There</h1>
                <h1>Welcome</h1>    
            </div>   
        </div>
    )
}

export default CurvedHeader;