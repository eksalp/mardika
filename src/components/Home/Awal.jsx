import React from "react";
import "./awal.css";
import Clients from "./Clients/Clients";
import Carousel from "./Carousel";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

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

      <div className="karosel">
        <Carousel />
      </div>

      <div className="isihome">
        <h6 className="h6">
          "Berangkat dari kepedulian mahasiswa dan mendukung program Merdeka
          Belajar Kampus Merdeka, Mardika menjadi teman untuk tumbuh dan
          berkembang menuju mahasiswa yang merdeka."
        </h6>
      </div>
      <Clients />
      <div className="accordion">
        <div>
          <h3 className="judulAccordion">Frequently Asked Questions</h3>
        </div>
        <div>
          <Accordion allowToggle defaultIndex={[0]}>
            <AccordionItem>
              <span>
                <AccordionButton>
                  <Box
                    color={"black"}
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="menuAccordion"
                  >
                    Pertemuan diadakan secara online/offline?
                  </Box>
                  <AccordionIcon color={"black"} />
                </AccordionButton>
              </span>
              <AccordionPanel textAlign="justify" pb={4}>
                <span className="submenuAccordion">
                  Untuk pertemuan full online dengan durasi minimal 1
                  jam/pertemuan
                </span>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <span>
                <AccordionButton>
                  <Box
                    color={"black"}
                    as="span"
                    flex="1"
                    textAlign="justify"
                    className="menuAccordion"
                  >
                    Kelas ini cocok untuk siapa saja?
                  </Box>
                  <AccordionIcon color={"black"} />
                </AccordionButton>
              </span>
              <AccordionPanel textAlign="justify" pb={4}>
                <span className="submenuAccordion">
                  Kelas beasiswa cocok untuk adik-adik SMA hingga mahasiswa
                  semester 2, sedangkan program mentoring MBKM cocok untuk
                  mahasiswa semester awal hingga akhir{" "}
                </span>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <span>
                <AccordionButton>
                  <Box
                    color={"black"}
                    as="span"
                    flex="1"
                    textAlign="justify"
                    className="menuAccordion"
                  >
                    Apakah jadwal mentoring bisa menyesuaikan?
                  </Box>
                  <AccordionIcon color={"black"} />
                </AccordionButton>
              </span>
              <AccordionPanel textAlign="justify" pb={4}>
                <span className="submenuAccordion">
                  Pelaksanaan disesuaikan dengan pembukaan program
                  (beasiswa/MBKM) dengan jadwal pertemuan dibagikan setelah
                  kuota kelas terpenuhi
                </span>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <span>
                <AccordionButton>
                  <Box
                    color={"black"}
                    as="span"
                    flex="1"
                    textAlign="justify"
                    className="menuAccordion"
                  >
                    Berapa kuota kelas mentoring tiap kelas?{" "}
                  </Box>
                  <AccordionIcon color={"black"} />
                </AccordionButton>
              </span>
              <AccordionPanel textAlign="justify" pb={4}>
                <span className="submenuAccordion">
                  Tentu setiap tahun berbeda, untuk info kuota mentoring dapat
                  dilihat melalui media sosial resmi Mardika
                </span>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <span>
                <AccordionButton>
                  <Box
                    color={"black"}
                    as="span"
                    flex="1"
                    textAlign="justify"
                    className="menuAccordion"
                  >
                    Apakah bebas konsultasi selama mentoring berlangsung?
                  </Box>
                  <AccordionIcon color={"black"} />
                </AccordionButton>
              </span>
              <AccordionPanel textAlign="justify" pb={4}>
                <span className="submenuAccordion">
                  Bebas! setiap pertemuan diadakan sesi konsultasi dan progress
                  program
                </span>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Awal;
