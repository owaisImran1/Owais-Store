import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style.css'

function DeleteCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Delete Category
      </Button>

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Body className='d-flex align-items-center justify-content-center'>
          <form className="form">
            <p className="title">Delete Category </p>
            <p className="message">Delete Category now and get full access to our app. </p>
            <div className="flex">
              <label className='w-100'>
                <input required="true" placeholder="" type="text" className="input" />
                <span>Category Name</span>
              </label>
            </div>
            <button className="submit">Delete Category</button>
          </form>

        </Modal.Body>

      </Modal>
    </>
  );
}

export default DeleteCategory;