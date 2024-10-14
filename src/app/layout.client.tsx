'use client';
import ReduxProvider from "@/provider/ReduxProvider";
import React from "react";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayoutClient: React.FC<IRootLayout> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default RootLayoutClient;
