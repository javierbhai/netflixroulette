import * as React from "react"

import "./UnorderedList.scss"

type Props = {
    children?: any,
}

export const UnorderedList: React.FC<Props> = (props: Props) => {
    const { children } = props;    
    return(
        <ul className="sortingMenu">{children}</ul>
    );
}