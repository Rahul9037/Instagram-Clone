import React from 'react';
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';

function Post({username , caption , imageUrl}) {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar alt="Rahul S Kumar" src="/static/images/avatar/1.jpg" className="post__avatar"/>
            <h4>{username}</h4>
            </div>
            <img className="post__image" src={imageUrl}/>
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
