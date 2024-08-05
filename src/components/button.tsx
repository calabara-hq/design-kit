import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/cn"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-base2 text-primary-foreground shadow hover:bg-accent/40",
                primary: "bg-primary text-text1 hover:bg-primary/80 ",
                secondary:
                    "bg-secondary text-primary-foreground shadow-sm hover:bg-secondary/80",
                outline:
                    "border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                destructive:
                    "bg-destructive text-black shadow-sm hover:bg-destructive/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-white underline-offset-4 hover:underline //hover:text-hyperlink",
            },
            size: {
                default: "h-9 px-4 py-2 text-sm ",
                sm: "h-8 px-3 text-xs",
                lg: "h-10 px-8",
                xl: "h-[50px]",
                icon: "h-9 w-9",
            },
            radius: {
                default: "hover:rounded-md rounded-xl",
                sm: "rounded-sm",
                lg: "rounded-md",
                xl: "rounded-xl",
                full: "rounded-full"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            radius: "default"
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, radius,  className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }