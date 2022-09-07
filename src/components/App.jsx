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
    
  };
  componentDidUpdate(prevProps, prevState) {
    if ( prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.fethGetPixabay();
    }
  }
  fethGetPixabay = () => {
    if (this.state.searchQuery !== '') {
      getPixabay(this.state.searchQuery, this.state.page)
        .then(friends => {
        if (friends.length === 0) {
          alert(`Sorry, there are no images matching your search query: ${this.state.searchQuery}. Please try again.`)
        }
        this.setState(prevState => ({
          array: [...prevState.array, ...friends],
        }))
        this.setState(prevState => ({
          showLoader: false,
        }))
        
      })
        .catch(error => {
          console.error(error.message)
          if (error) {
            alert("We're sorry, but you've reached the end of search results.")
            this.setState(prevState => ({
              showLoader: false,
            }))
          }
        });
    }
  }
  
  handleClickLoadMore = () => {
    console.log(this.state.showLoader)
    this.setState(prevState => ({
      page: prevState.page + 1,
      showLoader: true,
    }))
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
      <ImageGallery array={array} toggleModal={this.toggleModal} />
      {array.length !== 0 && (<Button clickLoadMore={this.handleClickLoadMore}></Button>)}
        {showModal && (<Modal toggleModal={this.toggleModal}>
          <img src={img} alt="" />
      </Modal>)}
      {showLoader && <Loader/> }
     </Div>
  };
} 