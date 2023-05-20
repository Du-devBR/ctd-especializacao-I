import React, { createContext, useState } from 'react';

const SelectedTaskContext = createContext();

export function SelectedTaskProvider({ children }) {
  const [selectedTask, setSelectedTask] = useState(null);

  const setTaskToEdit = (task) => {
    setSelectedTask(task);
  };

  const contextValue = {
    selectedTask,
    setTaskToEdit
  };

  return (
    <SelectedTaskContext.Provider value={contextValue}>
      {children}
    </SelectedTaskContext.Provider>
  );
}

export default SelectedTaskContext;
