import Swal from "sweetalert2";

const TaskStatus = ({ tasks, handleComplete }) => {
  return (
    <div>

      <h2 className="font-bold mb-4">Task Status</h2>

      {tasks.map(task => (
        <div key={task.id} className="bg-white p-3 rounded shadow mb-3">

          <p className="text-sm font-medium">
            {task.title}
          </p>

          <button
            onClick={() => handleComplete(task)}
            className="bg-green-600 text-white w-full mt-2 py-1 rounded"
          >
            Complete
          </button>

        </div>
      ))}

    </div>
  );
};

export default TaskStatus;