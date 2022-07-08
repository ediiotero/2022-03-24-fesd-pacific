import React, {useState, useEffect} from 'react'
import List from '../components/List'

// const testUsers = [
//     {id: 1, name: "Leanne Graham", email: "Sincere@april.biz"},
//     {id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv"},
//     {id: 3, name: "Clementine Bauch", email:"Nathan@yesenia.net"}
// ]

const Home = () => {

    const [comments, setComments] = useState([]);
    // const [count, setCount] = useState(0);

    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
        const data = await response.json();
        setComments(data)
    }

    useEffect(() => {
        // console.log('rendering');
        // document.title = `You clicked ${count} times`
        getData();
    }, [])

  return (
    <div>
        {/* <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button> */}
       
        {comments.map((comment) => {
            return <List key={comment.id} name={comment.name} email={comment.email}/>
        })}
    </div>
  )
}

export default Home