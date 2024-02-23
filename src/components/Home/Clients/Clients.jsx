import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';
import gambar1 from "./Mitra/1.png"
import gambar2 from "./Mitra/2.png"
import gambar3 from "./Mitra/3.png"
import gambar4 from "./Mitra/4.png"
import gambar5 from "./Mitra/5.png"
import gambar6 from "./Mitra/6.png"
import gambar7 from "./Mitra/7.png"
import gambar8 from "./Mitra/8.png"
import gambar9 from "./Mitra/9.png"
import gambar10 from "./Mitra/10.png"
import gambar11 from "./Mitra/11.png"
import gambar12 from "./Mitra/12.png"
import gambar13 from "./Mitra/13.png"
import gambar14 from "./Mitra/14.png"
import gambar15 from "./Mitra/15.png"
import gambar16 from "./Mitra/16.png"
import gambar17 from "./Mitra/17.png"
import gambar18 from "./Mitra/18.png"
import blank from "./Mitra/blank.png"
import foto1 from "./Foto/12.png"
import foto2 from "./Foto/13.png"
import foto3 from "./Foto/14.png"
import foto4 from "./Foto/15.png"
import foto5 from "./Foto/16.png"
import foto6 from "./Foto/17.png"
import foto7 from "./Foto/18.png"
import foto8 from "./Foto/19.png"
import foto9 from "./Foto/20.png"
import foto10 from "./Foto/21.png"
import foto11 from "./Foto/22.png"
let clients = [
    {
        title : "MSIB+PMM",
        name : "Risma",
        position : "Offering magang sekaligus pertukaran mahasiswa",
        img_url : foto1,
        gambar1 : gambar1,
        gambar2 : gambar2,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Di semester 6 ini, aku butuh banget pengalaman magang, setelah semester lalu daftar PMM dan MSIB tapi belum lolos semua akhirnya nyoba lagi di semester ini langsung lolos dua-duanya berkat Mardika, terharuuu!” `
    },
    {
        title : "MSIB",
        name : "Firman",
        position : "Offering di 3 Mitra MSIB dan 1 Kementerian ",
        img_url : foto2,
        gambar1 : gambar3,
        gambar2 : gambar4,
        gambar3 : gambar5,
        gambar4 : gambar6,
        disc : `“Berkat simulasi interview, aku lolos lebih  awal di Kementerian Sekretariat Negara. Terima kasih mardika, semoga kedepannya selalu bisa mementoring mahasiswa yang membutuhkan peran mentoring magang”`
    },
    {
        title : "MSIB",
        name : "Putri",
        position : "Offering di Blibli.com dan Vidio",
        img_url : foto3,
        gambar1 : gambar7,
        gambar2 : gambar8,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Keputusan terbaik yang aku ambil di 2023 adalah daftar dan join mentoring MSIB dari Mardika. Semuanya jelas mulai alur pendaftaran, strategi milih mitra, sampe tips dan trik buatt interview!!. Thank you so much Mardika tanpa kamu aku mungkin ga bisa di titik ini dan diterima 2 mitra sekaligus :^”`
    },
    {
        title : "MSIB",
        name : "Fajrul",
        position : "Offering di Magenta BUMN dan Studi Independen",
        img_url : foto4,
        gambar1 : gambar9,
        gambar2 : gambar10,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Setelah konsultasi dengan mentor mengenai dua pilihan mitra. Aku mantab ambil pelindo di bagian audit yang relevan sama jurusan, Terima Kasih Mardika dan Kaka Mentor.”`
    },
    {
        title : "MSIB",
        name : "Rara",
        position : "Offering di Nutrifood-Lokalate ",
        img_url : foto5,
        gambar1 : gambar11,
        gambar2 : blank,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Throughout mentoring under Mardika guidance, I succeeded in creating a well-structured CV and Portfolio, as well as applying the tips and tricks provided in order to excel in the MSIB Kampus Merdeka selection process. Thankfully, I am qualified at various companies and decided to accept an offer from PT Nutrifood Indonesia. I am so grateful for the invaluable knowledge shared, thanks a lot, Mardika”`
    },
    {
        title : "MSIB",
        name : "Jelsy",
        position : "Offering di DPR-RI",
        img_url : foto6,
        gambar1 : gambar12,
        gambar2 : blank,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Terima kasih Mardika dan mentor, untuk bimbingan diskusi dan review cv sehingga saya bisa lolos di SETJEN DPR RI  semoga mahardika tetap menjadi platform mentoring untuk kampus merdeka kedepannya.”`
    },
    {
        title : "MSIB",
        name : "Fauzi",
        position : "Offering di BTPN Syariah",
        img_url : foto7,
        gambar1 : gambar13,
        gambar2 : blank,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Berkat ikut kelas mentoring  Mardika, saya bisa lolos di mitra yang se linier dengan jurusan saya, trimakasih telah me mentoring saya dari membuat CV, simulasi interview dan FGD, semoga kedepannya bisa mentoring mahasiswa yang ingin magang khusus nya di MSIB”`
    },
    {
        title : "Beasiswa Unggulan",
        name : "Reyhan",
        position : "Awardee Beasiswa Unggulan 2023 dan Pertukaran Mahasiswa Merdeka",
        img_url : foto8,
        gambar1 : gambar14,
        gambar2 : gambar15,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Setelah direview essay aku berhasil lolos jadi Awardee BU 2023 dan posisi waktu itu juga lolos Pertukaran Mahasiswa Merdeka  3 di Politeknik Negeri Jakarta. Terima Kasih mentor.”`
    },
    {
        title : "PMM",
        name : "Bayu",
        position : "Awardee Pertukaran Mahasiswa Merdeka 3 Universitas Udayana",
        img_url : foto9,
        gambar1 : gambar16,
        gambar2 : blank,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Hi aku Bayu, alumni PMM 3 Inbound Universitas Udayana.  Di awal tahun 2023, tidak ada sedikitpun terbenak bisa ngerasain kuliah di Bali. Mentor dengan telaten dan sabar ngebantu aku dan temen-temen pendaftar dari pemberkasan sampe pengumuman. Dengan gabung grup mentoring aku ngrasa punya temen seperjuangan.. Thank you Mardika sudah membuat wadah untuk sama-sama berkembang dan berproses menjadi lebih ser! It was so worth the wait!”`
    },
    {
        title : "PMM",
        name : "Irma",
        position : "Awardee Pertukaran Mahasiswa Merdeka 4 Universitas Jember",
        img_url : foto10,
        gambar1 : gambar17,
        gambar2 : blank,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Kenalin, aku Irma. alasan aku ikut pmm salah stunya adalah pengen ke bromo, tapi  waktu tahap seleksi bingung+ga punya bayangan buat tes kebinekhaan sampe akhirnya ketemu Mardika dan alhamdulillah lolos pilihan 1.” `
    },
    {
        title : "PMM",
        name : "Mardho",
        position : "Awardee Pertukaran Mahasiswa Merdeka 3 Universitas Padjajaran ",
        img_url : foto11,
        gambar1 : gambar18,
        gambar2 : blank,
        gambar3 : blank,
        gambar4 : blank,
        disc : `“Dari awal gabung mentoring udah dapet tips & trik sampe simulasi surbin. Asa berhasil dapetin Unpad sebagai tempat untuk bertumbuh sementara selama 1 semester yang bermakna selamanya.”`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <h3>Sapa Alumni</h3>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h3{
        padding-top: 1rem;
        text-transform: capitalize;
        color: white;
        background-color: #BD4800;
        text-align: center;
        align-items: center;
        padding-bottom: 13px;
        border-radius: 10px;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
        border-radius: 10px;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: #e5d489;
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #024aad;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #432284;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`