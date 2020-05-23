import React, { Fragment, useContext, useEffect, Suspense, useState } from 'react';
import axios from 'axios';
import ListInfoCard from './ListInfoCard';
import styled from 'styled-components';
import { ContainerLayoutRow, ContainerLayoutColumn } from '../../styled/CommonUtils';
import ListContainer from './ListContainer';
import { getBaseUrl } from '../../../Config';
import { Card } from '../../styled/cards';
import { AddIcon, TrashIcon } from '../../styled/Icons';

import AuthContextProvider, { AuthContext } from '../../../context/AuthContext';
import ListContextProvider, { ListContext } from '../../../context/ListItemContext';
import { LIST_ACTIONS } from '../../../reducers/ListReducer';
import BoardContextProvider from '../../../context/BoardContext';

const StyledListPageContainer = styled.div`   
    // margin: -2em;
    // width: 100%;
`;

const ListItemPage = (props) => {

    const { authState } = useContext(AuthContext);
    const { boardId } = props.match.params;
    const [listItems, setListItems] = useState([]);
    const [boardDetails, setBoardDetails] = useState(null);

    useEffect(() => {
        axios.get(`${getBaseUrl()}boards/${boardId}`, { params: { userId: authState.user.id } })
            .then(resp => {
                setBoardDetails(resp.data.data.board);
                setListItems(resp.data.data.board.listItems);
            }).catch((err) => {
                console.log(err);
            })
    }, [boardId])

    return (
        <Fragment>
            <AuthContextProvider>
                <BoardContextProvider>
                    <StyledListPageContainer>
                        <ListInfoCard />
                    </StyledListPageContainer>
                </BoardContextProvider>
            </AuthContextProvider>
            <ListContextProvider>
                <ListContainer listItems={listItems} currentBoard={boardDetails} />
            </ListContextProvider>
        </Fragment>
    )
}

export default ListItemPage;