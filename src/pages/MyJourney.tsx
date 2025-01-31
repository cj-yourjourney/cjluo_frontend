import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import startupImage from '../images/myJourney/startup-image-1.jpg'

const MyJourney: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 display-5 fw-bold">My Journey</h2>

      {/* Startup CJ Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={startupImage} />
            <Card.Body className="p-4">
              <Card.Title className="fs-2 fw-bold mb-4">
                Startup CJ (2016 - 2018)
              </Card.Title>
              <Card.Text className="fs-5 mb-4">
                In 2015, I moved to the San Francisco Bay Area, where I was
                immersed in a culture of innovation and entrepreneurship.
              </Card.Text>
              <Card.Text className="fs-5 mb-4">
                I connected with talented software engineers from companies like
                Google and Pinterest, and together, we launched a startup called
                OH!YA—an iOS app for Asian homemade food delivery.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="px-4">
          <h3 className="fs-2 fw-bold mb-4">
            The Beginning of My Tech Adventure
          </h3>
          <p className="fs-5 mb-4">
            This was my first real exposure to coding. While I wasn’t a
            developer at the time, working closely with engineers sparked my
            curiosity about technology.
          </p>
          <p className="fs-5 mb-4">
            After 18 months of hard work, we had to shut down the startup, but
            the experience planted the seed for my future in tech.
          </p>
        </Col>
      </Row>

      {/* Tour Guide/DJ CJ Section */}
      <Row className="align-items-center mb-5 flex-md-row-reverse">
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="shadow-sm border-0">
            <Card.Img
              variant="top"
              src="https://placehold.co/600x400?text=Tour+Guide%2FDJ+CJ"
            />
            <Card.Body className="p-4">
              <Card.Title className="fs-2 fw-bold mb-4">
                Tour Guide/DJ CJ (2019 - 2022)
              </Card.Title>
              <Card.Text className="fs-5  mb-4">
                I spent these years traveling, guiding tours, and DJing, sharing
                unforgettable experiences with people from around the world.
              </Card.Text>
              <Card.Text className="fs-5 mb-4">
                This phase of my journey was all about exploration,
                communication, and storytelling—skills that would later help me
                transition into tech.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="text-center px-4">
          <h3 className="fs-2 fw-bold mb-4">
            Entertainment & Exploration
          </h3>
          <p className="fs-5 mb-4">
            Working as a tour guide and DJ was all about creating connections
            and experiences.
          </p>
          <p className="fs-5 mb-4">
            I learned how to adapt, entertain, and engage—essential skills for
            any career.
          </p>
        </Col>
      </Row>

      {/* Developer CJ Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="shadow-sm border-0">
            <Card.Img
              variant="top"
              src="https://placehold.co/600x400?text=Developer+CJ"
            />
            <Card.Body className="p-4">
              <Card.Title className="text-success fs-3 fw-bold mb-4">
                Developer CJ (2023 - Present)
              </Card.Title>
              <Card.Text className="fs-5 text-muted mb-4">
                Transitioning into tech, I became a self-taught full-stack
                developer. I built applications, worked with modern frameworks,
                and turned my curiosity into a profession.
              </Card.Text>
              <Card.Text className="fs-5 text-muted mb-4">
                Every project I work on is a step forward in this exciting
                journey.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="text-center px-4">
          <h3 className="text-success fs-2 fw-bold mb-4">
            From Passion to Profession
          </h3>
          <p className="fs-5 mb-4">
            Learning to code was like unlocking a new world of possibilities.
          </p>
          <p className="fs-5 mb-4">
            Now, I build, create, and solve problems daily, combining my past
            experiences with my future aspirations.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default MyJourney
