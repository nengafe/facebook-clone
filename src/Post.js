import React from 'react';
import { Avatar } from "@material-ui/core";
import "./Post.css";
import { AccountCircle, ChatBubble, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';

function Post({ profilePic, image, username, timestamp, message }) {
    return ( <
        div className = "post" >
        <
        div className = "post__top" >
        <
        Avatar src = { profilePic }
        className = "post__avatar" / >
        <
        div className = "post__topinfo" >
        <
        h4 > { username } < /h4> <
        p > Timestamp < /p> < /
        div >

        <
        /div>

        <
        div className = "post__bottom" >
        <
        p > { message } < /p> < /
        div > <
        div className = "post__image" >
        <
        img src = { image }
        alt = "" / > < /div>  <
        div className = "post__options" >
        <
        div className = "post__option" >
        <
        ThumbUp / >
        <
        p > Like < /p> < /
        div >


        <
        div className = "post__option" >
        <
        ChatBubble / >
        <
        p > Comment < /p> < /
        div >

        <
        div className = "post__option" >
        <
        NearMe / >
        <
        p > Share < /p> < /
        div >
        <
        div className = "post__option" >
        <
        AccountCircle / >
        <
        ExpandMoreOutlined / >
        <
        /div> <
        /div>


        <
        /div >
    )
}

export default Post;