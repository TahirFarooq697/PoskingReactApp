import React from 'react';

export const NormalButton = ({title, filter}) => {
  return (
    <button onClick={filter}
        
        className="flex items-center gap-2 px-4 py-2 border-1 border-primary rounded bg-white 100 focus-ring"
      >
        <span className='text-primary '>{title}</span>
        
      </button>
  );
}


