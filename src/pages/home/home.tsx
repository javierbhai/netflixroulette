import * as React from "react";

import { DeleteModal, EditModal, MovieDetail, MovieList, MainBanner } from "uikit/molecules";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";
import { mock } from "assets/movies";
import { scrollToTop } from "lib";
import { createStore } from "redux";

import "./home.scss";

export const Home = () => {

  let initialState = mock;
  const [ addOrEdit, setAddOrEdit ] = React.useState("")
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false)
  const [ showEditAddModal, setShowEditAddModal ] = React.useState(false)
  const [ idToDisplayModal, setIdToDisplayModal ] = React.useState()

  React.useEffect(()=>{},[])
  const [ movies, setmovies ] = React.useState(initialState);  


  const handleFilter = (id:string) => {
    let result = movies.filter((el:any)=> el.id == id);
    let filter = movies.indexOf(result[0]);
    return movies[filter];
  }

  const handleDelete = (deleteId:string) => {
    console.log("Delete", handleFilter(deleteId));
    setShowDeleteModal(true)
  }
  
  const handleEdit = (editId:string) => {
    console.log("Handle Edit Function Fired");
    setShowEditAddModal(true);
    setAddOrEdit("Edit");
  }

  const handleAdd = () => {
    setShowEditAddModal(true);
    setAddOrEdit("Add");
  }

  const handleSearch = () => {
    console.log("Search Please");
  }

  const handleDisplayMovieDetail = (detailId: string) => {
    setIdToDisplayModal(handleFilter(detailId));
    scrollToTop();
  }

  React.useEffect(()=>{
    console.log(idToDisplayModal);
  }, [idToDisplayModal]);
  
  const api = async (url: string) => {
    try {
      const response = await fetch(`${url}movies`)
      const movies = await response.json();
      console.log("Movies Fetched Data.....", movies.data);
      return movies
    } catch (error) {
      throw new Error(error)
    }
  }

  api("http://localhost:4000/")

const counterReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        case "@counter/incremented":
            return state + 1

        case "@counter/decremented":
            return state - 1
        default:
            return state;
    }
}

const store = createStore(counterReducer)

const actionIncrement = {
    type:"@counter/incremented"
}

const actionDecrement = {
    type:"@counter/decremented"
}

// counterReducer(0, actionIncrement)
// counterReducer(1, actionDecrement)

store.subscribe(() => {
  store.getState()
    console.log(store.getState())
})

store.dispatch(actionIncrement)
store.dispatch(actionIncrement)
store.dispatch(actionIncrement)


  return (
    <main>
        {idToDisplayModal ? <MovieDetail searchAction={handleSearch} movieToDisplay={idToDisplayModal} /> : <MainBanner addAction={handleAdd} /> }
        {store.getState()}
          <button onClick={() =>store.dispatch(actionIncrement)}>sumar</button>
          <ErrorBoundary>
            <EditModal isAddOrEdit={addOrEdit} editAddIsOn={showEditAddModal} setEditAddIsOn={setShowEditAddModal} />
            <DeleteModal deleteIsOn={showDeleteModal} setDeleteIsOn={setShowDeleteModal} />
            <MovieList 
              editAction={handleEdit}
              deleteAction={handleDelete}
              detailAction={handleDisplayMovieDetail}
              movies={movies}
            />
          </ErrorBoundary>
        <Footer light="roulette">netflix</Footer>
      </main>
  );

}