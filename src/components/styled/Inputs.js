import styled from "styled-components";

export const LtsTextBox = styled.input`
    width: 100%;
    background: transparent;
    height: 65px;
    border-radius: 5px;
    border: 2px solid #182848;
    font-size: 20px;
    font-weight: 400;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #182848;
    ${props => props.alignment ? 'text-align:' + props.alignment : 'text-align: left'};
`;


export const LtsHiddenTextArea = styled.textarea`
    width: 99%;
    border-radius: 5px;
    border: 2px solid #182848;
    font-size: 20px;
    font-weight: 400;
    color: #182848;
    background: transparent;
    rows: ${props => props.rows === '3' ? '' : '2'};
    resize: none;
`;

export const LtsHiddenTextBox = styled(LtsTextBox).attrs({
    placeholder: ``
})`
    width: 100%;
    background: transparent;
`;