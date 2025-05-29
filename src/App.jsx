import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const originalFormData = { author: "", title: "", body: "", public: false };
  const [formData, setFormData] = useState([]);
  const [newPost, setNewPost] = useState(originalFormData);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setNewPost({
      ...newPost,
      [name]: name === "public" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPostsArray = [...formData, newPost];
    setFormData(newPostsArray);
    setNewPost(originalFormData);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", newPost)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <label htmlFor="author-input" className="form-label">
                Autore
              </label>
              <input
                id="author-input"
                name="author"
                type="text"
                className="form-control"
                value={newPost.author}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label htmlFor="title-input" className="form-label">
                Titolo
              </label>
              <input
                id="title-input"
                name="title"
                type="text"
                className="form-control"
                value={newPost.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="post-text-area" className="form-label">
                Testo
              </label>

              <textarea
                id="post-text-area"
                name="body"
                className="form-control"
                value={newPost.body}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col">
              <div className="form-check">
                <label htmlFor="post-public-input">Make the post public</label>
                <input
                  id="post-public-input"
                  name="public"
                  type="checkbox"
                  className="form-check-input"
                  checked={newPost.public}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="btn btn-primary">Invia</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
