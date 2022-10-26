import React from 'react';
import './App.css';
import AddPostForm from './features/posts/addPostForm';
import PostsList from './features/posts/postsList';



function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />  
    </div>
  );
}

export default App;
