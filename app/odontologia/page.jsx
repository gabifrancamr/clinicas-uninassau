import { Box } from "@chakra-ui/react";
import { Footer } from "../../components/footer/Footer";
import { HeroOdonto } from "../../components/odonto/hero/Hero";
import { Services } from "../../components/odonto/services/Services";
import { Contact } from "../../components/odonto/contact/Contact";
import { SpecialtiesHeader } from "../../components/specialties-header/SpecialtiesHeader";

export default function Odontologia() {
    return (
        <Box className="container" overflow="hidden">
            <SpecialtiesHeader />
            <HeroOdonto />
            <Services />
            <Contact />
            <Footer />
        </Box>
    )
}