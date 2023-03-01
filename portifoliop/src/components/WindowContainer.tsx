import React, { ReactNode } from "react";
import WindowHeader, { WindowHeaderProps } from "./WindowHeader";

interface WindowContainerProps extends WindowHeaderProps {
  children: ReactNode;
}

const WindowContainer = ({
  headerTitle,
  headerColor,
  children,
}: WindowContainerProps) => {
  return (
    <div className="max-w-sm bg-white border-[3px] border-black rounded-lg">
      <WindowHeader headerTitle={headerTitle} headerColor={headerColor} />
      {children}
    </div>
  );
};

export default WindowContainer;
