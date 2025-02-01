"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Bouquets from "../../components/Bouquets/BouquetsPage"

const BouquetsPage: React.FC = () => {
  return (
    <>     
      <Header />
      <Bouquets />
      <Footer />
    </>
  );
};

export default BouquetsPage;
