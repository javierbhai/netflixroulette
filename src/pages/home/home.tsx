import * as React from "react";

import { DeleteModal } from "uikit/molecules/DeleteModal";
import { EditModal } from "uikit/molecules/EditModal";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";
import { MainBanner } from "uikit/molecules/MainBanner";
import { mock } from "assets/movies";
import { MovieList } from "uikit/molecules/MovieList";

import "./home.scss";

export const Home = () => {

  let initialState = mock;
  const [ addOrEdit, setAddOrEdit ] = React.useState("")
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false)
  const [ showEditAddModal, setShowEditAddModal ] = React.useState(false)

  const [ movies, setmovies ] = React.useState(initialState);  

  const handleFilter = (id:string) => {
    let result = movies.filter((el:any)=> el.id == id);
    let filter = movies.indexOf(result[0]);
    return movies[filter]
  }

  const handleDelete = (deleteId:string) => {
    console.log("Delete", handleFilter(deleteId));
    setShowDeleteModal(true)
  }
  
  const handleEdit = (editId:string) => {
    console.log("Edit", handleFilter(editId));
    setShowEditAddModal(true)
    setAddOrEdit("Edit")
  }

  const handleAdd = () => {
    setShowEditAddModal(true)
    setAddOrEdit("Add")
  }

  return (
    <main>
        <MainBanner addAction={handleAdd} />
          <ErrorBoundary>
            <EditModal isAddOrEdit={addOrEdit} editAddIsOn={showEditAddModal} setEditAddIsOn={setShowEditAddModal} />
            <DeleteModal deleteIsOn={showDeleteModal} setDeleteIsOn={setShowDeleteModal} />
            <MovieList 
              editAccion={handleEdit}
              deleteAccion={handleDelete}
              movies={movies}
            />
          </ErrorBoundary>
        <Footer light="roulette">netflix</Footer>
      </main>
  );

}