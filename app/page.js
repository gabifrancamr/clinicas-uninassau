import { Box } from "@chakra-ui/react";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { Specialties } from "../components/specialties/Specialties";
import { Map } from "../components/map/Map";
import { Footer } from "../components/footer/footer";

export default function Home() {
  return (
    <Box className="container" bgColor={"blue.800"} color="white">
      <Header />
      <Hero />
      <Specialties />
      <Map />
      <Footer />
    </Box>
  );
}
