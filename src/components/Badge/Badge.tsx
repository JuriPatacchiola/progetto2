import React from "react";
import root from "react-shadow";
import { GlobalStyles } from "../GlobalStyles";
import css from "./Badge.css?raw";

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'neutral' | 'negative' | 'positive';
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
}) => {
    // Se la variante è neutral, non aggiungiamo classi extra.
    // Se è positive o negative, aggiungiamo proprio quella parola come classe.
    const variantClass = variant !== 'neutral' ? variant : '';

    return (
        <root.span>
            <GlobalStyles />
            <style>{css}</style>

            {/* Usiamo la classe base 'badge' e aggiungiamo 'positive' o 'negative' */}
            <span className={`badge ${variantClass}`}>
                {children}
            </span>
        </root.span>
    );
};