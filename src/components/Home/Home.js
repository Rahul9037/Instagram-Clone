import React, { useState, useEffect } from 'react';
import './Home.css';
import Post from '../Post/Post';
import db from '../../firebase/firebase';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        console.log(posts);
        db.collection('posts').onSnapshot( snapShot => 
            setPosts(
            snapShot.docs.map( doc => (
                doc.data())
            ))
        )
    } , []);

    return (
        <div className="home">
            <div className="home__header">
                <img src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="home__headerImage" />
            </div>
            <h1>Hii There!!!</h1>
            { 
            posts.map( 
                post => 
                (<Post 
                key={post.username}    
                username={post.username} 
                caption={post.caption} 
                imageUrl={post.imageUrl} />
                ))
            }
        </div>
    )
}

export default Home
