"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBouquets from "../../components/PageBouquets/PageBouquetsPage"

const PageBouquetsPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageBouquets />
      <Footer />
    </>
  );
};

export default PageBouquetsPage;
