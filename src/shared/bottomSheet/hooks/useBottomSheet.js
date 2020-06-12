import React, { useState, useContext, Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from '../bottomSheet.module.css'

const useBottomSheet = () => {

    const [show, setShow] = useState(false);

    const toggleBottomSheet = () => {
        setShow(!show)
    }

    const BottomSheet = (props) => {
        return ReactDOM.createPortal(
            <Fragment>
                <div>
                    {show && (
                        <div className={styles.bottomSheetContainer} onClick={(e) => { toggleBottomSheet()} }>
                            <div onClick={(e) => e.stopPropagation()} className={styles.bottomSheet}>
                                {props.children}
                            </div>
                        </div>
                    )}
                </div>
            </Fragment>,
            document.querySelector('#bottom-sheet-root')
        )
    }


    return [BottomSheet, toggleBottomSheet]

}

export { useBottomSheet };