import type { NextPage } from "next";
import { Films } from "../components/organisms/Film/Films";

const Home: NextPage = () => {
  return (
    <div className="bg-red-200">
      Hello World
      <Films />
    </div>
  );
};

export default Home;
