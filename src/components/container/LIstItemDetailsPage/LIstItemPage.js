import React, { Fragment } from 'react';
import NavigationHeader from './NavigationHeader';
import ListInfoCard from './ListInfoCard';
import styled from 'styled-components';
import ListItem from '../../functional/ListItem';

import { ContainerLayoutRow, ContainerLayoutColumn } from '../../styled/CommonUtils';

const StyledListPageContainer = styled.div`   
    margin: 1em;
`;

const ListItemPage = () => {
    return (
        <StyledListPageContainer>
            <ListInfoCard />
            <div style={{ marginTop: '5em', marginLeft: '5em', }}>
                <ContainerLayoutRow>
                    <ContainerLayoutColumn style={{flex: 1}} alignment="center">
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </ContainerLayoutColumn>
                    <ContainerLayoutColumn style={{flex: 1}} alignment="center">
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </ContainerLayoutColumn>
                </ContainerLayoutRow>
            </div>
        </StyledListPageContainer>
    )
}

export default ListItemPage;