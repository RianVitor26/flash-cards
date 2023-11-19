import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface PlusProps {
  action: () => void;
}

export const Plus: React.FC<PlusProps> = ({ action }) => {
  return (
    <div onClick={action} className="w-80 h-40 flex justify-center items-center text-7xl text-blue-500 rounded-md  border-dotted border border-blue-600 cursor-pointer hover:text-blue-400 transition-all duration-500 bg-blue-500/10">
      <AiOutlinePlusCircle/>  
    </div>
  );
}

