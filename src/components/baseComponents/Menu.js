import React from 'react';
import { useSelector } from 'react-redux';
import withHeader from '../../hoc/withHeader';
import addToCart  from '../../actions/CartAction';
import {Col,Row} from 'react-bootstrap';
import '../../App.css';
import ButtonComponent from './ButtonComponent';

const Menu = () => {
  const menuItems = useSelector(state => state.rest.menuItems);
  return (
    <div className='Menu'> 
    <Row lg={12} className="rowTitle">
      <Col lg={2}>
        <h4>S.NO</h4>
      </Col>
      <Col lg={2}>
        <h4>Items</h4>
      </Col>
      <Col lg={2}>
        <h4>Price</h4>
      </Col>
      <Col lg={3}>
        <h4>Description</h4>
      </Col>
      <Col lg={3}>
        <h4>Add</h4>
      </Col>
    </Row>
      {menuItems.map((item) => (
        <div key={item.id}>
        <Row lg={12} style={{marginTop : '10px'}} >
          <Col lg={2}>
              <p>{item.id}</p>
          </Col>
          <Col lg={2}>
              <h5>{item.name}</h5>
          </Col>
          <Col lg={2}>
            <h5>{item.price}</h5>
          </Col>
          <Col lg={3}>
              <p>{item.description}</p>
          </Col>
          <Col lg={3}>
          <ButtonComponent btnClick={addToCart} item={item} ButtonText='Add to Cart' />
          </Col>
        </Row>
        </div>
      ))}
    </div>
  );
};

export default withHeader(Menu,'Menu');