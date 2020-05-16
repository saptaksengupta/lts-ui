import styled from "styled-components";

export const LtsTextBox = styled.input`
    width: 100%;
    background: transparent;
    height: 65px;
    border-radius: 3px;
    border: 0.6px solid #182848;
    font-size: 20px;
    font-weight: 400;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #182848;
    text-align:center;
`;


export const LtsHiddenTextBox = styled.input.attrs({
    placeholder: props => 'some place holder'
})`
    width: 100%;
    background: transparent;
`;