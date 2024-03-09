import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { useState } from 'react';

function ApplicationForm() {
    // const [fileName, setFileName] = useState("Upload Boundary File");

    return ( 
        <Form>
            <Row className='mb-3'>
                <Form.Group className='mb-3' as={Col}>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type='text' placeholder='Surname' />
                </Form.Group>
                <Form.Group className='mb-3' as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder='First Name' />
                </Form.Group>
                <Form.Group className='mb-3' as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder='Last Name' />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Ref NO and Position Name" />
            </Form.Group>
            
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Upload your folder containing CV and certificates.</Form.Label>
                <Form.Control type="file" size="sm" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to CIPK terms of agreement." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ApplicationForm;