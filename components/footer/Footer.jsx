import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export function Footer() {
    return (
        <Box borderTop={"1px solid black"} paddingY={"1rem"} spaceY={4} className="text" fontWeight="medium">
            <Text textAlign={"center"}>
                © 2025 Clínica Escola UNINASSAU.
            </Text>

            <Flex justifyContent={"center"}>
                <SimpleGrid display={{ base: "grid", md: "none" }} columns={2} gap="6">
                    <Flex gap={2} alignItems={"center"}>
                        <RiInstagramFill color="pink" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://www.instagram.com/uninassau.teresina/">
                                @uninassauteresina
                            </Link>
                        </Text>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <RiWhatsappFill color="green" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0" target="_blank">
                                Whatsapp Odontologia
                            </Link>
                        </Text>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <RiWhatsappFill color="green" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0" target="_blank">
                                Whatsapp Psicologia
                            </Link>
                        </Text>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <RiWhatsappFill color="green" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://api.whatsapp.com/send/?phone=5586999704054&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0" target="_blank">
                                Whatsapp Veterinária
                            </Link>
                        </Text>
                    </Flex>
                </SimpleGrid>

                <Flex display={{ base: "none", md: "flex" }} gap="6">
                    <Flex gap={2} alignItems={"center"}>
                        <RiInstagramFill color="pink" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://www.instagram.com/uninassau.teresina/">
                                @uninassauteresina
                            </Link>
                        </Text>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <RiWhatsappFill color="green" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0" target="_blank">
                                Whatsapp Odontologia
                            </Link>
                        </Text>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <RiWhatsappFill color="green" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0" target="_blank">
                                Whatsapp Psicologia
                            </Link>
                        </Text>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <RiWhatsappFill color="green" />
                        <Text cursor="pointer" _hover={{ color: "blue.900", transform: "scale(1.05)" }} transition="all 0.2s" asChild>
                            <Link href="https://api.whatsapp.com/send/?phone=5586999704054&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0" target="_blank">
                                Whatsapp Veterinária
                            </Link>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    )
}