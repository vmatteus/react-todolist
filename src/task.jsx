import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background: ${props => props.isDragging ? 'lightgreen' : 'white'};

`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                { (provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef} 
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}