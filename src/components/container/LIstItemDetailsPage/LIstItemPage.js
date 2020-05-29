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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`${getBaseUrl()}boards/${boardId}`, { params: { userId: authState.user.id } })
            .then(resp => {
                setBoardDetails(resp.data.data.board);
                setListItems(resp.data.data.board.listItems);
                setIsLoading(false)
            }).catch((err) => {
                console.log(err);
            })
    }, [boardId])

    return (
        isLoading ? 'loading...' : (<Fragment>
            <ContainerLayoutColumn style={{minHeight: "100%", justifyContent: "flex-start"}}>
                <AuthContextProvider>
                    <BoardContextProvider>
                        <StyledListPageContainer>
                            <ListInfoCard boardDetails={boardDetails} />
                        </StyledListPageContainer>
                    </BoardContextProvider>
                </AuthContextProvider>
                <ListContextProvider>
                    <ListContainer listItems={listItems} currentBoard={boardDetails} />
                </ListContextProvider>
            </ContainerLayoutColumn>
        </Fragment>)

    )
}

export default ListItemPage;