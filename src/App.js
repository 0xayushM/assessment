import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="navbar">
        <a href="#home">Home</a>
        <div class="dropdown">
          <button class="dropbtn">Skills</button>
          <div class="dropdown-content">
            <a href="#link1">ReactJs</a>
            <a href="#link2">TailwindCSS</a>
            <a href="#link3">JavaScript</a>
            <a href="#link3">CSS</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Hobbies</button>
          <div class="dropdown-content">
            <a href="#link1">Piano</a>
            <a href="#link3">Guitar</a>
            <a href="#link3">Sketching</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Projects</button>
          <div class="dropdown-content">
            <a target="_blank" rel='noreferrer' href="https://portfolio-lime-ten-19.vercel.app">
              Personal-portfolio
            </a>
            <a target="_blank" rel='noreferrer' href="https://disney-plus-clone-7ebc8.firebaseapp.com/">
              DisneyPlus-clone
            </a>
            <a target="_blank" rel='noreferrer' href="https://tesla-clone-app-react-js.netlify.app">
              Tesla-clone
            </a>
          </div>
        </div>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default App;
