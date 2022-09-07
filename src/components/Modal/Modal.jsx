import { Overlay,Modals } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
    modalClosed = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal()
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.toggleModal()
        };
    };
    render() {
        return <Overlay onClick={(e) => { this.modalClosed(e) }}>
            <Modals>
                {this.props.children}
            </Modals>
        </Overlay>
    }
};