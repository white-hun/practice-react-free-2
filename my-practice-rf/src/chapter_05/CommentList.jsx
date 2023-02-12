import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name="White" comment="My first Component" />
            <Comment name="카리나" comment="후나 힘내에엥~" />
            <Comment name="사나" comment="힘내쟈아아앙><" />
        </div>
    );
}

export default CommentList;