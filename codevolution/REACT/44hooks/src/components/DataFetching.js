import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log("Data ", response);
        setPosts(response.data);
        setPost(response.data);
      })
      .catch((error) => console.log("Error", error));
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        {" "}
        click me{" "}
      </button>
      <h1> {post.title} </h1>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
