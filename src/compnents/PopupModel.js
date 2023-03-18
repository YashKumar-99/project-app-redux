import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MangeModel } from '../Feature/Model';

import { useSelector, useDispatch } from 'react-redux';
import Summary from './Summary';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';




function PopupModel() {



  const { modelStatus } = useSelector((store) => store.model);
  const { total } = useSelector((store) => store.cart);








  const Dispatch = useDispatch();




  return (
    <>


      <Modal show={!modelStatus} fullscreen={!modelStatus} onHide={() => Dispatch(MangeModel(false))}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Summary />

          <hr />

          <Container>
            <Row>
              <Col>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <div>
                    <b>Total:- </b>
                  </div>
                  <div><b>${total.toFixed(2) }</b></div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>


    </>
  );
}

export default PopupModel;