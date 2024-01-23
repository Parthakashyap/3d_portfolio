import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp5121853.png')", backgroundSize: 'cover' }}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style={{ backdropFilter: 'blur(0px)' }}>
          <div className="max-w-md mx-auto">
            <div>
              <p className='font-bold text-3xl blue-gradient_text'>I'm Partha Pratim Kashyap</p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>I am from Assam, India.</p>
                <ul className="list-disc space-y-2">
                  {/* ... your list items */}
                </ul>
                <p>I am a passionate computer science student with a keen interest in crafting dynamic and user-friendly websites. My enthusiasm extends to the realm of cybersecurity, where I explore the ever-evolving landscape of digital security. Beyond coding and web development, I channel my creativity into designing intricate Blender models. A perpetual learner, I thrive on the excitement of acquiring new skills and knowledge. Join me on this journey of innovation and continuous growth! </p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>See me on <a className="font-bold text-blue-700" href="/projects"> Projects {'>>'} </a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
