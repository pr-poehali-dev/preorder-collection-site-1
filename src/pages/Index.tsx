import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Preorder from "@/components/Preorder";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div style={{ backgroundColor: "var(--dark-bg)" }}>
      <Navbar />
      <Hero />
      <Product />
      <Preorder />
      <Contacts />
    </div>
  );
};

export default Index;
