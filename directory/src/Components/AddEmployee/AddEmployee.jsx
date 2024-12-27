import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function AddEmployee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button className='add' onClick={handleShow}>
            <img className='me-2' src="/Interface/Add.svg" alt="" />
            <span className='btn-text'>ADD EMPLOYEE</span>
        </button>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="">
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control type="name" placeholder="Name" />
            </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
            <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
            </Form.Group>

            <Form.Group className='d-flex gap-2 mb-2'>
                <Form.Select className='d-inline' aria-label="Default select example">
                    <option>Role</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                <Form.Select className='d-inline' aria-label="Default select example">
                    <option>Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='d-flex gap-2 mb-2'>
                <Form.Select className='d-inline' aria-label="Default select example">
                    <option>Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                <input className='d-inline w-100 px-2' type="date" name="" id="" />
            </Form.Group>


            <Form.Group
              className="mb-3"
              controlId=""
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' className="filter-apply px-3 py-2" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddEmployee