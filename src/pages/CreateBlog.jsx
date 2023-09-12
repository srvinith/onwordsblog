import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

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


    // ============


    const [title, setTitle] = useState('');
    const [blogText, setBlogText] = useState('');
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateBlog = async () => {
        try {
            const payload = {
                title,
                blog_text: blogText,
                tags,
                category: newCategory || category,
                
                user_id: 'YourUserIDHere', // Set the user ID accordingly
            };

            const response = await axios.post('http://192.168.1.8:8000/store_blog', payload);

            if (response.status === 200) {
                setMessage('Blog created successfully.');
                // Optionally, you can redirect to another page or update the UI.
            } else {
                setMessage('An error occurred while creating the blog.');
            }
        } catch (error) {
            setMessage('An error occurred while creating the blog.');
        }

    }


    // ============



    return (
        <>
            <div className="container">
                <form action="/">
                    <p>{message && <p>{message}</p>}</p>
                    <div className="editor-container">
                        <div className="top-editor-btn">
                            <button className="btn btn-primary">Darft & Save</button>
                            <Link to="/blogstore"> <button className="btn btn-primary" onClick={handleCreateBlog}>Publish</button></Link>
                        </div>
                        <input type="text" required placeholder="Title" className="title-inp"
                            onChange={setTitle}
                        />
                        <input type="text"  />
                        <ReactQuill modules={modules} theme="snow" placeholder="The content starts here..." onChange={setBlogText} className="text-editor" />
                    </div>
                </form>
               
                <div className="bottom-create-inp">
                    <form action="" className="tags-inp">
                        <label for="tags">Tags (comma separated):</label>
                        <input type="text" id="tags" name="tags" onChange={setTags} />
                    </form>
                    <select name="category" id="category">
                        <option value={setCategory} disabled selected>Select a category or enter a new one</option>
                        <option value={setNewCategory} >{setNewCategory}</option>

                    </select>
                </div>


            </div>


        </>

    )
}

export default CreateBlog


