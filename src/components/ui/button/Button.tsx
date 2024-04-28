import "./button.css";
import React from "react";
import {cn} from "../../../utils.ts";

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, className}) => {
    return (
        <button onClick={onClick} className={cn(className, "button")}>
            {label}
        </button>
    );
};
