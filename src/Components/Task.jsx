import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

const TaskRow = styled.tr`
  min-width: 20px;
`;

const IdCol = styled.td`
  font-weight: bold;
`;

const TextCol = styled(IdCol)`
  color: blue;
  ${props => props.isDone && css`
        color: pink;
    `}
`;

const Task = ({id, text, done, updateCompletion}) => {

    const [time, setTime] = React.useState(0);


    // TODO: Change to redux
    const onChangeCheckbox = e => {
        updateCompletion(id, e.target.checked)
    }


    return (
        <TaskRow>
            <IdCol>{id}</IdCol>
            <TextCol isDone={done}>{text}</TextCol>
            <td>
                <input type="checkbox" checked={done} onChange={onChangeCheckbox}/>
            </td>
        </TaskRow>
    );
}


export default Task;


Task.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool
}
