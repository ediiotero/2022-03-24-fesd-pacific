import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const About = () => {
    const navigate = useNavigate();
    const {username} = useParams();

  return (
    <>
        <h1>This is the About page</h1>
        <h3>Welcome {username}</h3>
        <Button 
            variant="danger" 
            onClick={() => navigate('/')}>
            Go to Home
        </Button>
    </>
  )
}

export default About