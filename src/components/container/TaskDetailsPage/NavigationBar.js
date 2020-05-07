import React, { useContext } from 'react';
import { ContainerLayoutRow, DefaultContainerLayout, ContainerLayoutColumn, StyledAvatar } from '../../styled/CommonUtils';
import { Card, DefaultCard } from '../../styled/cards';
import styled from 'styled-components';
import { AuthContext } from '../../../context/AuthContext';
import { StyledJumbothron } from "../LIstItemDetailsPage/ListInfoCard";
import { AddIcon } from '../../styled/Icons';

const StyledNavidationBar = styled(Card)`
    width: 100%;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
    min-height: 200px;
    border-radius: 10px;
`;

export const StyledJumbothronBoardPage = styled.div`
    // margin-top: 2em;
    min-height: 10em;
    color: #efefef;
    width: 100%;
    z-index: 2;
    border-radius: 10px;
    min-width: auto;
    background: transparent;
    padding: 0 0.6em;
    margin: 1em;
    margin-bottom: 0;
`;


const StyledProfileInfo = styled(ContainerLayoutColumn)`
    color: #efefef;
    font-weight: 1.5em;
    align-items: flex-start;
    margin: 2em 10px;
`;

const NavigationBar = () => {
    // const {isAuthenticated} = useContext(AuthContextProvider);
    console.log(useContext(AuthContext));
    return (
        <ContainerLayoutRow fullWitdth>
            <StyledJumbothronBoardPage>
                <ContainerLayoutRow></ContainerLayoutRow>
                <ContainerLayoutRow alignment="center" fullWitdth>
                    <StyledProfileInfo>
                        <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: "center" }}>
                            <div style={{ fontSize: '3em', marginBottom: '0.1em', flex: "1" }}>Hello, </div>
                            <div>
                                <AddIcon width="2.5em" heigh="2.5em" fill="#efefef" ></AddIcon>
                            </div>
                        </div>
                        <div style={{ fontSize: '2.5em' }}>Saptak Sengupta</div>
                        <div style={{ fontSize: '1.2em', fontWeight: '300', margin: '1em 0' }}>
                            We are here with your Task List So Far, Now You can share every "Board details" with your friends.
                            and get your Task Done as a whole team
                        </div>
                    </StyledProfileInfo>
                </ContainerLayoutRow>
            </StyledJumbothronBoardPage>
        </ContainerLayoutRow>
    )
}

export default NavigationBar;



// <ContainerLayoutRow fullWitdth>
        //     <StyledNavidationBar>
        //         <ContainerLayoutRow></ContainerLayoutRow>
        //         <ContainerLayoutRow alignment="center" fullWitdth>
        //             <StyledAvatar> SS </StyledAvatar>
        //             <StyledProfileInfo>
        //                 <div style={{ fontSize: '2em' }}>Saptak Sengupta</div>
        //                 <div style={{ fontSize: '1.3em', fontWeight: '300', margin: '7px 0' }}>We are here with your Task List So Far</div>
        //             </StyledProfileInfo>
        //         </ContainerLayoutRow>
        //     </StyledNavidationBar>
        // </ContainerLayoutRow>