import './App.css';
import UIRender from './Components/HighlightText';
import Helmet from 'react-helmet';

function App(props) {
  const getDefault = ()=>{
 return {
     title: "Html Editor in React", 
    description: "An editor in react.A platform to edit any html element. You can edit , highlight , add comments, notes and mark in any content , pdf , html.",
    keywords: "Editor in React, react editor, pdf editor in react",
    robots:"",
    canonicalUrl: "https://react-editor-kappa.vercel.app/"
 }
};

 const getPageMetadata = metaData => {
    const { title, description, keywords, canonicalUrl } = props;
    const defaultData = getDefault();
    return {
        title: title || defaultData?.title,
        description: description || defaultData?.description,
        keywords: keywords || defaultData?.keywords,
        robots: canonicalUrl || defaultData?.canonicalUrl,
        canonicalUrl: canonicalUrl || defaultData?.canonicalUrl,
    };
};
 const { metaData } = props;
    const meta = getPageMetadata(metaData);
  return (
    <>
            <Helmet>

        <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <link rel="canonical" href={meta.canonicalUrl} />
                <meta property="og:title" key="og:title" content={meta.title} />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={meta.description}
      />
      <meta
        property="og:image"
        key="og:image"
        content={'https://portfolio-seven-phi-43.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatured-text-editor.1588f83d.png&w=3840&q=75'}
      /> 
        </Helmet>
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
