"use client";

import { Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dentalServices from '../../../data/odontologia.json'
import { ServicesTable } from "../services-table/ServicesTable";

// componentes animados
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export function Services() {
    const { dental_services } = dentalServices;

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

      {/* Cards animados */}
      <Flex flexDirection={"column"} gap={2} alignItems="stretch" justifyContent="center" w="100%">
        {dental_services.map((item, i) => (
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
