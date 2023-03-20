import React from "react";

export interface ShadowContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ShadowContainer = ({ children, className }: ShadowContainerProps) => {
  return (
    <div
      className={
        `bg-white drop-shadow-retro
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
