import React, { useState, useEffect } from 'react';
import Nighty from './Nighty';
import NinetyFive from './NinetyFive';
import Twenty from './Twenty';
import TwentyTen from './TwentyTen';

const TimeMachine = () => {
  const [year, setYear] = useState(2000);
  const [isTimeJumping, setIsTimeJumping] = useState(false);
  const [page,setPage]= useState(0);
  const [machineState, setMachineState] = useState({
    era: "Digital Age",
    primaryColor: "#222222",
    secondaryColor: "#666666",
    glowColor: "#FFFFFF",
    machineType: "modern",
    fontStyle: "sans"
  });

  // Time periods data with monochromatic design
  const timePeriods = [
    { 
      start: 1900, end: 1919, 
      era: "Belle Époque", 
      primaryColor: "#000000", 
      secondaryColor: "#333333",
      glowColor: "#DDDDDD",
      machineType: "classic",
      fontStyle: "serif"
    },
    { 
      start: 1920, end: 1949, 
      era: "Art Deco", 
      primaryColor: "#111111", 
      secondaryColor: "#444444",
      glowColor: "#EEEEEE",
      machineType: "mechanical",
      fontStyle: "deco"
    },
    { 
      start: 1950, end: 1979, 
      era: "Modernist", 
      primaryColor: "#1A1A1A", 
      secondaryColor: "#555555",
      glowColor: "#F5F5F5",
      machineType: "mid-century",
      fontStyle: "modern"
    },
    { 
      start: 1980, end: 2019, 
      era: "Digital", 
      primaryColor: "#222222", 
      secondaryColor: "#666666",
      glowColor: "#FFFFFF",
      machineType: "modern",
      fontStyle: "sans"
    },
    { 
      start: 2020, end: 2100, 
      era: "Minimalist", 
      primaryColor: "#0A0A0A", 
      secondaryColor: "#777777",
      glowColor: "#FFFFFF",
      machineType: "future",
      fontStyle: "thin"
    }
  ];

  // Update machine appearance based on selected year
  useEffect(() => {
    const currentPeriod = timePeriods.find(
      period => year >= period.start && year <= period.end
    );
    
    if (currentPeriod) {
      setMachineState({
        era: currentPeriod.era,
        primaryColor: currentPeriod.primaryColor,
        secondaryColor: currentPeriod.secondaryColor,
        glowColor: currentPeriod.glowColor,
        machineType: currentPeriod.machineType,
        fontStyle: currentPeriod.fontStyle
      });
    }
  }, [year]);

  // Handle year change
  const handleChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  // Handle time travel button click
  const handleTimeTravel = () => {
    if(year<2000)
    {
      setPage(1);
    }
    else if(year>=2000 && year < 2010)
    {
      setPage(2);
    }
    else{
      setPage(3);
    }
  };

  // Get font style based on era
  const getFontStyle = () => {
    switch (machineState.fontStyle) {
      case "serif": return "font-serif";
      case "deco": return "font-serif tracking-wider";
      case "modern": return "font-sans tracking-wide";
      case "sans": return "font-sans";
      case "thin": return "font-sans font-light tracking-widest";
      default: return "font-sans";
    }
  };

  // Generate random stars for the background
  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2;
      const opacity = Math.random() * 0.8 + 0.2;
      stars.push(
        <div 
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: size + 'px',
            height: size + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: opacity,
            animation: `twinkle ${Math.random() * 8 + 2}s infinite ease-in-out`
          }}
        ></div>
      );
    }
    return stars;
  };

  // Render machine parts based on era
  const renderMachineParts = () => {
    switch (machineState.machineType) {
      case "classic":
        return (
          <>
            <div className="absolute w-28 h-28 border-4 rounded-full animate-spin" 
                 style={{borderColor: machineState.secondaryColor, borderTopColor: 'transparent', animationDuration: '10s'}} />
            <div className="absolute w-20 h-20 border-2 rounded-full animate-spin" 
                 style={{borderColor: machineState.secondaryColor, borderLeftColor: 'transparent', animationDuration: '5s'}} />
            <div className="text-3xl" style={{color: machineState.glowColor}}>♦</div>
          </>
        );
      case "mechanical":
        return (
          <>
            <div className="absolute w-32 h-32 border-4 rounded-full animate-spin" 
                 style={{borderColor: machineState.secondaryColor, borderRightColor: 'transparent', animationDuration: '8s'}} />
            <div className="absolute w-16 h-16 border-4 rounded-full animate-spin" 
                 style={{borderColor: machineState.secondaryColor, borderLeftColor: 'transparent', animationDuration: '4s', transformOrigin: 'center'}} />
            <div className="text-3xl" style={{color: machineState.glowColor}}>◇</div>
          </>
        );
      case "mid-century":
        return (
          <>
            <div className="absolute w-32 h-8 border-2 rounded-full animate-spin" 
                 style={{borderColor: machineState.secondaryColor, animationDuration: '6s'}} />
            <div className="absolute w-8 h-32 border-2 rounded-full animate-spin" 
                 style={{borderColor: machineState.secondaryColor, animationDuration: '6s', animationDelay: '0.5s'}} />
            <div className="text-3xl" style={{color: machineState.glowColor}}>□</div>
          </>
        );
      case "modern":
        return (
          <>
            <div className="absolute w-28 h-28 border-2 rounded-lg animate-spin" 
                 style={{borderColor: machineState.secondaryColor, animationDuration: '10s'}} />
            <div className="absolute w-20 h-20 border-2 rounded-lg animate-spin" 
                 style={{borderColor: machineState.secondaryColor, animationDuration: '5s', animationDirection: 'reverse'}} />
            <div className="absolute w-12 h-12 border-2 rounded-lg animate-spin" 
                 style={{borderColor: machineState.secondaryColor, animationDuration: '2s'}} />
            <div className="text-3xl" style={{color: machineState.glowColor}}>■</div>
          </>
        );
      case "future":
        return (
          <>
            <div className="absolute w-32 h-32 rounded-full animate-ping opacity-10" 
                 style={{backgroundColor: machineState.glowColor, animationDuration: '4s'}} />
            <div className="absolute w-24 h-24 rounded-full animate-ping opacity-20" 
                 style={{backgroundColor: machineState.glowColor, animationDuration: '3s'}} />
            <div className="absolute w-16 h-16 rounded-full animate-ping opacity-30" 
                 style={{backgroundColor: machineState.glowColor, animationDuration: '2s'}} />
            <div className="text-3xl" style={{color: machineState.glowColor}}>○</div>
          </>
        );
      default:
        return <div className="text-3xl" style={{color: machineState.glowColor}}>◈</div>;
    }
  };

  return (
    <>
      {page === 0&&
      <>
    <div className="relative w-screen flex flex-col items-center justify-center min-h-screen overflow-hidden p-8 text-white">
      {/* Space background with stars */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Stars layer */}
        <div className="absolute inset-0 opacity-80">
          {generateStars(150)}
        </div>
        
        {/* Space nebula effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900 to-transparent opacity-5"></div>
        
        {/* Distant galaxies */}
        <div className="absolute w-full h-full">
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-900 to-transparent opacity-5"
               style={{top: '15%', left: '10%', filter: 'blur(40px)'}}></div>
          <div className="absolute w-48 h-48 rounded-full bg-gradient-to-l from-blue-900 to-transparent opacity-5"
               style={{top: '60%', right: '15%', filter: 'blur(30px)'}}></div>
        </div>
      </div>
      
      {/* Time travel effect - space distortion */}
      <div className={`fixed inset-0 transition-opacity duration-1000 pointer-events-none ${isTimeJumping ? 'opacity-60' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-radial from-blue-800 via-transparent to-transparent opacity-30"
             style={{animation: 'pulse 2s infinite', filter: 'blur(8px)'}}></div>
        <div className="absolute inset-0 animate-spin"
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(100, 100, 255, 0.2) 70%, transparent 100%)',
               animationDuration: '15s'
             }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Era Display */}
        <h1 className={`text-5xl font-bold mb-2 transition-all duration-500 ${getFontStyle()}`}
             style={{color: machineState.glowColor}}>
          {machineState.era}
        </h1>
        <h2 className={`text-3xl font-bold mb-12 transition-all duration-500 ${getFontStyle()}`}>
          <span className="animate-pulse">{year}</span>
        </h2>
        
        {/* Time Machine */}
        <div 
          className={`relative w-64 h-64 rounded-full flex items-center justify-center mb-12 transition-all duration-700 transform ${isTimeJumping ? 'scale-125' : ''}`}
          style={{
            backgroundColor: `${machineState.primaryColor}dd`,
            boxShadow: isTimeJumping ? `0 0 60px ${machineState.glowColor}` : `0 0 20px ${machineState.secondaryColor}`,
            border: `2px solid ${machineState.secondaryColor}`
          }}
        >
          {/* Machine core */}
          <div className="relative z-10 flex items-center justify-center">
            {renderMachineParts()}
          </div>
          
          {/* Time travel effect */}
          <div className={`absolute w-full h-full rounded-full transition-opacity duration-500 ${isTimeJumping ? 'opacity-50' : 'opacity-0'}`}
            style={{
              background: `radial-gradient(circle, ${machineState.glowColor} 0%, rgba(0,0,0,0) 70%)`,
            }}
          ></div>
        </div>
        
        {/* Timeline with elegant tick marks */}
        <div className="w-full max-w-lg mb-12 relative backdrop-blur-sm backdrop-filter rounded-lg p-4 bg-black bg-opacity-40">
          <div className="flex justify-between mb-2 px-2 opacity-70 text-sm">
            {timePeriods.map((period, index) => (
              <span key={index} className={`${getFontStyle()}`}>{period.start}</span>
            ))}
            <span className={`${getFontStyle()}`}>2100</span>
          </div>
          
          <div className="relative h-10 mb-2">
            <input
              type="range"
              min="1900"
              max="2100"
              value={year}
              onChange={handleChange}
              className="absolute w-full h-1 appearance-none cursor-pointer bg-transparent z-10"
              style={{
                WebkitAppearance: "none",
                background: `linear-gradient(to right, 
                  ${machineState.secondaryColor} 0%, 
                  ${machineState.glowColor} 50%, 
                  ${machineState.secondaryColor} 100%)`
              }}
            />
          </div>
          
          <div className="flex justify-between px-2 mt-4 text-xs">
            {timePeriods.map((period, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-px h-4 mb-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: year >= period.start && year <= period.end ? 
                      machineState.glowColor : machineState.secondaryColor
                  }}
                ></div>
                <span 
                  className={`transition-all duration-300 ${getFontStyle()}`}
                  style={{ 
                    color: year >= period.start && year <= period.end ? 
                      machineState.glowColor : machineState.secondaryColor,
                    opacity: year >= period.start && year <= period.end ? 1 : 0.7
                  }}
                >
                  {period.era}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Travel button */}
        <button 
          onClick={handleTimeTravel}
          disabled={isTimeJumping}
          className={`px-10 py-4 text-xl transition-all duration-300 ${getFontStyle()} border-2 rounded-none backdrop-blur-sm bg-black bg-opacity-40`}
          style={{
            borderColor: machineState.secondaryColor,
            color: machineState.glowColor,
            boxShadow: isTimeJumping ? `0 0 20px ${machineState.glowColor}` : 'none'
          }}
        >
          {isTimeJumping ? "TRAVELING..." : `TRAVEL TO ${year}`}
        </button>
        

      </div>
      
      {/* CSS for star animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </div>
    </>
    }
    {
      page === 1 && <Nighty />
    }
    {
      page === 2 && <NinetyFive />
    }
    {
      page === 3 && <Twenty />
    }

    </>
  );
};

export default TimeMachine;
