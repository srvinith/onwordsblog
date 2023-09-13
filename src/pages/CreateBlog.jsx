import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [blogText, setBlogText] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [message, setMessage] = useState('');

  const [categories, setCategories] = useState([]);
  const [user_id, setUser_id] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://192.168.1.8:8000/get_all_blogs');
        console.log("Response:", response);

        if (response.status === 200) {
          const blogData = response.data;
          console.log("blogData:", blogData);

          // Check if all_blogs and categories exist in blogData
          if (blogData && blogData.all_blogs && blogData.all_blogs.length > 0 && blogData.categories) {
            setCategories(blogData.categories);
          } else {
            console.error("Categories not found in response data.");
          }
        } else {
          console.error('An error occurred while fetching categories.');
        }
      } catch (error) {
        console.error('An error occurred while fetching category.', error);
      }
    };

    fetchCategories();

    // Get the user_id from cookies and set it in the state
    const user_idFromCookies = Cookies.get('user_id');
    setUser_id(user_idFromCookies);
  }, []);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  const handleCreateBlog = async () => {
    try {
      const payload = {
        title,
        blog_text: blogText,
        tags: tags.split(',').map(tag => tag.trim()),
        category: newCategory || category,
        user_id,
      };
      console.log("payload", payload);
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
  };

  


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
                        <input type="text" />
                        <ReactQuill modules={modules} theme="snow" placeholder="The content starts here..." onChange={setBlogText} className="text-editor" />
                    </div>
                </form>
        <div className="bottom-create-inp">
          <form className="tags-inp">
            <label htmlFor="tags">Tags (comma separated):</label>
            <input
              type="text"
              id="tags"
              name="tags"
              onChange={(e) => setTags(e.target.value)}
            />
          </form>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Select a category or enter a new one
            </option>
            {categories && categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="new-category"
            name="new_category"
            placeholder="Enter a new category"
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>

      </div>
    </>
  );
};

export default CreateBlog;
