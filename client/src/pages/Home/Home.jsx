import Layout from "../../components/layout/Layout";
import Hero from "../../components/home/Hero";
import SearchBar from "../../components/home/SearchBar";
import Stats from "../../components/home/Stats";
import Features from "../../components/home/Features";
import FeaturedProperties from "../../components/home/FeaturedProperties";

const Home = () => {
  return (
    <Layout>

<Hero />

<SearchBar />

<Stats />

<Features />

<FeaturedProperties />

</Layout>
  );
};

export default Home;