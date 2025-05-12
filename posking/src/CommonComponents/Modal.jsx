import { useEffect,useRef } from "react";
import { createPortal } from "react-dom";
import React  from 'react';

export const Modal = ({children}) => {
    const dialog=useRef();
    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }
    },[open])
  return createPortal(
  <dialog ref={dialog}>{children}</dialog>,
  document.getElementById('modal')
  );
}


