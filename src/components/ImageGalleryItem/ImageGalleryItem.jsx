import { Li, Img } from './ImageGalleryItem.styled';



export const ImageGalleryItem = ({ array: { webformatURL, largeImageURL }, toggleModal }) => {
    return (
        <Li onClick={() => { toggleModal(largeImageURL) }} className="gallery-item">
        <Img src={webformatURL} alt="" />
    </Li>
    )
};

