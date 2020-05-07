import styled from 'styled-components';

export const StraightLine = styled.span`
    width: 100%;
    border-top: 0.7px solid #efefef;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`;

export const DefaultContainerLayoutFlex = styled.div`
    display:flex;
`;

export const DefaultContainerLayoutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 6em;
    grid-row-gap: 3em;
`;

export const ContainerLayoutRow = styled(DefaultContainerLayoutFlex)`
    ${props => props.alignment === 'center' ? 'justify-content: center' : ''};
    ${props => props.alignment === 'start' ? 'justify-content: flex-start' : ''};
    ${props => props.alignment === 'end' ? 'justify-content: flex-end' : ''};
    align-items:center;
    flex-direction: row;
    width: 100%;
`;

export const ContainerLayoutColumn = styled(DefaultContainerLayoutFlex)`
    justify-content: center;
    flex-direction: column;
    ${props => props.alignment === 'center' ? 'align-items:center' : ''};
    ${props => props.alignment === 'start' ? 'align-items:flex-start' : ''};
    ${props => props.alignment === 'end' ? 'align-items:flex-end' : ''};
    width: ${props => props.fullWitdth ? '100%' : ''};
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