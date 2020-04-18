import styled from 'styled-components';


const Button = styled.button`
    color: #efefef;
    height: 60px;
    border-radius: 5px;
    font-size: 20px;
    width: 100%;
    -webkit-box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);    
    -moz-box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);
    box-shadow: 1px 15px 50px 5px rgba(24,40,72,1);
`;

export const DefaultButton = styled(Button)`
    background: ${ props => props.primary ? '#182848' : 'transparent' };
    color: ${ props => props.primary ? '#efefef' : '#182848' };
    border: ${ props => props.primary ? 'none' : '2px solid #182848' };
`;