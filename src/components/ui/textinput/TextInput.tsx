import "./text-input.css";
import React from "react";
import {cn} from "../../../utils.ts";

interface TextInputProps {
    onChange: (e: any) => void;
    placeholder?: string;
    initialText?: string;
    className?: string;

}

const TextInput: React.FC<TextInputProps> = ({placeholder, initialText, className, onChange}) => {
    return (
        <div className={cn(className, "text-input")}>
            <input className="text-input__input" type="text" placeholder={placeholder} value={initialText}
                   onChange={onChange}/>
        </div>
    );
};

export default TextInput;
