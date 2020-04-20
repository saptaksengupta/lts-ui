import React, { Fragment } from 'react'; 
import styled from 'styled-components';
import { Card, DefaultCard } from '../../styled/cards';
import { ContainerLayoutRow } from '../../styled/CommonUtils';



const StyledNavigationBar = styled(DefaultCard)`
`;

const NavigationHeader = () => {
    return (
        <Fragment>
            <StyledNavigationBar>
                <ContainerLayoutRow alignment="start" fullWidth>
                    <div>sdaaa</div>
                    <div>

                    </div>
                </ContainerLayoutRow>
            </StyledNavigationBar>
        </Fragment>
    )
}

export default NavigationHeader;