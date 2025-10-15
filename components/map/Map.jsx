"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";

// versões animadas dos componentes do Chakra
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);

export function Map() {
  return (
    <MotionFlex
      id="location"
      flexDirection="column"
      alignItems="center"
      marginTop="8"
      paddingX={{ base: "4", md: "8", lg: "24" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Bloco de texto com animação */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <MotionText
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Localização
        </MotionText>

        <Flex gap={2} alignItems="flex-start" mt={4}>
          <MdLocationPin size={40} color="red" />
          <Text
            fontSize={{ base: "lg", lg: "xl" }}
            mb={6}
            className="text"
          >
            São duas entradas para melhor te receber: pela Av. Jockey Club, ao
            lado da Casa das Linhas, e pela Rua Napoleão Lima, nº 1175.
          </Text>
        </Flex>
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
        viewport={{ once: true }}
      />
    </MotionFlex>
  );
}