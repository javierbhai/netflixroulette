import * as React from "react"

import "./CustomAlert.scss"

type Props = {
    action?: string,
    content?: string,
    legend?: string
}

export const CustomAlert: React.FC<Props> = (props: Props) => {
    const { action, content, legend } = props;
    return(
        <div className="CustomAlertCont">
            <form action="">
                <legend className="xxl">{legend}</legend>
                <fieldset className="CustomAlertCont">
                    <p className="CustomAlertCont__el CustomAlertCont__el--content l">{content}</p>
                    <p className="CustomAlertCont__el CustomAlertCont__el--actions">
                        <button className="btn l" type="submit">{action}</button>
                    </p>
                </fieldset>
            </form>
        </div>
    )    
}
