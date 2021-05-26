import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import  SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="Widgets">
            <div className="widget__input">
                <SearchIcon className="widgets__SeachIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="Widgets__widgetContainer">
                <h2>what's happening</h2>
                <TwitterTweetEmbed tweetId={"1391672118023135239"} />
                <TwitterTimelineEmbed
                sourceType="profile"
                ScreenName="Anushka sharma"
                options={{height: 400}}
                />
                <TwitterShareButton
                url={"https://www.facebook.com/AnushkaSharmaOfficial"}
                options={{text: "#react is awesome",via:"parvinder"}}
                />
            </div>
        </div>
    )
}

export default Widgets
