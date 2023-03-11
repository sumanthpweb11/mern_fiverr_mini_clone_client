import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectcard/ProjectCard";
import { cards, projects } from "../../data";
import { useMediaQuery } from "react-responsive";
// import Features from "../../components/features/Features";

const Home = () => {
  const number = {
    slides: useMediaQuery({ maxWidth: 772 }) ? 2 : 5,
  };

  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={number.slides} arrowsScroll={number.slides}>
        {cards.map((card) => {
          return <CatCard key={card.id} cardProps={card} />;
        })}
      </Slide>
      {/* <Features /> */}
      <Slide slidesToShow={number.slides} arrowsScroll={number.slides}>
        {projects.map((card) => (
          <ProjectCard key={card.id} projectProps={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
