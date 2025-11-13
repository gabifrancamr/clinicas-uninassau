'use client'

import { Box, Button, Flex, Image, List, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";

// Componentes animados
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export function HeroPsicologia() {
    return (
        <Box id="start" borderRadius="8px" mx={{ base: "1rem", md: "2rem" }} py={4}>
            {/* Título fixo, fora da imagem */}
            <MotionText
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                textAlign="center"
                className="title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

            >
                Psicologia
            </MotionText>

            <Flex
                direction={{ base: "column", lg: "row" }}
                align="center"
                justify="center"
                gap={{ base: 4, md: 10 }}
                position="relative"
            >
                {/* Imagem com animação */}
                <MotionBox
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minW={{ base: "250px", lg: "400px" }}
                    position="relative"
                    top={{ base: "-8px", lg: "-10px" }}
                    initial={{ opacity: 0, x: -80 }} // começa invisível e à esquerda
                    whileInView={{ opacity: 1, x: 0 }} // entra suavemente na tela
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/hero-psico.png"
                        alt="hero"
                        maxW={{ base: "100%", lg: "100%" }}
                        h="auto"
                        objectFit="contain"
                    />
                </MotionBox>

                {/* Texto com animação */}
                <MotionFlex
                    flex="1"
                    flexDirection="column"
                    minW={{ base: "300px", lg: "400px" }}
                    textAlign={{ base: "center", sm: "left" }}
                    initial={{ opacity: 0, x: 80 }} // começa invisível e à direita
                    whileInView={{ opacity: 1, x: 0 }} // entra na tela
                    transition={{ duration: 0.6, delay: 0.2 }} // entra depois da imagem
                >

                    <Text fontSize={{ base: "lg", lg: "xl" }} mb={4} className="text">
                        A Clínica de Psicologia da Uninassau oferece atendimento psicológico acessível e de qualidade para a comunidade.
                    </Text>

                    <Text fontSize={{ base: "lg", lg: "xl" }} mb={4} className="text">
                        Os atendimentos contemplam diferentes faixas etárias, com foco em escuta, acolhimento e promoção da saúde mental. A seguir, você encontra a lista completa de serviços e seus respectivos valores.
                    </Text>

                    <Box fontSize={{ base: "lg", lg: "xl" }} mb={4} className="text">
                        <Text> Horário de atendimento:</Text>

                        <List.Root ps="5">
                            <List.Item>
                                Segunda a Sexta: 08:00 às 22:00
                            </List.Item>
                            <List.Item>
                                Sábado: 08:00 às 16:00
                            </List.Item>
                        </List.Root>
                    </Box>

                    <Button
                        bgColor="blue.800"
                        size={{ base: "lg", lg: "lg" }}
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        className="shadow"
                        color="white"
                    >
                        <Link
                            href="https://agende.app.br/desktop/leads?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHRlcm5hbF9jYW1wYWlnbl9pZCI6MzQzMiwicGFnZSI6ImxlYWRzIn0.hG_FHnyG7hAGmYVRIkQyk_j77128GGQ2dXsAO35b2y0"
                            target="_blank"
                        >
                            Agendar atendimento
                        </Link>
                    </Button>
                </MotionFlex>
            </Flex>
        </Box>
    );
}
