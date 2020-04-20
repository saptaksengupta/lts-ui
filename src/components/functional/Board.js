import React from 'react';
import styles from './board.module.css';
import styled from 'styled-components';
import { DefaultCard, Card } from '../styled/cards';
import { ContainerLayoutRow, StraightLine, ContainerLayoutColumn } from '../styled/CommonUtils';
import { GroceriesIcon, EditIcon } from '../styled/Icons';

const StyledBoardContainer = styled(ContainerLayoutColumn)`
    justify-content: flex-start;
    height:12em;
    cursor:pointer;
`;

const StyledDefaultIconCard = styled(DefaultCard)`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const StyledBoards = styled(Card)`
    min-height: 6em;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
    padding:0px;
`;

const StyledAvatars = styled.div`
    font-weight: bold;
    border-radius: 50%;
    color: #182848;
    background: #757F9A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #D7DDE8, #757F9A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #D7DDE8, #757F9A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */     
    width: 30px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 1em;
    margin: 0 0 0 0.1em;
    font-size: 0.8em;
    font-weight: 400;
    border-right: 1px solid #182848;
`;

const EditBoardIcon = styled(ContainerLayoutRow)`
    padding-top: 1em;
    padding-right: 2em;
`;



const Board = (props) => {
    return (
        <StyledBoards>
            <StyledBoardContainer alignment="center">
                <EditBoardIcon alignment="end">
                    <EditIcon fill="#efefef" height="2em" width="2em" />
                </EditBoardIcon>
                <ContainerLayoutRow style={{ flex: '1' }}>
                    <div className={styles.boardIcon}>
                        <StyledDefaultIconCard width="4.7em" height="4.7em">
                            <GroceriesIcon height="3em" width="3em" />
                        </StyledDefaultIconCard>
                    </div>
                    <div style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                        <ContainerLayoutRow className={styles.boardTitle}>
                            {props.boardDetails ? props.boardDetails.title : ''}
                        </ContainerLayoutRow>
                        <ContainerLayoutRow className={styles.boardDescription}>
                            {props.boardDetails ? props.boardDetails.description : ''}
                        </ContainerLayoutRow>
                    </div>
                </ContainerLayoutRow>
                <StraightLine style={{ width: '95%' }} />
                <ContainerLayoutRow style={{ paddingRight: '2.5em', paddingBottom: '0.7em'}} fullWidth alignment="end">
                    <StyledAvatars>AD</StyledAvatars>
                    <StyledAvatars>SS</StyledAvatars>
                    <StyledAvatars>MJ</StyledAvatars>
                </ContainerLayoutRow>
            </StyledBoardContainer>
        </StyledBoards>
    )
}

export default Board;