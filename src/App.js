import './App.css';
import UIRender from './Components/HighlightText';

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <header>
	<div class="overlay">
<h1>React Editor</h1>
<h3 style={{color:'black'}}>SELECT ANY TEXT BELOW AND SEE THE MAGIC </h3>
		</div>
</header>
    <div className="App" style={{width:'100%',display:'flex',justifyContent:'center'}}>
<UIRender/>
    </div>
    </div>

  );
}

export default App;
