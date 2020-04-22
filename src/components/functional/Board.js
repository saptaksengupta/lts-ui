import React, { useState, useEffect, useContext } from 'react';
import styles from './board.module.css';
import styled from 'styled-components';
import { DefaultCard, Card } from '../styled/cards';
import { ContainerLayoutRow, StraightLine, ContainerLayoutColumn } from '../styled/CommonUtils';
import { GroceriesIcon, EditIcon, AddIcon, CalendarIcon, ClockIcon } from '../styled/Icons';
import { CircularButton } from '../styled/Buttons';
import axios from 'axios';
import { getBaseUrl } from '../../Config';
import { AuthContext } from '../../context/AuthContext';
import { BoardContext } from '../../context/BoardContext';
import { BOARD_ACTIONS } from '../../reducers/BoardReducer';
import { useHistory, Redirect } from 'react-router-dom';
import { APP_BASE_URL } from '../../Config';

const StyledBoardContainer = styled(ContainerLayoutColumn)`
    justify-content: flex-start;
    height:12em;
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
    cursor:pointer;
`;

const StyledBoardInCreateMode = styled(DefaultCard)`
    justify-content: flex-start;    
    height:12em;
    cursor:pointer;
    padding: 0px;
    cursor: default;
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

const StyledCircularAddBtn = styled(CircularButton)`
    height: 2em;
    width: 2em;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Board = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showAddBtn, setShowAddBtn] = useState(false);
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const { dispatch } = useContext(BoardContext);

    const { boardDetails } = props;
    // useEffect(() => {

    // }, []);


    const getFormattedTime = (timestamp) => {
        const d = new Date(timestamp);
        return d.toLocaleTimeString();
    }

    const getFormattedDate = (timestamp) => {
        const d = new Date(timestamp);
        return d.toLocaleDateString();
    }

    const onBoardClicked = (boardId) => {
        history.push(`/board/${boardId}/list`);
    }

    const onRemoveClicked = () => {

    }

    const onBoardAddClicked = (name, description, userId, dispatch) => {
        if (!name || !description) {
            return false;
        }
        const addBoardUrl = `${getBaseUrl()}board`
        axios.post(addBoardUrl, { name, description, userId })
            .then((resp) => {
                const boardAdded = resp.data.data;
                dispatch({ type: BOARD_ACTIONS.SET_BOARD, payload: boardAdded });
                setTitle('');
                setDescription('');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        props.mode === "edit" ?
            <StyledBoards onClick={() => onBoardClicked(boardDetails.id)}>
                <StyledBoardContainer alignment="center">
                    <EditBoardIcon alignment="end">
                        <EditIcon fill="#efefef" height="2em" width="2em" onClick={() => onRemoveClicked(boardDetails.id)} />
                    </EditBoardIcon>
                    <ContainerLayoutRow style={{ flex: '1' }}>
                        <div className={styles.boardIcon}>
                            <StyledDefaultIconCard width="4.7em" height="4.7em">
                                <GroceriesIcon height="3em" width="3em" />
                            </StyledDefaultIconCard>
                        </div>
                        <div style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                            <ContainerLayoutRow className={styles.boardTitle}>
                                {boardDetails ? boardDetails.name : ''}
                            </ContainerLayoutRow>
                            <ContainerLayoutRow className={styles.boardDescription}>
                                {boardDetails ? boardDetails.description : ''}
                            </ContainerLayoutRow>
                        </div>
                    </ContainerLayoutRow>
                    {/* <StraightLine style={{ width: '95%' }} /> */}
                    <ContainerLayoutRow style={{ paddingRight: '2.5em', paddingBottom: '0.7em' }} fullWidth alignment="end">
                        <span style={{ paddingLeft: '3em', fontSize: '0.8em', fontWeight: '900', display: 'flex' }}>
                            <ContainerLayoutRow style={{ margin: '0 1em' }}>
                                <CalendarIcon width="1.3em" fill="#efefef" />
                                <span style={{ marginLeft: '0.3em' }}>{getFormattedDate(boardDetails.created_at)}</span>
                            </ContainerLayoutRow>
                            <ContainerLayoutRow>
                                <ClockIcon width="1.6em" fill="#efefef" />
                                <span style={{ marginLeft: '0.3em' }}> {getFormattedTime(boardDetails.created_at)} </span>
                            </ContainerLayoutRow>
                        </span>
                        {/* <ContainerLayoutRow alignment="end">
                            <StyledAvatars>AD</StyledAvatars>
                            <StyledAvatars>SS</StyledAvatars>
                            <StyledAvatars>MJ</StyledAvatars>
                        </ContainerLayoutRow> */}
                    </ContainerLayoutRow>
                </StyledBoardContainer>
            </StyledBoards>
            :
            <StyledBoardInCreateMode>
                <StyledBoardContainer alignment="center">
                    <ContainerLayoutRow style={{ flex: '1' }}>
                        <div className={styles.boardIcon} style={{ marginTop: '2.5em' }}>
                            <StyledDefaultIconCard width="4.7em" height="4.7em">
                                <AddIcon height="3em" width="3em" />
                            </StyledDefaultIconCard>
                        </div>
                        <div style={{ paddingLeft: '2em', paddingRight: '2em', marginTop: '3em' }}>
                            <ContainerLayoutRow>
                                <input type="text" value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    onBlur={(e) => title && description ? setShowAddBtn(true) : setShowAddBtn(false)}
                                    placeholder="Let's Do Something" className={styles.titleInput} />
                            </ContainerLayoutRow>
                            <ContainerLayoutRow>
                                <input type="text" value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    onBlur={(e) => title && description ? setShowAddBtn(true) : setShowAddBtn(false)}
                                    placeholder="Some Description in short about this board" className={styles.descriptionInput} />
                            </ContainerLayoutRow>
                        </div>
                    </ContainerLayoutRow>
                    {
                        showAddBtn ? (<ContainerLayoutRow alignment="end" style={{ paddingRight: '2em', paddingBottom: '1em' }}>
                            <StyledCircularAddBtn primary onClick={() => onBoardAddClicked(title, description, user.id, dispatch)} >
                                <AddIcon height="1em" width="1em" fill="#efefef" />
                            </StyledCircularAddBtn>
                        </ContainerLayoutRow>) : (<ContainerLayoutRow style={{ minHeight: '4em' }}></ContainerLayoutRow>)
                    }
                </StyledBoardContainer>
            </StyledBoardInCreateMode>
    )
}

export default Board;