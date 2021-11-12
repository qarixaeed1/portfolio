import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FeaturedProjects from "../components/FeaturedProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import AboutMe from "@components/AboutMe";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Waleed Shahid - Full-Stack Developer"
      description="Full-Stack Website Developer with 3+ Years Experience. Worked on 50+ projects, Top Rated Freelancer on Upwork, Thinkific Certified Expert."
    >
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
