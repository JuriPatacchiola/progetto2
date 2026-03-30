import React from "react";

export type ItemProps = {
    label: string;
    children: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({ children }) => {
    return <div>{children}</div>;
};