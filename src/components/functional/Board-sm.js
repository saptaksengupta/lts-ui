import React from 'react';

import styles from '../container/TaskDetailsPage/taskDetails.module.css';
import styled from 'styled-components';

import { Card, DefaultCard } from '../styled/cards';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../styled/CommonUtils';
import { GroceriesIcon } from '../styled/Icons';
import { useHistory } from 'react-router-dom';

import useDraggable from '../../shared/dragAndDrop/hooks/useDraggable';

const StyledBoards = styled(DefaultCard)`
    min-width: 22em;
    max-width: 22em;
    height: 28em;
    // background: #4b6cb7;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    // background: linear-gradient(to left, #182848, #4b6cb7);
    padding:0px;
    cursor:pointer;
    margin-left: 2em;
    box-shadow: none;
    border-radius: 20px;
`;

const StyledCardHeader = styled(ContainerLayoutRow)`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: flex-start;
`;

const StyledDescContainer = styled.div`
    margin-left: 1em;
    margin-top: 2em;
    font-weight: 400;
    max-width: 100%;
    color: gray;
`;

const BoardSm = (props) => {

    const [Draggable] = useDraggable();
    const history = useHistory();
    const { boardDetails } = props;
    const onBoardClicked = () => {
        history.push(`/boards/${boardDetails.id}/lists`);
    }
    
    const handleDragStart = () => {
        console.log('From board, Drag start');
    }

    const handleDragEnd = () => {
        console.log('From Board, drag End');
    }

    return (
        <React.Fragment>
            <StyledBoards
                className={styles.styledBoardCards}
                style={{ "--animation-order": props.itemIndex }}
                onClick={() => onBoardClicked()}>
                <Draggable style={{height: '100%'}} handleDragStart={() => handleDragStart()} handleDragEnd={() => handleDragEnd()} >
                    <StyledCardHeader className={styles.curvedCardBg}>
                        <ContainerLayoutRow style={{ padding: '1em', fontSize: '1.6em' }}>
                            {boardDetails.name}
                        </ContainerLayoutRow>
                        <ContainerLayoutRow alignment="end" style={{ paddingTop: '1em' }}>
                            <GroceriesIcon width='11em' height='11em' fill="#efefef"></GroceriesIcon>
                        </ContainerLayoutRow>
                    </StyledCardHeader>
                    <div style={{ height: '33%' }}>
                        <StyledDescContainer>
                            {boardDetails.description}
                        </StyledDescContainer>
                    </div>
                </Draggable>
            </StyledBoards>
        </React.Fragment>
    )
}

export default BoardSm;