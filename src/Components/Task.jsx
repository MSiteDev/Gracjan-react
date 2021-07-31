import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TaskRow = styled.tr`
  min-width: 20px;
`;

const Task = (props) => {
    return (
        <TaskRow>
            <td>{props.id}</td>
            <td>{props.text}</td>
        </TaskRow>
    );
}


export default Task;


Task.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}