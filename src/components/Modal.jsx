import React, { createContext, useContext, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, setOpenName, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const OpenModal = ({ opens, children }) => {
  const { setOpenName } = useContext(ModalContext);

  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            onClick: (e) => {
              if (children.props.onClick) {
                children.props.onClick(e);
              }
              setOpenName(opens);
            },
          })
        : children}
    </>
  );
};

const ModalWindow = ({ name, children }) => {
  const { openName, close } = useContext(ModalContext);
  if (openName !== name) return null;

  return (
    <div className="h-full fixed top-0 left-0 z-1300 flex w-full items-center bg-black/40 justify-center overflow-y-auto">
      <div
        onClick={close}
        className="fixed top-0 left-0 z-1200 flex h-full w-full items-center justify-center  backdrop-blur-[3px] p-4"
      ></div>
      <button
        onClick={close}
        className="fixed top-[2rem] right-[-.4rem] lg:right-[20px] m-4 rounded bg-white text-teal-700 hover:text-white hover:bg-teal-900 hover:cursor-pointer h-[35px] w-[35px] lg:h-[40px] lg:w-[40px] flex items-center justify-center transition-all duration-300 z-2000"
      >
        <LiaTimesSolid className="font-bold text-xl" />
      </button>
      <div className="min-h-70 max-h-[100%] z-1500 relative w-[95%] lg:max-w-[600px] md:max-w-[700px] overflow-y-auto rounded bg-white p-6 shadow-lg md:max-h-[500px] dark:bg-[#1E1E2F] dark:text-white">
        {children}
      </div>
    </div>
  );
};

Modal.Open = OpenModal;
Modal.Window = ModalWindow;

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export default Modal;
