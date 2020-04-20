//https://uigradients.com/#PinotNoir

import styled from 'styled-components'

export const DefaultCard = styled.div`
    background-color: white;
    width: ${props => props.width ? props.width : ''};
    max-width: 100%;
    border-radius: 5px;
    -webkit-box-shadow: 18px 0px 102px -18px rgba(24,40,72,1);
    -moz-box-shadow: 18px 0px 102px -18px rgba(24,40,72,1);
    box-shadow: 18px 0px 102px -18px rgba(24,40,72,1);
    padding: 25px;
    height: ${props => props.height ? props.height : ''};
`;

export const Card = styled(DefaultCard)`
    background-color: white;
    width: ${props => props.fullWitdth ? '100%' : ''};
    max-width: 100%;
    border-radius: 5px;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #182848, #4b6cb7); 
    background: linear-gradient(to top, #182848, #4b6cb7); 
    color: #efefef;
`;

