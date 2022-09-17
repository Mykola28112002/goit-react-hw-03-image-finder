import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { getPixabay } from '../api';
import { Component } from 'react';
import { Div } from './App.styled';


import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    array: [],
    showModal: false,
    img: '',
    showLoader: false,
  };

  onSabmit = ({ name }) => {
    this.setState(prevState => ({
      array: [],
      page: 1,
      searchQuery: name,
      showLoader: true,
    }))
    setTimeout(() => {
      this.setState(prevState => ({
      showLoader: false,
    }))
    }, 500);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.fethGetPixabay();
    }
}
  fethGetPixabay = () => {
    if (this.state.searchQuery !== '') {
      getPixabay(this.state.searchQuery, this.state.page)
        .then(result => {
          
          this.setState(prevState => ({
            array: [...prevState.array, ...result],
          }))
        
          if (result.length === 0) {
             this.setState(prevState => ({
            }))
            alert(`Sorry, there are no images matching your search query: ${this.state.searchQuery}. Please try again.`)
           
          }  
        })
        .catch(error => {
          console.log(error.Status)
          if (error) {
            alert("We're sorry, but you've reached the end of search results.")
            
          }
        });
    }
  }
  
  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      showLoader: true,
    }))
    setTimeout(() => {
      this.setState(prevState => ({
      showLoader: false,
    }))
    }, 500);
  };

  toggleModal = (currentImg) => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      img: currentImg,
    }))
  };

  render() { 
    const { array, showModal, img, showLoader } = this.state
    return <Div>
        <Searchbar onSubmit={this.onSabmit}/>
      {array === [] && (<ImageGallery array={array} toggleModal={this.toggleModal}/>)}
      {array.length !== 0 && (<Button clickLoadMore={this.handleClickLoadMore}></Button>)}
        {showModal && (<Modal toggleModal={this.toggleModal}>
          <img src={img} alt="" />
      </Modal>)}
      {showLoader && <Loader/> }
     </Div>
  };
} 