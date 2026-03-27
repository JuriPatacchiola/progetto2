import type React from "react";
import "../Badge/Badge.css";

// Definiamo i tipi di varianti possibili
interface BadgeProps {
    children: React.ReactNode;
    variant?: 'neutral' | 'negative' | 'positive';
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
}) => {
    return <div className={`badge badge--${variant}`}>{children}</div>
}