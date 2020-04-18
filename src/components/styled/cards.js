//https://uigradients.com/#PinotNoir

import styled from 'styled-components'

export const Card = styled.div`
    background-color: white;
    width: ${props => props.fullWitdth ? '100%' : ''};
    max-width: 100%;
    border-radius: 5px;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #182848, #4b6cb7); 
    background: linear-gradient(to top, #182848, #4b6cb7); 
    -webkit-box-shadow: 18px 0px 102px -18px rgba(24,40,72,1);
    -moz-box-shadow: 18px 0px 102px -18px rgba(24,40,72,1);
    box-shadow: 18px 0px 102px -18px rgba(24,40,72,1);
    color: #efefef;
    padding: 25px;
`;

