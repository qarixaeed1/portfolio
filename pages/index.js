import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Thinkific from "@components/Thinkific";

export default function Home() {
  return (
    <ContainerBlock
      title="Waleed Shahid - Thinkific Expert Developer"
      description="Thinkific Expert Developer with 3+ Years Experience. Worked on 50+ projects, Top Rated Freelancer on Upwork, Thinkific Certified Expert."
    >
      <Thinkific />
    </ContainerBlock>
  );
}
