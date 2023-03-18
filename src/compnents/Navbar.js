import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { MangeModel } from '../Feature/Model';
import PopupModel from './PopupModel';
import Button from 'react-bootstrap/esm/Button';
import { BsCartCheckFill } from "react-icons/bs";
import './Navbar.css';

function ColorSchemesExample() {

    const Dispatch = useDispatch();

    // console.log(useSelector((store)=>console.log(store)))

    const { amount } = useSelector((store) => store.cart);
    // useSelector((store) => console.log(store.cart,"cart"));
    const { modelStatus } = useSelector((store) => store.model);

    // useSelector((store) => console.log(store.model,"model"));


    // console.log(typeof(isOpen), "isOpen", isOpen);


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    {/* <div>
                        <button onClick={() => Dispatch(MangeModel(modelStatus))}>  Cart Item:{amount}</button>
                    </div> */}


                    <Button className="me-2 mb-2 Cart-button" onClick={() => {amount > 0 ? Dispatch(MangeModel(true)) :alert('Please add item in the cart...!')}}>
                        <BsCartCheckFill/><span>{amount}</span> </Button>

                </Container>
            </Navbar>








            <PopupModel />



        </>
    );
}

export default ColorSchemesExample;