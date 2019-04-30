import React from "react";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";
import { Helmet } from "react-helmet";

const Prototype = () => {
  return (
    <ContentContainer>
      <Helmet>
        <title>{LOCALIZE.titles.prototypes}</title>
      </Helmet>
      <h2>{LOCALIZE.prototypePage.title}</h2>
      <p>{LOCALIZE.prototypePage.welcomeMsg}</p>

      <form method="get" action="/emib-sample">
        <button type="submit" className="btn btn-primary">
          {LOCALIZE.prototypePage.startEmibSampleTest}
        </button>
      </form>
    </ContentContainer>
  );
};

export default Prototype;
