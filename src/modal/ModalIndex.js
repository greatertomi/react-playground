import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import {ModalStyles} from './modalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

const ModalIndex = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Container>
        <Button onClick={openModal}>
          I'm a modal
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <ModalStyles />
      </Container>
    </>
  );
};

export default ModalIndex;
