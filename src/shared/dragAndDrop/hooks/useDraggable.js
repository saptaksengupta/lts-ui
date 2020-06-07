import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../dragAndDrop.module.css';
import { TrashIcon } from '../../../components/styled/Icons';

const StyledDraggableContainer = styled.div``;
const StyledDropZone = styled.div``;
const StyledDragOverlay = styled.div`
        height: 5%;
        position: fixed;
        top: 5%;
        left: 48%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
`;

export const useDraggable = () => {

    const Draggable = (props) => {

        const handleDragStart = (e, { data, handleDragStart }) => {

            if (data)
                e.dataTransfer.setData('data', JSON.stringify(data));

            if (handleDragStart)
                handleDragStart();
        }

        const handleDragEnd = (e, { handleDragEnd }) => {
            if (handleDragEnd)
                handleDragEnd();
        }

        return (
            <React.Fragment>
                <StyledDraggableContainer
                    draggable
                    style={props.style}
                    onDragStart={(e) => handleDragStart(e, props)}
                    onDragEnd={(e) => handleDragEnd(e, props)}
                >
                    {props.children}
                </StyledDraggableContainer>
            </React.Fragment>
        )
    }

    Draggable.propTypes = {
        style: PropTypes.object,
        data: PropTypes.object,
        handleDragStart: PropTypes.func,
        handleDragEnd: PropTypes.func
    }

    const overlay = ({ showFlag, onDrop }) => {
        if (!showFlag) {
            return null;
        }
        const handleDrop = (e, passedOnDropCallback) => {
            const data = JSON.parse(e.dataTransfer.getData('data'));

            if (passedOnDropCallback)
                passedOnDropCallback(data);
        }

        return (
            <StyledDragOverlay className={styles.dropArea} >
                <StyledDropZone
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => { e.preventDefault(); handleDrop(e, onDrop) }}>
                    <TrashIcon height="4em" width="4em"></TrashIcon>
                </StyledDropZone>
            </StyledDragOverlay>
        )
    }

    const DragOverlay = (props) => {
        return ReactDOM.createPortal(
            <React.Fragment>
                {overlay({ ...props })}
            </React.Fragment>,
            document.querySelector("#drag-overlay-root")
        )
    }

    DragOverlay.propTypes = {
        showFlag: PropTypes.bool.isRequired,
        onDrop: PropTypes.func.isRequired
    }
    return [Draggable, DragOverlay];
}
