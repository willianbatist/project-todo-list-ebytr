import PropTypes from 'prop-types';
import Context from './context';
import { getTasks } from '../services/tasks';
import React, { useState } from 'react';

export default function Provider({ children }) {
  const [values, setValues] = useState({ status: 'Pendente' });
  const [tasks, setTasks] = useState("");
  const [id, setId] = useState(0);

  const handleValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleTasks = () => {
    return getTasks(setTasks);
  };

  const disableButton = (values) => {
    if (values.task && values.task.length > 1) {
      return false;
    }
    return true;
  };

  const handleId = (id) => {
    setId(id);
  }

  const context = {
    handleValues,
    handleTasks,
    handleId,
    values,
    tasks,
    id,
    disableButton,
  };
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};