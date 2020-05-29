import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import styles from "./listItem.module.css";
import { DefaultCard } from '../../styled/cards';
import { ContainerLayoutRow, ContainerLayoutColumn, StyledAvatar } from '../../styled/CommonUtils';
import { LeftArrow, CalendarIcon, TimeIcon, TickIcon, ClockIcon, GroceriesIcon } from '../../styled/Icons';

const StyledSmallAvatar = styled(StyledAvatar)`
    height: 1.5em;
    min-width: 1.6em;
    font-size: 1.5em;
    margin:0;
    padding: 3px 3px;
    font-weight: bold;
`;

export const StyledJumbothronListPage = styled.div`
    // margin-top: 2em;
    min-height: 10em;
    color: #efefef;
    width: 100%;
    z-index: 2;
    border-radius: 10px;
    width: auto;
    background: transparent;
    padding: 0.6em 0 0.6em 0.6em;
`;

const ListInfoCard = (props) => {

    const history = useHistory()
    const { boardDetails } = props

    const onBackArrowClicked = () => [
        history.goBack()
    ]


    return (
        <div className={styles.listHeader}>
            <StyledJumbothronListPage>
                <ContainerLayoutColumn style={{ minHeight: '10em', paddingBottom: '0.6em' }}>
                    <ContainerLayoutRow style={{ flex: '1', alignItems: "flex-start", zIndex:'10' }}>
                        <ContainerLayoutRow align="start" style={{ alignItems: 'center' }}>
                            <div style={{ cursor: 'pointer' }} onClick={() => onBackArrowClicked()}>
                                <LeftArrow width="1.8em" height="1.8em" fill="#efefef" />
                            </div>
                            <span style={{ marginLeft: '0.2em', fontSize: '1.4em', fontWeight: 'bold', marginBottom: '6px' }}>{boardDetails.name}</span>
                        </ContainerLayoutRow>
                    </ContainerLayoutRow>
                    <ContainerLayoutRow style={{ alignItems: 'flex-end', marginTop:'-50px' }}>
                        <ContainerLayoutRow style={{ alignItems: "center" }}>
                            <CalendarIcon width="4em" height="4em" fill="#efefef" ></CalendarIcon>
                            <ContainerLayoutColumn >
                                <div style={{ marginLeft: '0.4em', fontSize: '1em' }}>05:12 PM</div>
                                <div>
                                    <div style={{ marginLeft: '0.4em', fontSize: '1em', textAlign: "start" }}>Monday</div>
                                    <div style={{ marginLeft: '0.8em', marginTop: "0.2em", fontSize: '0.8em' }}>May 23, 2020</div>
                                </div>
                            </ContainerLayoutColumn>
                        </ContainerLayoutRow>
                        <ContainerLayoutRow alignment="end" style={{overflow: 'hidden'}}>
                            <GroceriesIcon height="15em" fill="#efefef" style={{marginRight: '-70px'}} />
                        </ContainerLayoutRow>
                    </ContainerLayoutRow>
                </ContainerLayoutColumn>
                {/* <ContainerLayoutRow alignment="center" style={{ paddingTop: '0.5em' }}>
                    <ContainerLayoutRow alignment="end" style={{ marginRight: '1em', alignItems: 'center' }}>
                        <TickIcon width="1em" fill="#efefef" height="1em" />
                        <span style={{ marginLeft: '0.3em' }}>12</span>
                    </ContainerLayoutRow>
                    <ContainerLayoutRow style={{ alignItems: 'center', marginLeft: '1em' }}>
                        <ClockIcon width="1em" fill="#efefef" height="1em" style={{ marginTop: '3px' }} />
                        <span style={{ marginLeft: '0.3em' }}>12</span>
                    </ContainerLayoutRow>
                </ContainerLayoutRow> */}
            </StyledJumbothronListPage>
        </div>
    )
}

export default ListInfoCard;