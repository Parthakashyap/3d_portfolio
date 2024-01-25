// HomeInfo.jsx
import React from 'react';

const renderContent = {
  1: (
    <div className="w-max">
      <h1 className="overflow-hidden whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black font-bold">Hey,</h1>

      <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl sm:text-5xl lg:text-5xl xl:text-5xl text-black font-bold">I am Partha</h1>
      </div>
    </div>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
