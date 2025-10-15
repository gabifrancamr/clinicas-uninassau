import { Box } from "@chakra-ui/react";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { Specialties } from "../components/specialties/Specialties";
import { Map } from "../components/map/Map";
import { Footer } from "../components/footer/Footer";

export default function Home() {
  return (
    <Box className="container" overflow="hidden">
      <Header />
      <Hero />
      <Specialties />
      <Map />
      <Footer />
    </Box>
  );
}
