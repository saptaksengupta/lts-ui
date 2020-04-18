import styled from 'styled-components';

export const DefaultContainerLayoutFlex = styled.div`
    display:flex;
`;

export const DefaultContainerLayoutGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 35px;
`;

export const ContainerLayoutRow = styled(DefaultContainerLayoutFlex)`
    justify-content: center;
    align-items:center;
    flex-direction: row;
    min-width: ${props => props.fullWitdth ? '100%' : ''};
`;

export const ContainerLayoutColumn = styled(DefaultContainerLayoutFlex)`
    justify-content: center;
    align-items:center;
    flex-direction: column;
`;

