import React from 'react';

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

      {/* In Progress */}

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg p-6 md:p-10 text-center">

        <h2 className="text-base md:text-lg">
          In-Progress
        </h2>

        <p className="text-3xl md:text-5xl font-bold mt-2">
          {inProgress}
        </p>

      </div>

      {/* Resolved */}

      <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg p-6 md:p-10 text-center">

        <h2 className="text-base md:text-lg">
          Resolved
        </h2>

        <p className="text-3xl md:text-5xl font-bold mt-2">
          {resolved}
        </p>

      </div>

    </div>
  );
};

export default Banner;