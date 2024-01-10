import React from 'react';
import '../Home/awal.css';
import './laman.css';
import BlogCard from './BlogCard';

const Laman = () => {
  return (
    <>
      {/* <div className="header">
        <div className="header-box">
          <div className="title">
            <h1 className="animate__animated animate__jackInTheBox animate__delay-1s">
              Spacedu
              <br />
              Blog & Tips
            </h1>
          </div>
        </div>
      </div> */}
<div className='blogcard1'><BlogCard /></div>
      
      {/* <div className="services oi">
        <div className="container">
          <div className="services-box">
            <div className="box">
              <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Promo mendatang
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Nantikan promo mendatang selanjutnya. Pantau terus media sosial dan website Spacedu dan Jangan sampai ketinggalan 😊😊.
              </p>
            </div>
            <div className="boxes">
              <div className="boxs">
                <img className="img" src="https://drive.google.com/uc?export=view&id=1ohmM_Xv2tCVKgSFR5dvsc9UWhhmlH_XQ" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" />
                <div className="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                  <h1>
                    Website <br />
                    Development
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo perferendis nisi quo. Deserunt magni doloribus quas! Eaque ullam, adipisci tenetur ad, obcaecati dolorem nobis voluptatibus dolores earum autem
                    possimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Laman;
