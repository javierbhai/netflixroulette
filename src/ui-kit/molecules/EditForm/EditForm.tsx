import * as React from "react"

import { Select } from "uikit/atoms/Select";

import "./EditForm.scss"

type Props = {
    isAddOrEdit?: string;
}

export const EditForm: React.FC<Props> = (props: Props) => {
    const { isAddOrEdit } = props;
    
    return(
        <>
            <form action="">
                <legend className="xxl">{isAddOrEdit === "Add" ? "ADD" : "EDIT"} MOVIE</legend>
                <fieldset className="addMovieForm">
                    <p className="addMovieForm__el">
                        <label className="titleLable">TITLE</label>
                        <input type="text" name="Title" id="" />
                    </p>
                    <p className="addMovieForm__el">
                        <label className="titleLable">YEAR</label>
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
                    <div className="addMovieForm__el">
                    <label className="titleLable">GENRE</label>
                    <Select />
                    </div>
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
