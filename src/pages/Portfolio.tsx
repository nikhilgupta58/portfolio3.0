import { Helmet } from "react-helmet";
import Project from "../components/Project";
import { Hero } from "./Hero";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Frontend Developer</title>
      </Helmet>
      <Project />
    </>
  );
}
