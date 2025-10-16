import { Box } from "@chakra-ui/react";
import { SpecialtiesHeader } from "../../components/specialties-header/SpecialtiesHeader";
import { Footer } from "../../components/footer/Footer";
import { HeroPsicologia } from "../../components/psicologia/hero/Hero";
import { Services } from "../../components/psicologia/services/Services";
import { Contact } from "../../components/psicologia/contact/Contact";

export default function Psicologia() {
    return (
        <Box className="container" overflow="hidden">
            <SpecialtiesHeader />
            <HeroPsicologia />
            <Services />
            <Contact />
            <Footer />
        </Box>
    )
}