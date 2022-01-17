import './App.css';
import Post from './Post.js';
import Sidenav from './Sidenav.js';
import Story from "./Story.js"
function App() {
  return (
    <div className="App">
      

      <header className="app--header">

        <div className="hed">

        <img className="logoimage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
        
          <input className="header-search" type="search" name="" id="" placeholder="Search" />
        
          
        </div>
      </header>
      <Story username="harsh" />

      <Sidenav username="Harshwardhan"/>


      <Post username="Harshwardhan" comment="🤟Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Eaque optio minus amet officia
          architecto autem vero aspernatur ratione minima nisi fugit maxime ut
          aut enim debitis commodi, molestiae beatae recusandae!" imageUrl="https://cdn.pixabay.com/photo/2016/03/29/03/12/girl-1287375_1280.jpg" />
          
          
      <Post username="Shivam" comment="🤟Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. " imageUrl="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg"/>
      <Post username="Akshay" comment="🤟Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. " imageUrl="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"/>

      <Post username="Harshwardhan" comment="🤟Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Eaque optio minus amet officia
          architecto autem vero aspernatur ratione minima nisi fugit maxime ut
          aut enim debitis commodi, molestiae beatae recusandae!" imageUrl="https://cdn.pixabay.com/photo/2016/03/29/03/12/girl-1287375_1280.jpg" />
          
          
      <Post username="Shivam" comment="🤟Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. " imageUrl="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg"/>
      <Post username="Akshay" comment="🤟Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. " imageUrl="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"/>


    </div>

   
  );
}

export default App;
