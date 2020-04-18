import styled from 'styled-components';

export const DefaultContainerLayout = styled.div`
    display:flex;
    width: 100;
`;

export const ContainerLayoutRow = styled(DefaultContainerLayout)`
    justify-content: center;
    align-items:center;
    flex-direction: row;
`;

export const ContainerLayoutColumn = styled(DefaultContainerLayout)`
    justify-content: center;
    align-items:center;
    flex-direction: column;
`;

