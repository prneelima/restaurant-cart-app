import React from 'react';
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';

function ButtonComponent(props) {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(props.btnClick(props.item));
    }

  return (
    <div className="Input_Box">
      <Button variant="primary" className='btnColor' onClick={handleClick}>{props.ButtonText}</Button>
    </div>
  );
}
export default ButtonComponent;