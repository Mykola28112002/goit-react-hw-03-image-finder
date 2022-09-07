import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';

export const ImageGallery = ({array,toggleModal}) => {
    if (array !== undefined) {
        return (<Ul className="ImageGallery">
        {array.map((array) => (<ImageGalleryItem toggleModal={toggleModal}  array={array}  key={array.id} />))}
    </Ul>)
    }
};
