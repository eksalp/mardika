import React from 'react';
import './awal.css';
import Clients from './Clients/Clients';
import banner from './banner.png'

const Awal = () => {
  return (
    <>
      <div className="header">
        <div className="header-box">
          <div className="title">
            <h1>
              Platform
              <br />
              Mentoring MBKM
              <br />
              Nomor 1
            </h1>
          </div>
        </div>
      </div>

      
      <img className='wrapperbanner' src={banner} alt="" />
      <div className='isihome'>
      <h6 className='h6'>"Berangkat dari kepedulian mahasiswa dan mendukung program Merdeka Belajar Kampus Merdeka, Mardika menjadi teman untuk tumbuh dan berkembang menuju mahasiswa yang merdeka."</h6>
      </div>
      <Clients/>

      

     {/* <Stats/> */}
     {/* <Why/> */}

     {/* <Carousel/> */}

      {/* <div>
        <div className="services servicess">
          <div className="container">
            <div className="services-box">
              <div className="box">
                <h1>Testimoni</h1>
                <p>Apa kata mereka?</p>
              </div>
            </div>
          </div>
        </div>
        <Testi />
      </div> */}

      {/* <div className="accordion">
        <div className="services servicess">
          <div className="container">
            <div className="services-box">
              <div className="box">
                <h1>Frequently Asked Question</h1>
                <p>Apa saja yang sering ditanyakan?</p>
              </div>
            </div>
          </div>
        </div>
        <Accordionn />
      </div> */}

    </>
  );
};
export default Awal;
