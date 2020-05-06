import React, {useContext} from 'react';
import { ContainerLayoutRow, DefaultContainerLayout, ContainerLayoutColumn } from '../../styled/CommonUtils';
import { Card } from '../../styled/cards';
import styled from 'styled-components';
import {AuthContext} from '../../../context/AuthContext';

const StyledNavidationBar = styled(Card)`
    width: 100%;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
    min-height: 200px;
    border-radius: 10px;
`;

export const StyledAvatar = styled.div`
    height: 150px;
    min-width: 150px;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: yellow;
    padding: 0px;
    color: #efefef;
    font-size: 5em;
    border-radius: 50%;
    font-weight: 300;
    margin: 0 10px;
    background: #EC6F66;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F3A183, #EC6F66); 
    background: linear-gradient(to right, #F3A183, #EC6F66); 
    letter-spacing: 3px;
`;

const StyledProfileInfo = styled(ContainerLayoutColumn)`
    color: #efefef;
    font-weight: 1.5em;
    align-items: flex-start;
    margin: 0 10px;
`;




const NavigationBar = () => {
    // const {isAuthenticated} = useContext(AuthContextProvider);
    console.log(useContext(AuthContext));
    return (
        <ContainerLayoutRow fullWitdth>
            <StyledNavidationBar>
                <ContainerLayoutRow></ContainerLayoutRow>
                <ContainerLayoutRow alignment="center" fullWitdth>
                    <StyledAvatar> SS </StyledAvatar>
                    <StyledProfileInfo>
                        <div style={{ fontSize: '2em' }}>Saptak Sengupta</div>
                        <div style={{ fontSize: '1.3em', fontWeight: '300', margin: '7px 0' }}>We are here with your Task List So Far</div>
                    </StyledProfileInfo>
                </ContainerLayoutRow>
            </StyledNavidationBar>
        </ContainerLayoutRow>
    )
}

export default NavigationBar;