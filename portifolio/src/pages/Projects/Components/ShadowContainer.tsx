import React from "react";

export interface ShadowContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ShadowContainer = ({ children, className }: ShadowContainerProps) => {
  return (
    <div
      className={
        `bg-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]
    border-4 border-black p-10 sm:p-14` +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};

export default ShadowContainer;
