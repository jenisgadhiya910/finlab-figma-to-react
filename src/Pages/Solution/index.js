import React from "react";
import SolutionCultureDiscipline from "../../components/SolutionCultureDiscipline";
import SolutionDarkBottonSection from "../../components/SolutionDarkBottonSection";
import SolutionDarkTopSection from "../../components/SolutionDarkTopSection";
import SolutionFinancialDiscipline from "../../components/SolutionFinancialDiscipline";
import SolutionMakeItEasySection from "../../components/SolutionMakeItEasySection";

const SolutionPage = () => {
  return (
    <>
      <SolutionDarkTopSection
        newsTitle={"Update New features for active users ✨ "}
        title={"Modern spend management"}
        description={
          "Integrated cards and software that drive 100% compliance with 0 receipt chasing in 100+ countries."
        }
      />
      <SolutionCultureDiscipline />
      <SolutionFinancialDiscipline />
      <SolutionMakeItEasySection />
      <SolutionDarkBottonSection />
      <SolutionDarkTopSection
        newsTitle={"Get started now ✨ "}
        title={"Let’s start manage your finances with finlab"}
        description={
          "Get in touch to learn how our spend solution can increase financial efficiency and speed for your company."
        }
      />
    </>
  );
};

export default SolutionPage;
