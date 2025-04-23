import React from 'react';

const NormalButton = ({title, filter}) => {
  return (
    <button onClick={filter}
        
        className="flex items-center gap-2 px-4 py-2 border-1 border-primary rounded bg-white 100 focus-ring"
      >
        <span className='text-primary '>{title}</span>
        {/* <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24 " >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg> */}
      </button>
  );
}

export default NormalButton;
