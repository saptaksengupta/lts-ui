import React from 'react';
import styled from 'styled-components';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../styled/CommonUtils';

import styles from '../container/LIstItemDetailsPage/listItem.module.css';
import { DefaultCard } from '../styled/cards';


const StyledListItem = styled(ContainerLayoutRow)`
    position: relative;
`;

const StyledListDetailsCard = styled(DefaultCard)`

`;

const ListItem = () => {
    return (
        <StyledListItem alignment="center">
            <div className={styles.time} >7:00 AM</div>
            <ContainerLayoutColumn className={styles.listDetails} alignment="start">
                <StyledListDetailsCard className={styles.listCardFancyBackground}>
                    <div className={styles.listHeading}>Tech talk With Gigs.</div>
                    {/* <div className={styles.listDescription}>Some description and some extra text which is big</div> */}
                </StyledListDetailsCard>
            </ContainerLayoutColumn>
        </StyledListItem>
    )
}

export default ListItem;