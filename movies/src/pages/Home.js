import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import moviePoster from '../images/movies.jpg'

const data = [
    {   
        id: 1,
        title: "The Batman",
        post: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fugit voluptatibus nam, at nemo dolor earum labore illo architecto ea maxime necessitatibus iste, odio deleniti totam consequuntur beatae libero."
    },
    {
        id: 2,
        title: "Top Gun",
        post: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fugit voluptatibus nam, at nemo dolor earum labore illo architecto ea maxime necessitatibus iste, odio deleniti totam consequuntur beatae libero."
    },
    {
        id: 3,
        title: "Lightyear",
        post: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fugit voluptatibus nam, at nemo dolor earum labore illo architecto ea maxime necessitatibus iste, odio deleniti totam consequuntur beatae libero."
    },
]

export default class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <main className='container App'>
                <img src={moviePoster} alt="movie poster" style={{minWidth: '100%', height: '20rem'}}/>
                <p className='mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis nostrum doloribus odit. Dolore repellendus, deleniti optio ea nobis laudantium quia neque at qui odio ex aliquid impedit blanditiis necessitatibus.</p>
                {data.map((movie)=> <Card key={movie.id} title={movie.title} text={movie.post} /> )}
            </main>
            <Footer copy="Testing this component"/>
        </div>
    )
  }
}
