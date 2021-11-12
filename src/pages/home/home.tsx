import * as React from "react";

import { DeleteModal, EditModal, MovieDetail, MovieList, MainBanner } from "uikit/molecules";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";
import { scrollToTop } from "lib";
import { UnorderedList } from "uikit/molecules/UnorderedList";
//Redux
import { connect } from 'react-redux';
import { ListElement } from "uikit/atoms/ListElement";
import { loadMoviesAsyncAction, loadMoviesSortAsyncAction, loadMoviesSortOrderAsyncAction } from 'store/rootReducer';

import "./home.scss";
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const Home = ({ moviesData, fetchMovies, sortMoviesByGenres }: any) => {
  const [ addOrEdit, setAddOrEdit ] = React.useState("");
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false);
  const [ showEditAddModal, setShowEditAddModal ] = React.useState(false);
  const [ idToDisplayModal, setIdToDisplayModal ] = React.useState();
  const moviesFilters = ["all", "Documentary", "comedy", "horror", "crime"];  


  React.useEffect(() => {
    fetchMovies()
  }, []);

  const handleFilter = (id:string) => {
    let result = moviesData.filter((el:any)=> {
      return el.id == id
    });
    let filter = moviesData.indexOf(result[0]);
    return moviesData[filter];
  }

  const handleSortByGenres = (genre: string): void => {
    sortMoviesByGenres(genre)
  }

  const handleDelete = (deleteId:string) => {
    console.log("Delete", handleFilter(deleteId));
    setShowDeleteModal(true)
  }
  
  const handleEdit = (editId:string) => {
    console.log("Handle Edit Function Fired");
    setShowDeleteModal(true)
    //setShowEditAddModal(true);
    //setAddOrEdit("Edit");
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

  return (
    <main>
        {idToDisplayModal ? <MovieDetail searchAction={handleSearch} movieToDisplay={idToDisplayModal} /> : <MainBanner addAction={handleAdd} /> }
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <UnorderedList>
            {moviesFilters.map(( filter:string )=>{
                return <ListElement key={filter} onClick={() => handleSortByGenres(filter)}>{filter}</ListElement>
            })}
        </UnorderedList>
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
  moviesData: state.movies.movies
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: () => { dispatch(loadMoviesAsyncAction()) },
  sortMoviesByGenres: (genres: string) => { dispatch(loadMoviesSortAsyncAction(genres)) },
  sortMoviesByOrder: (order: string)=> { dispatch(loadMoviesSortOrderAsyncAction(order)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);