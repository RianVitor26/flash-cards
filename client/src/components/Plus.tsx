import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface PlusProps {
  action: () => void;
}

export const Plus: React.FC<PlusProps> = ({ action }) => {
  return (
    <div onClick={action} className="sm:w-52 w-full h-40 flex justify-center items-center text-7xl text-emerald-500 rounded-md cursor-pointer hover:text-emerald-400 transition-all duration-500 bg-emerald-500/10">
      <AiOutlinePlusCircle/>
    </div>
  );
}

