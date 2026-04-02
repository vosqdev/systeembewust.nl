import React from 'react';
import { Battery, Sun, Wind, Car, Home, Zap, Flame, Snowflake, Monitor, ArrowDown, ArrowUp, ArrowRight, ArrowLeft, UtilityPole } from 'lucide-react';

export const EnergyCircle = () => {
  // 5 items, so 360 / 5 = 72 degrees apart
  const items = [
    {
      icon: <div className="flex flex-col items-center"><Sun size={28} className="text-amber mb-1" /><div className="w-6 h-6 border border-white/50 grid grid-cols-2 gap-[1px] p-[1px]"><div className="bg-white/50"></div><div className="bg-white/50"></div><div className="bg-white/50"></div><div className="bg-white/50"></div></div></div>,
      label: "100% groene opgewekte energie",
      angle: 0,
    },
    {
      icon: <Wind size={36} className="text-blue" />,
      label: "windproductie",
      angle: 72,
    },
    {
      icon: <Car size={36} className="text-accent" />,
      label: "Laadpalen voor de auto",
      angle: 144,
    },
    {
      icon: <div className="flex gap-2"><Flame size={24} className="text-red" /><Snowflake size={24} className="text-blue" /></div>,
      label: "warmtenetten",
      angle: 216,
    },
    {
      icon: <div className="flex gap-2 items-center"><UtilityPole size={28} className="text-white/80" /><Home size={28} className="text-white/80" /></div>,
      label: "distributie",
      angle: 288,
    }
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">
      {/* Center Battery */}
      <div className="absolute z-20 flex flex-col items-center justify-center bg-card border-2 border-accent rounded-full w-48 h-48 shadow-[0_0_40px_rgba(0,200,160,0.2)]">
        <div className="relative">
          <Battery size={64} className="text-accent mb-1" />
          <div className="absolute -top-4 -right-8 bg-card border border-white/20 p-1.5 rounded-full">
            <Monitor size={16} className="text-white/70" />
          </div>
        </div>
        <div className="flex gap-4 mb-1 text-accent/70">
          <ArrowDown size={20} />
          <ArrowUp size={20} />
        </div>
        <div className="text-[10px] font-bold text-white uppercase tracking-wider text-center px-4 leading-tight">
          opslag, flexibiliteit
        </div>
      </div>

      {/* Rotating Outer Ring */}
      <div className="absolute inset-0 z-10 animate-[spin_15s_linear_infinite]">
        {/* Dashed circle to show the orbit */}
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-white/10"></div>
        
        {items.map((item, index) => {
          // Calculate position on the circle
          const radius = 42; // percentage
          const x = 50 + radius * Math.cos((item.angle - 90) * (Math.PI / 180));
          const y = 50 + radius * Math.sin((item.angle - 90) * (Math.PI / 180));

          return (
            <div
              key={index}
              className="absolute w-32 h-32 -ml-16 -mt-16 flex flex-col items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {/* Counter-rotate the items so they stay upright */}
              <div className="flex flex-col items-center justify-center w-full h-full animate-[spin_15s_linear_infinite_reverse]">
                <div className="bg-card border border-white/10 rounded-full w-20 h-20 flex items-center justify-center shadow-lg mb-2">
                  {item.icon}
                </div>
                <span className="text-[10px] text-white/70 text-center leading-tight px-1 font-medium max-w-[100px]">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
