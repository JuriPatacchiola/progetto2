import './MyButton.css';

interface MyButtonProps {
    /** Il testo da mostrare nel bottone */
    label: string;
    /** Colore principale del bottone */
    variant?: 'primary' | 'secondary' | 'danger';
    /** Dimensioni del bottone */
    size?: 'small' | 'medium' | 'large';
    /** Azione al click */
    onClick?: () => void;
}

export const MyButton = ({
    label,
    variant = 'primary',
    size = 'medium',
    onClick
}: MyButtonProps) => {
    return (
        <button
            className={['my-button', `my-button--${variant}`, `my-button--${size}`].join(' ')}
            onClick={onClick}
        >
            {label}
        </button>
    );
};