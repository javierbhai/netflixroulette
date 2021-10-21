import * as React from "react"

type Props = {
    children?: any,
    error?: any
}

export const ErrorBoundary: React.FC<Props> = (props: Props) => {
    const { children, error } = props
    const errorMessage = (
        <h2>{error}</h2>
    )
    
    return <> { error ? errorMessage : children } </>
}