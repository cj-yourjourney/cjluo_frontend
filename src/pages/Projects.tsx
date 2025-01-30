import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import projectImage1 from '../images/project1.png' // Replace with actual image path
import projectImage2 from '../images/project2.png' // Replace with actual image path
import projectImage3 from '../images/project3.png' // Replace with actual image path (Add an image for Easy Apply)

const technologies = [
  'React.js',
  'Redux',
  'Bootstrap',
  'JavaScript',
  'HTML',
  'CSS',
  'Python',
  'Django (RESTful APIs)'
]

const projects = [
  {
    title: 'E-commerce Site',
    description:
      'Full stack site for product creation, shopping cart, and PayPal checkout.',
    link: 'https://shoppro-488794eef662.herokuapp.com/',
    github: { frontend: 'https://github.com/cj-yourjourney/proshop' },
    image: projectImage1,
    technologies
  },
  {
    title: 'Vacation Home Rental Website',
    description: 'Platform for creating and booking vacation homes',
    link: 'https://cozy-home-3031533847cc.herokuapp.com/',
    github: { frontend: 'https://github.com/cj-yourjourney/cozy_home' },
    image: projectImage2,
    technologies
  },
  {
    title: 'Easy Apply',
    description:
      'Simplify your job application process with our autofill feature. Fill out applications faster and easier than ever before.',
    link: 'http://easy-apply-react-app.s3-website-us-west-1.amazonaws.com/',
    github: {
      frontend: 'https://github.com/cj-yourjourney/easy-apply-react',
      backend: 'https://github.com/cj-yourjourney/easy_apply_backend'
    },
    image: projectImage3, // Add an appropriate image for this project
    technologies
  }
]

const Projects: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={project.image} />
              </a>
              <Card.Body>
                <Card.Title className="text-primary-emphasis">
                  {project.title}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex flex-wrap mb-2">
                  {project.technologies?.map((tech, idx) => (
                    <Badge
                      key={idx}
                      bg="info"
                      className="me-1 mb-1 text-white p-2"
                      style={{ fontSize: '0.9rem', borderRadius: '10px' }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="primary"
                  href={project.link}
                  target="_blank"
                  className="me-2"
                >
                  Live Demo
                </Button>
                {project.github?.frontend && !project.github?.backend && (
                  <Button
                    variant="secondary"
                    href={project.github.frontend}
                    target="_blank"
                  >
                    View Code
                  </Button>
                )}
                {project.github?.frontend && project.github?.backend && (
                  <>
                    <Button
                      variant="secondary"
                      href={project.github.frontend}
                      target="_blank"
                      className="me-2"
                    >
                      Frontend Code
                    </Button>
                    <Button
                      variant="secondary"
                      href={project.github.backend}
                      target="_blank"
                    >
                      Backend Code
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects
