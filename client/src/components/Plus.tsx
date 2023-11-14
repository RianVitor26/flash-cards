import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface PlusProps {
  action: () => void;
}

export const Plus: React.FC<PlusProps> = ({ action }) => {
  return (
    <div onClick={action} className="sm:w-52 w-full h-40 flex justify-center items-center text-7xl text-purple-500 rounded-md  border-dotted border border-purple-600 cursor-pointer hover:text-purple-400 transition-all duration-500 bg-purple-500/10">
      <AiOutlinePlusCircle/>
    </div>
  );
}

