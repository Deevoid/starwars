import { CategoryEnum } from "./components/organisms/CategoryList/CategoryList";

export const getCategoryImage = (category: CategoryEnum | string): string => {
  switch (category) {
    case CategoryEnum.Films: {
      return "/films.png";
    }
    case CategoryEnum.People: {
      return "/people.svg";
    }
    case CategoryEnum.Planets: {
      return "/planets.png";
    }
    case CategoryEnum.Species: {
      return "/species.svg";
    }
    case CategoryEnum.Vehicles: {
      return "/vehicles.png";
    }
    case CategoryEnum.Starships: {
      return "/starships.png";
    }
    default: {
      return "";
    }
  }
};
