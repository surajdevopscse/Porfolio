import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.jpg";
import Button from "react-bootstrap/Button";
const About_component = () => {
  return (
    <div id='about'>
      <div className='about'>
        <h1 className='pt-3 text-center  font-details-b pb-3'>About Me</h1>
        <hr className='hr'></hr>
        <Container>
          <Row className='pt-3 pb-5 align-items-center'>
            <Col xs={12} md={6}>
              <Row className='justify-content-center mb-2 mr-2 '>
                <Image
                  className='profile justify-content-end'
                  alt='profile'
                  src={Profile}
                  roundedCircle
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=' align-items-start p-2 my-details rounded'>
                Hi there! I am <strong>&nbsp;Suraj Yadav</strong>
                <br />A passionate programmer, born and brought up in India. I
                am a Full Stack Web Developer with React.js,
                Redux,Php,JavaScript,Jquery,Java as my tech stack.
                <br />
                In 2020, I successfully completed my Engineering with
                specialization in 'Computer Science and Technology'.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className='d-flex justify-content-center flex-wrap'>
                  <div>
                    <a href='#contact'>
                      <Button className='m-2' variant='outline-primary'>
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href='' target='_blank' rel='noopener noreferrer'>
                      <Button className='m-2' variant='outline-success'>
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href='' target='_blank' rel='noopener noreferrer'>
                      <Button className='m-2' variant='outline-dark'>
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href='' target='_blank' rel='noopener noreferrer'>
                      <Button className='m-2' variant='outline-info'>
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About_component;
