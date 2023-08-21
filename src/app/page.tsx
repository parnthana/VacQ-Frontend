import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
export default function Home() {
  return (
    <main>
      <Banner />
      <h2 style={{ marginLeft: "50px", marginTop: "50px" }}>Our Articles</h2>
      <div
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "50px",
          alignContent: "space-around",
        }}
      >
        <ProductCard />
      </div>
    </main>
  );
}
