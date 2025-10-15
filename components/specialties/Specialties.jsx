"use client";

import { Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SpecialtiesCard } from "../specialties-card/SpecialtiesCard";

// componentes animados
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export function Specialties() {
  return (
    <MotionFlex
      id="specialties"
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
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        className="title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Especialidades
      </MotionText>

      {/* Cards animados */}
      <Flex flexDirection={{ base: "column", sm: "row" }} gap={2} alignItems="stretch" justifyContent="center" w="100%">
        {[
          { image: "/psic.jpg", title: "🧠 Psicologia", description: "Escuta acolhedora e apoio emocional para todas as fases da vida" },
          { image: "/dent.jpg", title: "🦷 Odontologia", description: "Saúde bucal com atenção, conforto e tecnologia" },
          { image: "/vet.jpg", title: "🐾 Veterinária", description: "Cuidamos dos seus pets com carinho e responsabilidade" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            style={{ flex: 1, display: "flex" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }} // delay crescente para efeito em sequência
          >
            <SpecialtiesCard
              image={item.image}
              alt={`card de ${item.title.toLowerCase()}`}
              description={item.description}
              page={item.title.toLowerCase()}
              title={item.title}
            />
          </motion.div>
        ))}
      </Flex>
    </MotionFlex>
  );
}
