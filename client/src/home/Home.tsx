import Navbar from "../components/Navbar/Nav";
import Featured from "../components/featured/Featured";
import "./home.scss";
import List from "../components/list/List";
export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};
