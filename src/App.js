import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.reddit.com/r/popular.json')
      .then((response) => {
        setPosts(response.data.data.children);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">

      <h1>Tiny Red</h1>
      <h2>'Simply Red'-</h2>
      <h3>-dit Clone by Bain</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.data.id}>
            <a href={`https://www.reddit.com${post.data.permalink}`}>
              {post.data.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

