import React from 'react';
import styled from 'styled-components';
import styles from "./listItem.module.css";
import { DefaultCard } from '../../styled/cards';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../../styled/CommonUtils';
import { LeftArrow, CalendarIcon, TimeIcon, TickIcon, ClockIcon } from '../../styled/Icons';

import { StyledAvatar } from '../TaskDetailsPage/NavigationBar';

const StyledSmallAvatar = styled(StyledAvatar)`
    height: 1.5em;
    min-width: 1.6em;
    font-size: 1.5em;
    margin:0;
    padding: 3px 3px;
    font-weight: bold;
`;

const StyledJumbothron = styled(DefaultCard)`
    // margin-top: 2em;
    min-height: 10em;
    color: #efefef;
    width: 100%;
    z-index: 2;
    border-radius: 10px;
    width: auto;
    background: transparent;
    padding: 0.6em;
`;

const ListInfoCard = () => {
    return (
        <div className={styles.listHeader}>
            <StyledJumbothron>
                <ContainerLayoutColumn style={{ minHeight: '10em', borderBottom: '1px solid #efefef', paddingBottom: '0.6em' }}>
                    <ContainerLayoutRow style={{ flex: '1', alignItems: "flex-start" }}>
                        <ContainerLayoutRow align="start" style={{ alignItems: 'center' }}>
                            <div>
                                <LeftArrow width="1.8em" height="1.8em" fill="#efefef" />
                            </div>
                            <span style={{ marginLeft: '0.2em', fontSize: '2em', fontWeight: 'bold', marginBottom: '6px' }}>Grocery Store</span>
                        </ContainerLayoutRow>
                        <ContainerLayoutRow style={{ flex: '1' }} alignment="end">
                            <StyledSmallAvatar width="1.5em" height="1.5em" fill="#efefef" >ss</StyledSmallAvatar>
                        </ContainerLayoutRow>
                    </ContainerLayoutRow>
                    <ContainerLayoutRow style={{ alignItems: 'flex-end' }}>
                        <ContainerLayoutRow style={{ alignItems: "center" }}>
                            {/* <TimeIcon width="2.5em" height="2.5em" fill="#efefef" ></TimeIcon> */}
                            <div style={{ marginLeft: '0.4em', fontSize: '1.5em' }}>05:12 PM</div>
                        </ContainerLayoutRow>
                        <ContainerLayoutRow style={{ alignItems: "center" }} alignment="end">
                            <CalendarIcon width="2.5em" height="2.5em" fill="#efefef" ></CalendarIcon>
                            <div>
                                <div style={{ marginLeft: '0.4em', fontSize: '1.3em', textAlign: "start" }}>Monday</div>
                                <div style={{ marginLeft: '0.8em', marginTop: "0.2em", fontSize: '0.7em' }}>May 23, 2020</div>
                            </div>
                        </ContainerLayoutRow>
                    </ContainerLayoutRow>
                </ContainerLayoutColumn>
                <ContainerLayoutRow alignment="center" style={{paddingTop: '0.5em'}}>
                    <ContainerLayoutRow alignment="end" style={{marginRight: '1em', alignItems: 'center'}}>
                        <TickIcon width="1em" fill="#efefef" height="1em" />
                        <span style={{marginLeft: '0.3em'}}>12</span>
                    </ContainerLayoutRow>
                    <ContainerLayoutRow style={{alignItems: 'center', marginLeft: '1em'}}>
                        <ClockIcon width="1em" fill="#efefef" height="1em" style={{marginTop: '3px'}} />
                        <span style={{marginLeft: '0.3em'}}>12</span>
                    </ContainerLayoutRow>
                </ContainerLayoutRow>
            </StyledJumbothron>
        </div>
    )
}

export default ListInfoCard;