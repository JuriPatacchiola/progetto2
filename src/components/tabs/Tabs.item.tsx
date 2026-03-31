import React from "react";

export type ItemProps = {
    label: React.ReactNode; // Permette stringhe, span, badge, ecc.
    children: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({ children }) => {
    return <>{children}</>;
};