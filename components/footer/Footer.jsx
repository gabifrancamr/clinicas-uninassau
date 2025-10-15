'use client'

import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export function Footer() {
  return (
    <MotionBox
      borderTop="1px solid black"
      py="1rem"
      className="text"
      initial={{ opacity: 0, y: 20 }}           // movimento menor
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Text textAlign="center">
        © 2025 Clínica Escola UNINASSAU.
      </Text>

      <MotionFlex
        justifyContent="center"
        mt={4}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* MOBILE */}
        <SimpleGrid display={{ base: "grid", md: "none" }} columns={2} fontSize="sm" fontWeight="bold">
          <Flex gap={2} alignItems="center">
            <RiInstagramFill />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link href="https://www.instagram.com/uninassau.teresina/">
                @uninassauteresina
              </Link>
            </Text>
          </Flex>

          <Flex gap={2} alignItems="center">
            <RiWhatsappFill color="green" />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp Odontologia
              </Link>
            </Text>
          </Flex>

          <Flex gap={2} alignItems="center">
            <RiWhatsappFill color="green" />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp Psicologia
              </Link>
            </Text>
          </Flex>

          <Flex gap={2} alignItems="center">
            <RiWhatsappFill color="green" />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5586999704054&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp Veterinária
              </Link>
            </Text>
          </Flex>
        </SimpleGrid>

        {/* DESKTOP */}
        <Flex display={{ base: "none", md: "flex" }} gap="6" fontWeight="bold">
          <Flex gap={2} alignItems="center">
            <RiInstagramFill />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link href="https://www.instagram.com/uninassau.teresina/">
                @uninassauteresina
              </Link>
            </Text>
          </Flex>

          <Flex gap={2} alignItems="center">
            <RiWhatsappFill color="green" />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp Odontologia
              </Link>
            </Text>
          </Flex>

          <Flex gap={2} alignItems="center">
            <RiWhatsappFill color="green" />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5586999875239&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp Psicologia
              </Link>
            </Text>
          </Flex>

          <Flex gap={2} alignItems="center">
            <RiWhatsappFill color="green" />
            <Text
              cursor="pointer"
              _hover={{ color: "blue.900", transform: "scale(1.05)" }}
              transition="all 0.2s"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5586999704054&text=Ol%C3%A1%2C+vim+do+site+e+desejo+realizar+agendamento.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp Veterinária
              </Link>
            </Text>
          </Flex>
        </Flex>
      </MotionFlex>
    </MotionBox>
  );
}