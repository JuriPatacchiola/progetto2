import './MyHeader.css';

interface NavLink {
    label: string;
    href: string;
}

interface MyHeaderProps {
    title: string;
    /** Array di link per la navigazione */
    links?: NavLink[];
}

export const MyHeader = ({ title, links = [] }: MyHeaderProps) => {
    return (
        <header className="my-header">
            <div className="my-header__container">
                <div className="my-header__logo-section">
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0h12v10H10z" fill="#999" />
                        <path d="M0 10h10v12H0z" fill="#666" />
                        <path d="M22 10h10v12H22z" fill="#333" />
                        <path d="M10 22h12v10H10z" fill="#000" />
                    </svg>
                    <h1>{title}</h1>
                </div>

                <nav className="my-header__nav">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};