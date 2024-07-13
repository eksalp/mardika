import React from "react";
import "./kaki.css";
import logo from "./mardika-polos.png";
// import pembayaran from "./ee.png";

const Footer = () => {
  return (
    <footer>
      <div class="container__footer">
        <div class="box__footer pp">
          <div class="logo">
            <img className="gambar" src={logo} alt="" />
          </div>
          <div class="terms">
            <p className="sizee">
              Mardika adalah platform mentoring online pertama di Indonesia yang
              hadir untuk membantu mahasiswa menjadi bagian dari program Merdeka
              Belajar Kampus Merdeka. Sudah 1.000 lebih mahasiswa terbantu dalam
              kelas mentoring yang terbagi dalam 3 kelas : Persiapan Beasiswa
              Unggulan, Persiapan Pertukaran Mahasiswa Merdeka, dan Magang Studi
              Independen.
            </p>
          </div>
        </div>

        <div class="box__footer r">
          <h4 className="warnakuning">Jelajah</h4>
          <a href="https://www.google.com/">
            <p className="p sizee">Panduan Pendaftaran</p>
          </a>
          <a href="https://www.google.com/">
            <p className="p sizee">Panduan Pembayaran</p>
          </a>
        </div>

        <div class="box__footer r wes">
          <h4 className="warnakuning">Social Media</h4>
          {/* <a href="https://www.google.com/">
            {' '}
            <i class="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="https://www.google.com/">
            <i class="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="https://www.google.com/">
            <i class="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="https://www.google.com/">
            <i class="fab fa-instagram-square"></i> Instagram
          </a> */}

          <a href="https://wa.me/+6288221412068">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/mardika-mahasiswa-merdeka-0115b82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://t.me/InfoMardika">
            <i className="fab fa-telegram"></i> Telegram
          </a>
          <a href="https://www.instagram.com/infomardika?igsh=MTh1c2hhZmR2NDZueg%3D%3D&utm_source=qr">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.tiktok.com/@infomardika">
            <i className="fab fa-tiktok"></i> Tiktok
          </a>
        </div>
      </div>

      <div class="box__copyright">
        <hr />
        <p>
          All Right Reserved © 2024 <b>Mardika</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
