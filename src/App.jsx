import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const originalFormData = { author: "", title: "", text: "" };
  const [formData, setFormData] = useState([]);
  const [newPost, setNewPost] = useState(originalFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
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

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
            <div className="col">
              <label htmlFor="post-text-area" className="form-label">
                Testo
              </label>

              <textarea
                id="post-text-area"
                name="text"
                className="form-control"
                value={newPost.text}
                onChange={handleChange}
              ></textarea>
              <button className="btn btn-primary">Invia</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
