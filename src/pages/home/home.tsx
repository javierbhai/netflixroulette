import * as React from "react";

import { Select } from "uikit/atoms/Select";
import { DeleteModal, EditModal, MovieDetail, MovieList, MainBanner } from "uikit/molecules";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";
import { scrollToTop } from "lib";

//Redux
import { loadMoviesAsyncAction, loadMoviesSortAsyncAction, loadMoviesSortOrderAsyncAction } from 'store/rootReducer';
import { connect } from 'react-redux';
import "./home.scss";

export const Home = ({ isMoviesLoading, moviesData, fetchMovies, sortMoviesByGenres, sortMoviesByOrder }: any) => {
  const [ addOrEdit, setAddOrEdit ] = React.useState("");
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false);
  const [ showEditAddModal, setShowEditAddModal ] = React.useState(false);
  const [ idToDisplayModal, setIdToDisplayModal ] = React.useState();

  React.useEffect(() => {
    fetchMovies()
  }, []);

  // React.useEffect(() => {
  //   console.log(moviesData)
  // }, [moviesData]);

  const handleFilter = (id:string) => {
    let result = moviesData.filter((el:any)=> el.id == id);
    let filter = moviesData.indexOf(result[0]);
    return moviesData[filter];
  }
  
  const handleSortByGenres = (genre: string): void => {
    sortMoviesByGenres(genre)
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>): String => {
    sortMoviesByOrder(event.currentTarget.value)
    console.log(event.currentTarget.value);
    return event.currentTarget.value
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

  return (
    <main>
        {idToDisplayModal ? <MovieDetail searchAction={handleSearch} movieToDisplay={idToDisplayModal} /> : <MainBanner addAction={handleAdd} /> }
          <li><button onClick={() => handleSortByGenres('all')}>all</button></li>
          <li><button onClick={() => handleSortByGenres('Documentary')}>Documentary</button></li>
          <li><button onClick={() => handleSortByGenres('Comedy')}>Comedy</button></li>
          <li><button onClick={() => handleSortByGenres('Horror')}>Horror</button></li>
          <li><button onClick={() => handleSortByGenres('crime')}>crime</button></li>

          <select onChange={handleChange} name="select" id="sortDate">
            <option value="">RELEASE DATE</option>
            <option value="asc">Ascendant</option>
            <option value="desc">Descendant</option>
          </select>

          <ErrorBoundary>
            <EditModal isAddOrEdit={addOrEdit} editAddIsOn={showEditAddModal} setEditAddIsOn={setShowEditAddModal} />
            <DeleteModal deleteIsOn={showDeleteModal} setDeleteIsOn={setShowDeleteModal} />
            <MovieList 
              editAction={handleEdit}
              deleteAction={handleDelete}
              detailAction={handleDisplayMovieDetail}
              movies={moviesData}
            />
          </ErrorBoundary>
        <Footer light="roulette">netflix</Footer>
      </main>
  );
}

const mapStateToProps = (state: any) => ({
  moviesData: state.movies.movies,
  isMoviesLoading: state.movies.loading
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: () => { dispatch(loadMoviesAsyncAction()) },
  sortMoviesByGenres: (genres: string) => { dispatch(loadMoviesSortAsyncAction(genres)) },
  sortMoviesByOrder: (order: string)=> { dispatch(loadMoviesSortOrderAsyncAction(order)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

