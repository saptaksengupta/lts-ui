import React from 'react';
import styled from 'styled-components';
import styles from "./listItem.module.css";
import { DefaultCard } from '../../styled/cards';
const StyledJumbothron = styled(DefaultCard)`
    margin-top: 2em;
    min-height: 13em;
    color: #efefef;
`;

const ListInfoCard = () => {
    return (
        <StyledJumbothron className={styles.backGroundSvg} >
            
        </StyledJumbothron>
    )
}

export default ListInfoCard;