import React,{ useState } from 'react';
import '../App.css';
import thumb1 from '../assets/1-thumb.png';
import thumb2 from '../assets/2-thumb.png';
import thumb3 from '../assets/3-thumb.png';
import thumb4 from '../assets/4-thumb.png';
import thumb5 from '../assets/5-thumb.png';
import thumb6 from '../assets/6-thumb.png';
import mainImg from '../assets/main_img.png';
import blogImage1 from '../assets/blog-image-1.png';
import icon1 from '../assets/1-icon.png';
import icon2 from '../assets/2-icon.png';
import icon3 from '../assets/3-icon.png';
import icon4 from '../assets/4-icon.png';
import icon5 from '../assets/5-icon.png';
import icon6 from '../assets/6-icon.png';
import Form from './Form';


const Content = () => {

  const [bool,setbool] = useState(false);
  const [bool2,setbool2] = useState(false);
  const [bool3,setbool3] = useState(false);
  const [bool4,setbool4] = useState(false);

  function onPress(){
     setbool(!bool);
  }

  function onPress2(){
    setbool2(!bool2);
 }

 function onPress3(){
  setbool3(!bool3);
}

function onPress4(){
  setbool4(!bool4);
}



  return (
    <div style={{ marginBottom:'10%' }}>
      <div className="row">
          <img src={mainImg} alt="" style={{ width:'100%',maxWidth:700 }}/>
          <div>
              <h6>Latest from gallery</h6>
              <div>
                <img src={icon1} alt="" className="gallery"/>
                <img src={icon2} alt="" className="gallery"/>
                <img src={icon3} alt="" className="gallery"/>
              </div>
              <div>
                <img src={icon4} alt="" className="gallery"/>
                <img src={icon5} alt="" className="gallery"/>
                <img src={icon6} alt="" className="gallery"/>
              </div>
          </div>
        </div>
       <h4 style={{ marginLeft:'9%' }}>Our best work</h4>
      <div className="row">
      <img src={thumb1} className="cloumn" alt=""/>
      <img src={thumb2} className="cloumn" alt=""/>
      <img src={thumb3} className="cloumn" alt=""/>
      </div>
      <div className="row">
        <img src={thumb4} className="column" alt=""/>
        <img src={thumb5} className="column" alt=""/>
        <img src={thumb6} className="column" alt=""/>
      </div>

      <div className="row">
        <div style={{ width:'37%' }}>
          <h4>What can we do</h4>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here' <span onClick={()=>onPress()} style={{ textDecoration:'underline' }}>see more...</span>
            { bool === true ? <p> , making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).</p>:''}
          </p>
        </div>
        <div style={{ width:'37%' }}>
          <h4>How to contact us</h4>
          <p>It is a long established fact that a reader will be 
            distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using <span onClick={()=>onPress2()} style={{ textDecoration:'underline' }}>see more...</span>
            { bool2 === true ? <p> , making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).</p>:''}
          </p>
        </div>
      </div>
      <h4 style={{ marginLeft:'9%' }}>Latest on the blog</h4>
      <div className="row">
          <img src={blogImage1} alt="" style={{ height:200,width:500 }}/>
          <div style={{ width:'37%' }}>
          <h5>New websites to Inspire you</h5>
          <p>It is a long established fact that a reader will be 
            distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a <span onClick={()=>onPress3()} style={{ textDecoration:'underline' }}>see more...</span>
            { bool3 === true ? <p> , making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).</p>:''}
          </p>
        </div> 
      </div>
      <div className="row">
          <img src={thumb5} alt="" style={{ height:200,width:500 }}/>
          <div style={{ width:'37%' }}>
              <h4>The solar output & design</h4>
              <p>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less <span onClick={()=>onPress4()} style={{ textDecoration:'underline' }}>see more...</span>
                { bool4 === true ? <p> , making it look like readable English.
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, 
                sometimes by accident, sometimes on purpose (injected humour and the like).</p>:''}
              </p>
          </div> 
      </div>
      <div className="row">
          <img alt=""/>
          <div style={{ width:'37%' }}>
              <h4></h4>
              <p></p>
          </div> 
      </div>
      <div style={{ marginLeft:'9%' }}>
         <Form/>
      </div>
        
    
    </div>
  );
}

export default Content;
