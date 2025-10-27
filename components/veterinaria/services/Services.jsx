"use client";

import { Text, Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import veterinaryServices from "../../../data/veterinaria.json";
import { ServicesTable } from "../services-table/ServicesTable";

// componentes animados
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export function Services() {
  const { veterinary_services } = veterinaryServices;

  return (
    <MotionFlex
      id="services"
      flexDirection="column"
      alignItems="center"
      marginTop="8"
      paddingX={{ base: "4", md: "8", lg: "24" }}
      spaceY={6}
      initial={{ opacity: 0, y: 50 }} // começa invisível e mais abaixo
      whileInView={{ opacity: 1, y: 0 }} // aparece e sobe
      transition={{ duration: 0.6 }}
    >
      <Box>
        {/* Título com animação */}
        <MotionText
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Serviços e valores
        </MotionText>

        <MotionText
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="medium"
          textAlign="center"
          className="text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          15% de desconto para alunos e funcionários
        </MotionText>
      </Box>

      {/* Cards animados */}
      <Flex
        flexDirection={"column"}
        gap={8}
        alignItems="stretch"
        justifyContent="center"
        w="100%"
      >
        {veterinary_services.map((item, i) => (
          <motion.div
            key={item.category}
            style={{ flex: 1, display: "flex" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }} // delay crescente para efeito em sequência
          >
            <ServicesTable
              category={item.category}
              description={item.description}
              items={item.items}
            />
          </motion.div>
        ))}
      </Flex>
    </MotionFlex>
  );
}
