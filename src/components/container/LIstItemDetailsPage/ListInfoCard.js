import React from 'react';
import styled from 'styled-components';
import styles from "./listItem.module.css";
import { DefaultCard } from '../../styled/cards';
const StyledJumbothron = styled(DefaultCard)`
    // margin-top: 2em;
    min-height: 11em;
    color: #efefef;
    width: 100%;
    z-index: 2;
    border-radius: 10px;
    width: auto;
    background: transparent;
`;

const ListInfoCard = () => {
    return (
        <div className={styles.listHeader}>
            <StyledJumbothron>

            </StyledJumbothron>
        </div>
    )
}

export default ListInfoCard;