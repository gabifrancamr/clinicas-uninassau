import { Box } from "@chakra-ui/react";
import { Footer } from "../../components/footer/Footer";
import { SpecialtiesHeader } from "../../components/specialties-header/SpecialtiesHeader";
import { HeroVeterinaria } from "../../components/veterinaria/hero/Hero";
import { Services } from "../../components/veterinaria/services/Services";
import { Contact } from "../../components/veterinaria/contact/Contact";

export default function Veterinaria() {
    return (
        <Box className="container" overflow="hidden">
            <SpecialtiesHeader />
            <HeroVeterinaria />
            <Services />
            <Contact />
            <Footer />
        </Box>
    )
}