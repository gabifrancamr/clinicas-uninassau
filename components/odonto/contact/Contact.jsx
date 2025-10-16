"use client";

import { Box, Button, Flex, List, Text } from "@chakra-ui/react";
import { MdLocationPin, MdWatchLater } from "react-icons/md";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

// versões animadas dos componentes do Chakra
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);

export function Contact() {
    return (
        <MotionFlex
            id="location"
            flexDirection="column"
            marginTop="8"
            paddingX={{ base: "4", md: "8", lg: "24" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Bloco de texto com animação */}
            <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}

            >
                <MotionText
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}

                >
                    Contato e Localização
                </MotionText>

                <Box>
                    <Flex gap={2} width={"fit-content"} flexDirection={"column"}>
                        <Flex gap={2} mt={4}>
                            <IoLogoWhatsapp size={30} color="green" />
                            <Text
                                fontSize={{ base: "md" }}
                                className="text"
                                color="blue.800"
                            >
                                Contato: (86) 99987-5239
                            </Text>
                        </Flex>

                        <Button
                            bgColor="green.600"
                            size={{ base: "sm", md: "md" }}
                            alignSelf="center"
                            color="white"
                            width={"100%"}
                        >
                            <Link
                                href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                                target="_blank"
                            >
                                Conversar no WhatsApp
                            </Link>
                        </Button>
                    </Flex>

                    <Flex width={"fit-content"} flexDirection={"column"}>
                        <Flex gap={2} alignItems="center" mt={4}>
                            <MdWatchLater size={30} color="blue" />
                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                className="text"
                                color="blue.800"
                            >
                                Horário de atendimento:
                            </Text>
                        </Flex>
                        <List.Root ps="5" color="blue.800">
                            <List.Item>
                                Segunda à Sexta: 08:00 às 22:00
                            </List.Item>
                            <List.Item>
                                Sábado: 08:00 às 16:00
                            </List.Item>
                        </List.Root>
                    </Flex>

                    <Flex gap={2} alignItems="flex-start" mt={4}>
                        <MdLocationPin size={30} color="red" />
                        <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            mb={6}
                            className="text"
                            color="blue.800"
                        >
                            Localização: pela Av. Jockey Club, ao
                            lado da Casa das Linhas, e pela Rua Napoleão Lima, nº 1175.
                        </Text>
                    </Flex>
                </Box>

            </MotionBox>

            {/* Mapa animado (fade-in) */}
            <MotionBox
                as="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1679898669013!2d-42.79149832414351!3d-5.076505851517322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39f458785b0f%3A0x54af35a56dad7818!2sR.%20Napole%C3%A3o%20Lima%2C%201175%20-%20J%C3%B3quei%2C%20Teresina%20-%20PI%2C%2064049-220!5e0!3m2!1spt-BR!2sbr!4v1760483877311!5m2!1spt-BR!2sbr"
                w="100%"
                h="400px"
                border={0}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                padding="4"
                borderRadius="8px"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}

            />
        </MotionFlex>
    );
}