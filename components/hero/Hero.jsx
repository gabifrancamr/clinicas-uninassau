import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

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
        Clínica Escola Integrada Uninassau – Teresina
      </Text>

      {/* Imagem e texto lado a lado em telas médias+ */}
      <Flex
        direction={{ base: "column", lg: "row" }} 
        align="center"
        justify="center"
        gap={{ base: 4, md: 10 }} // espaço entre imagem e texto
        position="relative"
      >
        {/* Imagem controlada com top */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minW={{ base: "250px", lg: "400px" }}
          position="relative"
          top={{ base: "-8px", lg: "-10px" }}
        >
          <Image
            src="/hero3.png"
            alt="hero"
            maxW={{ base: "100%", lg: "90%", lg: "100%" }}
            h="auto"
            objectFit="contain"
          />
        </Box>

        {/* Texto */}
        <Flex
          flex="1"
          flexDirection="column"
          minW={{ base: "300px", lg: "400px" }}
          textAlign={{ base: "center", lg: "left" }}
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
            bgColor={"blue.800"}
            size={{ base: "lg", lg: "lg" }}
            alignSelf={{ base: "center", lg: "flex-start" }}
            className="shadow"
          >
            Agendar atendimento
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
