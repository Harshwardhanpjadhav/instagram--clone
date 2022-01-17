import './App.css';
import Post from './Post.js';
function App() {
  return (
    <div className="App">
      

      <header className="app--header">
        <img className="logoimage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
        
          <input className="header-search" type="search" name="" id="" />
        
      </header>

      <Post/>


    </div>
  );
}

export default App;
