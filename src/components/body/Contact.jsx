/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import '../../public/assets/css/main.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InfoItem = ({ iconClass, title, content }) => (
    <div className="info-item d-flex">
      <i className={`bi ${iconClass} flex-shrink-0`}></i>
      <div>
        <h4>{title}:</h4>
        <p>{content}</p>
      </div>
    </div>
);
  
const ContactInfo = () => (
<>
    <InfoItem iconClass="bi-geo-alt" title="Location" content="Mombasa - Malindi Highway, Prison Road, Close to Public Works" />
    <InfoItem iconClass="bi-envelope" title="Email" content="info@cipk.com" />
    <InfoItem iconClass="bi-phone" title="Call" content="+25189 55488 55" />
    <InfoItem iconClass="bi-clock" title="Open Hours" content="Mon-Sat: 8:30 AM - 11:30 PM" />
</>
);
  

function Contact() {

    return (
        <>
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
            <h2>Contact</h2>
            <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
            </div>

            <div className="row gx-lg-0 gy-4">

            <div className="col-lg-4">

                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                <ContactInfo />
                </div>

            </div>

            <div className="col-lg-8">
                <Form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <Row className="row mb-3">
                        <Form.Group className="mb-3" as={Col}>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type='text' className='form-control col-md-6 form-group' placeholder="Your Name" required id='name' />
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' className='form-control col-md-6 form-group' placeholder="Email" required id='email' />
                        </Form.Group>
                    </Row>
                    <Form.Group className="form-group mt-3" id='email'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type='text' className="form-control" placeholder="Subject" required />
                    </Form.Group>
                    <Form.Group className="form-group mt-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type='textarea' row='5' className="form-control" placeholder="Message" required />
                    </Form.Group>
                   
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className='text-center'>
                        <Button type="submit" variant='primary'>
                            Send Message
                        </Button>
                    </div>
                </Form>
            </div>

            </div>

        </div>
        </section>
        </>
    )
}

export default Contact;