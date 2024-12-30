import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function AddEmployee() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [roleId,setRoleId] = useState('');
  const [department, setDepartment] = useState('');
  const [location,setLocation] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [img, setImg] = useState(null);
  const [status,setStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      setShow(false);
      handleAddEmployee();
    }
  }

  const handleStatusChange = (e) => {
    const inp = e.target.value;
    if(inp === 1){
      setStatus(true)
    }else if(inp === 2){
      setStatus(false)
    }
  }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setImgPreview(URL.createObjectURL(file));
  //   console.log(imgPreview);
  //   setImg(file);
  // }


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file); 
    }
  };

  const handleAddEmployee = () => {
    console.log({
      name,
      email,
      roleId,
      department,
      location,
      joinDate,
      img,
    });
  }

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
          <Form noValidate validated = {validated} onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="">
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control 
                type="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Name" 
                required/>
            </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
            <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
            >
                <Form.Control 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" 
                required/>
            </FloatingLabel>
            </Form.Group>

            <Form.Group className='d-flex gap-2 mb-2'>

                <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)} className='d-inline' aria-label="Default select example" required>
                    <option value="">Department</option>
                    <option value="IT">IT</option>
                    <option value="Product Engg">Product Engg</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Management">Management</option>
                </Form.Select>

                <Form.Select value={roleId} onChange={(e) => setRoleId(e.target.value)} className='d-inline' aria-label="Default select example" required>
                    <option value= "">Role</option>
                    <option value="200">Customer Service Manager</option>
                    <option value="201">Ux Designer</option>
                    <option value="202">Assistant BackEnd Developer</option>
                    <option value="203">Human Resource Manager</option>
                    <option value="204">Front End Developer</option>
                    <option value="205">Senior Developer</option>
                    <option value="206">Business Analyst</option>
                    <option value="207">Full-Stack Developer</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='d-flex gap-2 mb-2'>
                <Form.Select value={location} onChange={(e) => setLocation(e.target.value)} className='d-inline' aria-label="Default select example" required>
                    <option value="">Location</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Mumbai">Mumbai</option>
                </Form.Select>

                <Form.Control 
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
                className="d-inline w-100 px-2" 
                type="date" 
                required
              />

                <Form.Select onChange={handleStatusChange} className='d-inline' aria-label="Default select example" required>
                    <option value="">Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                </Form.Select>
            </Form.Group>


            <Form.Group
              className="mb-3"
              controlId=""
            >
              <label htmlFor="" className='ms-1 mt-2'>Employee Image</label>
              <Form.Control
              onChange={handleFileChange}
              type="file" 
              accept='image/*'
              required/>
            </Form.Group>

            <img className='img-fluid img-thumbnail' src={img} alt="Employee Image" />
           
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' className="filter-apply px-3 py-2">
            Save Changes
          </Button>
        </Modal.Footer>

        </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddEmployee