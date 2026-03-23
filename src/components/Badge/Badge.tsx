import type React from "react"
import "../Badge/Badge.css"

export const Badge: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <div className="badge">{children}</div>
}