import { useState } from 'react';
import './App.css'
import tickets from './data/tickets.json'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Banner from './components/Banner/Banner';
import TicketCard from './components/Banner/TicketCard';
import TaskStatus from './components/Banner/TaskStatus';
import ResolvedTask from './components/Banner/ResolvedTask';
import Swal from 'sweetalert2';

function App() {
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleAddTask = (ticket) => {

    Swal.fire({
      title: "Completed!",
      text: "Ticket resolved successfully",
      icon: "success",
      confirmButtonText: "OK",
    });

    setTasks([...tasks, ticket]);
  };

  const handleComplete = (task) => {

    Swal.fire({
      title: "Completed!",
      text: "Task completed successfully",
      icon: "success",
      confirmButtonText: "OK",
    });

    setTasks(tasks.filter(t => t.id !== task.id));

    setResolvedTasks([...resolvedTasks, task]);
  };


  return (
    <>


      <div className="max-w-7xl mx-auto p-8">
        <Navbar />

        <Banner
          inProgress={tasks.length}
          resolved={resolvedTasks.length}
        />

        <div className="grid grid-cols-3 gap-6">

          {/* Ticket Section */}

          <div className="col-span-2">

            <h2 className="font-bold mb-4">
              Customer Tickets
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {tickets.map(ticket => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  handleAddTask={handleAddTask}
                />
              ))}

            </div>

          </div>

          {/* Right Section */}

          <div>

            <TaskStatus
              tasks={tasks}
              handleComplete={handleComplete}
            />

            <ResolvedTask
              resolvedTasks={resolvedTasks}
            />

          </div>

        </div>

        <Footer />
      </div>


    </>
  )
}

export default App
