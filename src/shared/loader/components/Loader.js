import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../loader.module.css';
import styled from 'styled-components';
import { DefaultCard } from '../../../components/styled/cards';

const LoaderContainer = styled(DefaultCard)`
    box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);
    border-radius: 1em;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`

const Loader = (props) => {
    return (
        ReactDOM.createPortal(
            <React.Fragment>
                <div className={styles.loaderOverlay}>
                    <LoaderContainer>
                        <div>
                            <svg width={props.width} height={props.height} viewBox="0 0 700 704" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="stopwatch">
                                    <path id="Vector" d="M350 0C343.548 0 338.333 5.2448 338.333 11.7333V167.693C338.333 174.181 343.548 179.426 350 179.426C356.452 179.426 361.667 174.181 361.667 167.693V23.6779C536.422 29.8731 676.667 174.78 676.667 352C676.667 533.151 530.122 680.533 350 680.533C169.878 680.533 23.3333 533.151 23.3333 352C23.3333 264.469 57.1667 182.113 118.603 120.102C123.165 115.503 123.142 108.087 118.58 103.511C114.007 98.9589 106.633 98.9589 102.083 103.535C36.2483 169.969 0 258.215 0 352C0 546.093 157.01 704 350 704C542.99 704 700 546.093 700 352C700 157.907 542.99 0 350 0Z" fill="black" />
                                    <path className={styles.indicator} id="indicator" d="M333.145 393.444C340.308 403.359 351.38 409.589 363.525 410.54C364.61 410.633 365.695 410.669 366.768 410.669C377.758 410.669 388.328 406.304 396.156 398.419C404.755 389.772 409.153 377.815 408.208 365.601C407.263 353.387 401.068 342.252 391.186 335.024L240.173 225.165C235.553 221.809 229.148 222.325 225.088 226.385C221.028 230.468 220.526 236.898 223.875 241.556L333.145 393.444ZM377.478 354.02C381.806 357.188 384.525 362.081 384.945 367.443C385.365 372.794 383.428 378.038 379.66 381.84C375.88 385.63 370.571 387.566 365.333 387.155C360.013 386.744 355.148 383.999 352.021 379.681L285.37 287.023L377.478 354.02Z" fill="black" />
                                </g>
                            </svg>
                        </div>
                        {/* <div style={{ marginTop: '1em', fontSize: '0.8em' }}>
                            ! Wait...
                        </div> */}
                    </LoaderContainer>
                </div>
            </React.Fragment>,
            document.querySelector("#loader-root")
        )
    )
}

export default Loader;