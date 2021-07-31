import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TaskRow = styled.tr`
  min-width: 20px;
`;

const IdCol = styled.td`
  font-weight: bold;
`;

const TextCol = styled(IdCol)`
  color: blue;
`;

const Task = (props) => {
    return (
        <TaskRow>
            <IdCol>{props.id}</IdCol>
            <TextCol>{props.text}</TextCol>
        </TaskRow>
    );
}


export default Task;


Task.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}
