import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface PlusProps {
  action: () => void;
}

export const Plus: React.FC<PlusProps> = ({ action }) => {
  return (
    <div onClick={action} className="sm:w-52 w-full h-40 flex justify-center items-center text-7xl text-sky-500 rounded-md  border-dotted border border-sky-600 cursor-pointer hover:text-sky-400 transition-all duration-500 bg-sky-500/10">
      <AiOutlinePlusCircle/>
    </div>
  );
}

