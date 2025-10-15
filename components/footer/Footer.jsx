import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Box borderTop={"1px solid black"} paddingY={"1rem"}>
            <Text textAlign={"center"}>
                © 2025 Clínicas Escola UNINASSAU. Todos os direitos reservados.
            </Text>

            <Flex justifyContent={"center"}>
                <SimpleGrid columns={2} gap="6">
                    <Text>Instagram</Text>
                    <Text>Whatsapp Odontologia</Text>
                    <Text>Whatsapp Psicologia</Text>
                    <Text>Whatsapp Veterinária</Text>
                </SimpleGrid>
            </Flex>

        </Box>
    )
}