import React,{ useState, useEffect } from 'react'
import TweetBox from './TweetBox';
import Post from './Post';
import "./Feed.css";
import db from './Firebase';

function Feed() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        //    code..
        db.collection('posts').onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>doc.data()))
        );
    },[]);
    return (
        <div className="feed">
            {/* Header */}
             <div className="feed__header">
                 <h2>Home</h2>
             </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
        
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {posts.map(post=>(
            <Post 
            displayName={post.displayName}
            username={post.username} 
            verfied={post.verified} 
            text={post.text} 
            avatar={post.avatar}
            image={post.image}
            />
            ))}
        </div>
    );
}

export default Feed
