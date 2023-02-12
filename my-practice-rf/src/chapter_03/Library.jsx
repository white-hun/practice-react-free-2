import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만나는 React" numOfPage={300} />
            <Book name="처음 만나는 Node.js" numOfPage={300} />
            <Book name="처음 만나는 Java Script" numOfPage={300} />
        </div>
    );
}

export default Library;