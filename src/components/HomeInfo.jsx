import React from 'react'

const renderContent = {
    1: (
    <div class="w-max">
        <h1 class=" overflow-hidden whitespace-nowrap text-5xl text-black font-bold">Hey,</h1>
       
    <div class="w-max">
        <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-6xl text-black font-bold">I am Partha</h1>
    </div>
          
    </div>
    )
}

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        {text}
    </div>
)

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo