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

