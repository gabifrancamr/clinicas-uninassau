import { Box, Text, Card, Image, Button, Flex } from "@chakra-ui/react";
import { SpecialtiesCard } from "../specialties-card/SpecialtiesCard";

export function Specialties() {
    return (
        <Flex id="specialties" flexDirection={"column"} alignItems={"center"} marginTop={"8"} paddingX={{ base: "4", md: "8", lg: "24" }} spaceY={6}>
            <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} className="title">
                Especialidades
            </Text>

            <Flex flexDirection={{base: "column", sm: "row"}} gap={2}>
                <SpecialtiesCard image={"/psic.jpg"} alt={"card de odontologia"} page={"odontologia"} title={"Odontologia"} />
                <SpecialtiesCard image={"/dent.jpg"} alt={"card de odontologia"} page={"odontologia"} title={"Psicologia"} />
                <SpecialtiesCard image={"/vet.jpg"} alt={"card de odontologia"} page={"odontologia"} title={"Veterinária"} />
            </Flex>


        </Flex>
    )
}