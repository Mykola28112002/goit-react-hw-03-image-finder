import { Buttons } from './Button.styled';

export const Button = ({clickLoadMore}) => {
    return (
    <Buttons onClick={clickLoadMore} type='button'>Load more</Buttons>
    )
};