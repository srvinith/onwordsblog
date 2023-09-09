import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from 'react-router-dom'

const CreateBlog = () => {

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("")
    console.log(value)
   
    return (
        <>
            <div className="container">
                <form action="/">

                    <div className="editor-container">
                        <div className="top-editor-btn">
                            <button className="btn btn-primary">Darft & Save</button>
                            <Link to="/blogstore"> <button className="btn btn-primary">Publish</button></Link>
                        </div>
                        <input type="text" required placeholder="Title" className="title-inp"
                            onChange={event => setTitle(event.target.value)}
                        />
                        <p><input type="hidden" value={title} /></p>
                        <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="The content starts here..." className="text-editor" />
                    </div> 
                </form>
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <label for="tags">Tags (comma separated):</label>
                            <input type="text" id="tags" name="tags" />
                        </form>
                        <select name="category" id="category">
                            <option value="" disabled selected>Select a category or enter a new one</option>
                        </select>
                    </div>
                </div>

            </div>
           

        </>

    )
}

export default CreateBlog


