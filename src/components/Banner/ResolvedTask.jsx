import React from 'react';

const ResolvedTask = ({ resolvedTasks }) => {

  return (
    <div className="mt-6">

      <h2 className="font-bold mb-4">Resolved Task</h2>

      {resolvedTasks.map(task => (

        <div
          key={task.id}
          className="bg-blue-100 p-3 rounded mb-2"
        >
          {task.title}
        </div>

      ))}

    </div>
  );
};

export default ResolvedTask;