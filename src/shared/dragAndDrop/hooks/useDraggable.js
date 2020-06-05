import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledDraggableContainer = styled.div``;

const handleDragStart = (e, passedHandler) => {
    console.log('drag started');
    if (passedHandler) 
        passedHandler();
}

const handleDragEnd = (e, passedHandler) => {
    console.log('drag end');
    if (passedHandler) 
        passedHandler();
}

const Draggable = (props) => {

    const { style } = props;

    return (
        <React.Fragment>
            <StyledDraggableContainer
                draggable style={style}
                onDragStart={(e) => handleDragStart(e, props.handleDragStart)}
                onDragEnd={(e) => handleDragEnd(e, props.handleDragEnd)}
            >
                {props.children}
            </StyledDraggableContainer>
        </React.Fragment>
    )
}

Draggable.propTypes = {
    handleDragStart: PropTypes.func,
    handleDragEnd: PropTypes.func
}

const useDraggable = () => {
    return [Draggable];
}


export default useDraggable;