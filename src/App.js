import './App.css';
import UIRender from './Components/HighlightText';

function App(props) {

  return (
    <>
        
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <header>
	<div class="overlay">
<h1 className='heading'>React Editor</h1>
<h3 className='info'  style={{color:'black'}}>SELECT ANY TEXT BELOW AND SEE THE MAGIC </h3>
<p className='mobile-info' style={{background:'red'}}>For now only works in larger devices. Try it out in your laptop</p>
		</div>
</header>
    <div className="App" style={{width:'100%',display:'flex',justifyContent:'center'}}>
<UIRender/>
    </div>
    </div>
        </>
  

  );
}

export default App;
