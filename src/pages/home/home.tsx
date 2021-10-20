import * as React from "react";
import { CustomAlert } from "uikit/molecules/CustomAlert";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";
import { MainBanner } from "uikit/molecules/MainBanner";
import { mock } from "assets/movies";
import { MovieList } from "uikit/molecules/MovieList";
import CloseIcon from "uikit/icons/close-button.svg"
import ReactModal from "react-modal";

import "./home.scss";

ReactModal.setAppElement('#root');

export const Home = () => {

  let initialState = mock;
  const [ showModal, setShowModal ] = React.useState(false)
  const [ movies, setmovies ] = React.useState(initialState);

  const handleFilter = (id:string) => {
    let result = movies.filter((el:any)=> el.id == id);
    let filter = movies.indexOf(result[0]);
    return movies[filter]
  }

  const handleDelete = (deleteId:string) => {
    console.log("Delete", handleFilter(deleteId));
    setShowModal(true)
  }

  const handleEdit = (editId:string) => {
    console.log("Edit", handleFilter(editId));
  }
  
  return (
    <main>
        <MainBanner />
          <ErrorBoundary>
            <ReactModal 
              isOpen={showModal}
              className="Modal"
              overlayClassName="Overlay"
            >
            <img src={CloseIcon} alt="Close Modal" className="CloseIcon" onClick={()=>setShowModal(false)}/>
            <CustomAlert legend="Delete MOVIE" content="Are you sure you want to delete this movie?" action="CONFIRM"/>
            </ReactModal>
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