'use client'

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";

// Componentes animados
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export function Hero() {
  return (
    <Box id="start" borderRadius="8px" mx={{ base: "1rem", md: "2rem" }} py={4}>
      {/* Título fixo, fora da imagem */}
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={2}
        className="title"
      >
        <ReactTyped strings={["Clínica Escola Integrada Uninassau – Teresina."]} typeSpeed={40} />

      </Text>

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
            src="/hero3.png"
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
          textAlign={{ base: "center", lg: "left" }}
          initial={{ opacity: 0, x: 80 }} // começa invisível e à direita
          whileInView={{ opacity: 1, x: 0 }} // entra na tela
          transition={{ duration: 0.6, delay: 0.2 }} // entra depois da imagem
        >
          <Text fontSize={{ base: "lg", lg: "xl" }} mb={6} className="text">
            A Clínica Escola Integrada da Uninassau, localizada no bairro Jóquei em
            Teresina, oferece atendimentos acessíveis à comunidade nas áreas de
            Psicologia, Odontologia e Medicina Veterinária.
          </Text>

          <Text fontSize={{ base: "lg", lg: "xl" }} mb={6} className="text">
            Nosso objetivo é proporcionar serviços de qualidade, com orientação acadêmica e
            compromisso social, aproximando ainda mais a universidade da população.
          </Text>

          <Button
            bgColor="blue.800"
            size={{ base: "lg", lg: "lg" }}
            alignSelf={{ base: "center", lg: "flex-start" }}
            className="shadow"
          >
            <Link href="#specialties">
              Agendar atendimento
            </Link>
          </Button>
        </MotionFlex>
      </Flex>
    </Box>
  );
}
