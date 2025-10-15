import { Box } from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import { Hero } from "../../components/hero/Hero";

export default function Odontologia() {
    return (
        <Box className="container" bgColor={"blue.800"} color="white">
            <Header />
            <Hero />
        </Box>
    )
}