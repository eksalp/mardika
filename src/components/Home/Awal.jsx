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

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>d;lmf</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>d;lmf</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default Awal;
