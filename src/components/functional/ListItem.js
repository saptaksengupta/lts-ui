import React from 'react';
import styled from 'styled-components';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../styled/CommonUtils';

import styles from '../container/LIstItemDetailsPage/listItem.module.css';
import { DefaultCard } from '../styled/cards';
import { TickIcon, TrashIcon } from '../styled/Icons';


const StyledListItem = styled(ContainerLayoutRow)`
    position: relative;
`;

const StyledListDetailsCard = styled(DefaultCard)`
    width: 22em;
`;

const ListItem = () => {
    return (
        <StyledListItem alignment="center">
            <div className={styles.time} >7:00 AM</div>
            <ContainerLayoutColumn className={styles.listDetails} alignment="start">
                <StyledListDetailsCard className={styles.listCardFancyBackground}>
                    <ContainerLayoutRow>
                        <div className={styles.listHeading}>Tech talk With Gigs.</div>
                        {/* <div className={styles.listDescription}>Some description and some extra text which is big</div> */}
                        <div className={styles.listActions}>
                            <TickIcon width="1em" fill="#efefef" height="1em" />
                            <TrashIcon width="1em" fill="#efefef" height="1em" />
                        </div>
                    </ContainerLayoutRow>
                </StyledListDetailsCard>
            </ContainerLayoutColumn>
        </StyledListItem>
    )
}

export default ListItem;