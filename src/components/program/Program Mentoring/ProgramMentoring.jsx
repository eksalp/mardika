import React from "react";
import "./mentoring.css";
import logo2 from "../Program Mentoring/images/mentoring.png";

function ProgramPrice() {
  return (
    <div>
      <div className="mentoring1">
        <img src={logo2} alt="banner2" />
      </div>
      <div class="containermentoring">
        <div class="section1">
          <h4 className="mentoringa">Kamu akan dibekali</h4>
          <ol className="bd1">
            <li>Persiapan MSIB</li>
            <li>Menulis CV ATS Friendly</li>
            <li>Strategi memilih mitra & peluang</li>
            <li>Rumus menjawab wawancara</li>
            <li>Kisi-Kisi tes soal</li>
          </ol>

          <h4 className="mentoringa">Dengan Fasilitas</h4>
          <ol className="bd1">
            <li>Zoom premium 5 kali pertemuan</li>
            <li>Grup yang kondusif</li>
            <li>Teman yang supportif</li>
            <li>Template konversi, CV, dan balasan chat HR</li>
            <li>Cerita bareng alumni MSIB</li>
          </ol>
        </div>
        <div class="section2">
          <div className="subsec">
            <h2 className="mentoringb">Kuota semakin terbatas!</h2>
            <button className="tomboldaftar">Akses Kelas Mentoring</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPrice;
