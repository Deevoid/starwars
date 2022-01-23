import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import { HeroText } from "../components/atoms/HeroText/HeroText";
import { globalCategoryState } from "../components/globalStates/GlobalCategoryState";
import { AllFilms } from "../components/organisms/AllFilms/AllFilms";
import { AllPeople } from "../components/organisms/AllPeople/AllPeople";
import { AllPlanets } from "../components/organisms/AllPlanets/AllPlanets";
import { AllSpecies } from "../components/organisms/AllSpecies/AllSpecies";
import { AllStarships } from "../components/organisms/AllStarships/AllStarships";
import { AllVehicles } from "../components/organisms/AllVehicles/AllVehicles";
import {
  CategoryEnum,
  CategoryList,
} from "../components/organisms/CategoryList/CategoryList";
import { getHomePageStaticProps } from "../components/staticProps";

const Home: NextPage = () => {
  const globalCategory = useReactiveVar(globalCategoryState);

  const renderTemplate = () => {
    switch (globalCategory) {
      case CategoryEnum.Films: {
        return <AllFilms />;
      }
      case CategoryEnum.People: {
        return <AllPeople />;
      }
      case CategoryEnum.Planets: {
        return <AllPlanets />;
      }
      case CategoryEnum.Species: {
        return <AllSpecies />;
      }
      case CategoryEnum.Starships: {
        return <AllStarships />;
      }
      case CategoryEnum.Vehicles: {
        return <AllVehicles />;
      }
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="my-4 md:my-5 md:mb-8">
        <HeroText />
      </div>
      <div className="md:flex justify-center gap-4 p-4">
        <CategoryList />
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = getHomePageStaticProps;
