import React , { useState } from "react";
import './TweetBox.css';
import { Avatar, Button} from "@material-ui/core";
import db from'./Firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage]=useState("");
    const [tweetImage, setTweetImage]=useState("");
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'parvinder singh',
            username: 'pvsingh',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
            'https://www.fillmurray.com/500/900',
             });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src='https://www.fillmurray.com/500/900' size={100} backgroundColor='rgba(0,0,0,0)' />
                <input 
                onChange = {(e)=>setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="whats happening?" type="text" />
                </div>
                <input 
                value={tweetImage}
                onChange={(e)=>setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Enter image url" type="text" />
                <Button onclick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
