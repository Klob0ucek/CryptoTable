import { cn } from "../../../utils.ts"

function Placeholder({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse .placeholder", className)}
            {...props}
        />
    )
}

export { Placeholder }