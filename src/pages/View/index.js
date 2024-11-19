import logo from './logo.png'
import './App.css';
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function View() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true
    
  };



    return (
      <div  >
        <div  className="divlogo">
          <img src={logo} className="imglogo"/>
        </div> 


      <div className='container_2'>

        <div className='section_2'>
          <h1 className='prepapedido'>PREPARANDO PEDIDO</h1>
          <ul className='lista' >
              <li>PEDIDO_1</li>
              <li>PEDIDO_2</li>
              <li>PEDIDO_3</li>
              <li>PEDIDO_4</li>
              <li>PEDIDO_5</li>
              <li>PEDIDO_6</li>
              <li>PEDIDO_7</li>
              <li>PEDIDO_8</li>
              <li>PEDIDO_9</li>
              <li>PEDIDO_10</li>
          </ul>
        </div>
      </div>

      <div className='container_1'>
        <div className='section_1'>
          <h1>SEU PEDIDO ESTÁ PRONTO</h1>
          <h1 className='nome'>LUCAS</h1>
        </div>
      </div>

       
    

    <div>
      <div style={{ width: "30%", margin: "0 auto" }} className='container'>
        <Slider {...settings}>
          <div className='divimg1'>
            <img src={img_1} alt="Imagem 1" style={{ width: "100%"}} className='img1'  />
          </div>
          <div className='divimg2'>
            <img src={img_2} alt="Imagem 2" style={{ width: "100%" }} className='img2' />
          </div>
          <div className='divimg3' >
            <img src={img_3} alt="Imagem 3" style={{ width: "100%" }} className='img3' />
          </div>
        </Slider>
      </div>
    </div>



      </div>   
     
      
    );
  }
  
  export default View;
  