import React from 'react';

const ReminderBar = ({ message,title }) => {
  return (
    <div className="bg-[#FEE2E2] py-4 px-4 m-2 text-left">
        <div className="text-[#6E7191] font-semibold">{title}</div>
        <div className="text-[#6E7191] text-sm font-medium">{message}</div>
    </div>
  );
};

export default ReminderBar;