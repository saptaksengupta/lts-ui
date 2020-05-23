import styled from 'styled-components';


export const Button = styled.button`
    color: #182848;
    height: 60px;
    border-radius: 5px;
    font-size: 20px;
    width: 100%;
    // -webkit-box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);    
    // -moz-box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);
    // box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);
    background: transparent;
    border: 1px solid #182848;
    cursor:pointer;
`;

export const DefaultButton = styled(Button)`
    background: ${ props => props.primary ? '#182848' : 'transparent' };
    color: ${ props => props.primary ? '#efefef' : '#182848' };
    border: ${ props => props.primary ? 'none' : '2px solid #182848' };
`;

export const CircularButton = styled(DefaultButton)`
    border-radius: 50%;
    height: 4em;
    width: 4em;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #182848, #4b6cb7);
    background: linear-gradient(to left, #182848, #4b6cb7);
    display: flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
`;