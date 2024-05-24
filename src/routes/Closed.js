import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import React from "react";
import styled from "styled-components";
import Closedd from "./closed.png";

// Komponen Navbar dan Footer
// Komponen Closed
const Closed = () => {
  const ClosedContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 80px;
  `;

  return (
    <>
      <Navbar />
      <ClosedContainer>
        <img src={Closedd} alt="gambar" />
      </ClosedContainer>
      <Footer />
    </>
  );
};

export default Closed;
