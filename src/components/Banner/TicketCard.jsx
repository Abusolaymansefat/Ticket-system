import React from 'react';

const TicketCard = ({ ticket, handleAddTask }) => {

  return (
    <div
      onClick={() => handleAddTask(ticket)}
      className=" p-4 rounded-lg shadow cursor-pointer hover:shadow-lg"
    >

      <div className="flex justify-between">

        <h3 className="font-semibold">{ticket.title}</h3>

        <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
          {ticket.status}
        </span>

      </div>

      <p className="text-sm text-gray-500 mt-2">
        {ticket.description}
      </p>

      <div className="flex justify-between mt-4 text-sm">

        <span className="text-red-500">{ticket.priority}</span>

        <span>{ticket.createdAt}</span>

      </div>

    </div>
  );
};

export default TicketCard;