import logo from './imageInSrc.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title_red">Your name here</h1>
        <br />
        <img src={logo} />
        <br />
        <img src="imageInPublic.png" />
      </div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

    </div>
  );
}

export default App;
