import React from "react";
import { useSelector } from "react-redux";
import withHeader from "../../hoc/withHeader";
import {Col,Row} from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector(state => state.rest.cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
       <Row lg={12} className="rowTitle">
        <Col lg={4}>
          <h4>S.NO</h4>
        </Col>
        <Col lg={4}>
          <h4>Items</h4>
        </Col>
        <Col lg={4}>
          <h4>Description</h4>
        </Col>
      </Row>
      {cartItems.map((item) => (
          <Row lg={12} style={{marginTop : '10px'}}>
          <Col lg={4}>
              <p>{item.id}</p>
          </Col>
          <Col lg={4}>
              <h5>{item.name}</h5>
          </Col>
          <Col lg={4}>
              <p>{item.description}</p>
          </Col>
          </Row>
      ))}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default withHeader(Cart, 'Cart');