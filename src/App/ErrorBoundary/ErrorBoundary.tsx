import React from "react"

type Props = {
    children?: any,
}

export const ErrorBoundary: React.FC<Props> = (props: Props) => {
    const { children } = props

    const ErrorMessage = () => (
        <h2>
            We are sorry, The Roulette just stops :( 
        </h2>
    )

    let isEverythingOK  = true
    return <> { isEverythingOK ? children : <ErrorMessage />}</>
}