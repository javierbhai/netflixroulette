import * as React from "react"

import { Select } from "uikit/atoms/Select";
import "./EditForm.scss"

type Props = {
    children?: string
}

export const EditForm: React.FC<Props> = () => {
    return(
        <>
            <form action="">
                <legend className="xxl">ADD MOVIE</legend>
                <fieldset className="addMovieForm">
                    <p className="addMovieForm__el">
                        <label className="titleLable">TITLE</label>
                        <input type="text" name="Title" id="" />
                    </p>
                    <p className="addMovieForm__el">
                    <label className="titleLable">DATE</label>
                    <input type="text" name="Date" id="" />
                    </p>
                    <p className="addMovieForm__el">
                    <label className="titleLable">MOVIE URL</label>
                    <input type="text" name="MovieUrl" id="" />
                    </p>
                    <p className="addMovieForm__el">
                    <label className="titleLable">RATING</label>
                    <input type="text" name="Rating" id="" />
                    </p>
                    <p className="addMovieForm__el">
                    <label className="titleLable">GENRE</label>
                    <Select />
                    </p>
                    <p className="addMovieForm__el">
                    <label className="titleLable">RUNTIME</label>
                    <input type="text" name="Runtime" placeholder="minutes" id="" />
                    </p>
                    <p className="addMovieForm__el addMovieForm__el--overview">
                    <label className="titleLable">OVERVIEW</label>
                    <textarea name="Overview" id=""></textarea>
                    </p>
                    <p className="addMovieForm__el addMovieForm__el--actions">
                    <button className="btn btn--border l">RESET</button>
                    <button className="btn l" type="submit">SUBMIT</button>
                    </p>
                </fieldset>
            </form>
        </>
    )    
}
