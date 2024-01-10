import React from 'react';
import './mentoring.css';


function MentoringProgram() {
  return (
    <div class="pricing-table">
            <div class="table">
                <div class="content">
                    <h3>Program Mentoring Beasiswa Unggulan</h3>
                    <div class="price-container">
                        <span class="price basic-price">Rp 20.000</span>
                    </div>
                    <ul class="features">
                        <li>Ebook</li>
                        <li>Konsultasi</li>
                        <li>Review Essay</li>
                        <li>Simulasi Wawancara</li>
                    </ul>
                    <a href="www.instagram.com" class="btn">Daftar Sekarang</a>
                </div>
            </div>

            <div class="table best-value">
                <span class="value">Paling Diminati</span>
                <div class="content">
                    <h3>Program Mentoring Pertukaran Mahasiswa Merdeka</h3>
                    <div class="price-container">
                        <span class="price professional-price">Rp10.000</span>
                    </div>
                    <ul class="features">
                        <li>Ebook</li>
                        <li>Konsultasi</li>
                        <li>Simulasi</li>
                        <li>Tes Kebhinekaan</li>
                    </ul>
                    <a href="www.instagram.com" class="btn">Daftar Sekarang</a>
                </div>    
            </div>

            <div class="table">
                <div class="content">
                    <h3>Program Mentoring MSIB Merdeka</h3>
                    <div class="price-container">
                        <span class="price business-price">Rp10.000</span>
                    </div>
                    <ul class="features">
                        <li>Ebook</li>
                        <li>Konsultasi</li>
                        <li>Review CV</li>
                        <li>Simulasi Assesement Test</li>
                        <li>Simulasi Interview</li>
                    </ul>
                    <a href="www.instagram.com" class="btn">Daftar Sekarang</a>
                </div>
            </div>
        </div>
  );
}

export default MentoringProgram;
