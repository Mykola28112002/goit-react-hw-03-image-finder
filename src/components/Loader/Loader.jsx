import { RotatingLines } from 'react-loader-spinner'
import { Div } from './Loader.styled'

export const Loader = () => {
    return (<Div>
        <RotatingLines strokeColor="blue"></RotatingLines>
    </Div>
    
    )
};