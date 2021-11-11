import * as React from "react"

import "./Image.scss"
import { Cover } from "uikit/atoms/Cover"
type Props = {
    title?: string,
    src?: string
}

export const Image: React.FC<Props> = (props: Props) => {
    const { title, src } = props
    const [error, SetError] = React.useState(false)

    const handleError = () => {
        SetError(true)
    }

    if (error) {
        return <Cover />
    }        

    return <img src={src} className="movieElement__image" onError={handleError} alt={title} />
}