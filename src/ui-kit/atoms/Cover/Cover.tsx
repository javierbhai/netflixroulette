import * as React from "react"
import cover from "assets/images/cover.png"

import "./Cover.scss"
type Props = {
    title?: string,
    src?: string
}

export const Cover: React.FC<Props> = (props: Props) => {
    return <div className="cover__element"> <img src={cover} /></div>
}