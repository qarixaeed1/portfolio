import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FeaturedProjects from "../components/FeaturedProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import AboutMe from "@components/AboutMe";
import Testimonial from "@components/Testimonial";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Waleed Shahid - Full-Stack Developer"
      description="Full-Stack Website Developer with 3+ Years Experience. Worked on 50+ projects, Top Rated Freelancer on Upwork, Thinkific Certified Expert."
    >
      <Hero />
      <div className="block py-6 md:-my-4 md:py-0">
        <svg className="animate-bounce mx-auto w-6 h-6 text-amber-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <AboutMe />
      <FeaturedProjects />
      <Testimonial />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
