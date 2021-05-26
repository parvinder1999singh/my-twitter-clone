import React from 'react'
import './sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './sidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Button } from '@material-ui/core'

function sidebar() {
    return (
        <div className="sidebar">
            {/* twitter-icon */}
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={SearchIcon} text="More" />
            



            {/* sidebarOtion */}
            {/* sidebarOtion */}
            {/* sidebarOtion */}
            {/* sidebarOtion */}
            {/* sidebarOtion */}
            {/* sidebarOtion */}

            {/* Button-> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default sidebar
