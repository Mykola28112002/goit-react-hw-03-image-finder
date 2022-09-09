import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({array,toggleModal}) => {
    if (array !== undefined) {
        return (<Ul className="ImageGallery">
        {array.map((array) => (<ImageGalleryItem toggleModal={toggleModal}  array={array}  key={array.id} />))}
    </Ul>)
    }
};


ImageGallery.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};