import * as React from "react";

import { DeleteModal, EditModal, MovieDetail, MovieList, MainBanner } from "uikit/molecules";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";
import { mock } from "assets/movies";

import "./home.scss";

export const Home = () => {

  let initialState = mock;
  const [ addOrEdit, setAddOrEdit ] = React.useState("")
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false)
  const [ showEditAddModal, setShowEditAddModal ] = React.useState(false)
  const [ idToDisplayModal, setIdToDisplayModal ] = React.useState()

  React.useEffect(()=>{},[])
  const [ movies, setmovies ] = React.useState(initialState);  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
    console.log("Edit",);
    setShowEditAddModal(true)
    setAddOrEdit("Edit")
  }

  const handleAdd = () => {
    setShowEditAddModal(true)
    setAddOrEdit("Add")
  }

  const handleSearch = () => {
    console.log("Search Please");
  }

  const handleDetail = (detailId: string) => {
    setIdToDisplayModal(handleFilter(detailId))
    scrollToTop()
  }

  React.useEffect(()=>{
    console.log(idToDisplayModal)
  }, [idToDisplayModal])

  return (
    <main>
        {idToDisplayModal ? <MovieDetail searchAction={handleSearch} movieToDisplay={idToDisplayModal} /> : <MainBanner addAction={handleAdd} /> }
          <ErrorBoundary>
            <EditModal isAddOrEdit={addOrEdit} editAddIsOn={showEditAddModal} setEditAddIsOn={setShowEditAddModal} />
            <DeleteModal deleteIsOn={showDeleteModal} setDeleteIsOn={setShowDeleteModal} />
            <MovieList 
              editAction={handleEdit}
              deleteAction={handleDelete}
              detailAction={handleDetail}
              movies={movies}
            />
          </ErrorBoundary>
        <Footer light="roulette">netflix</Footer>
      </main>
  );

}