"use client";

import { Button, Menu, Portal, HStack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export function SpecialtiesHeaderMenu() {
    return (
        <Box>
            {/* --- MENU HAMBURGUER (mobile) --- */}
            <Box display={{ base: "block", lg: "none" }}>
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button bgColor={"blue.800"} color={"white"} variant="solid" size="sm">
                            <IoMenu />
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Item asChild>
                                    <Link href="/">Início</Link>
                                </Menu.Item>
                                <Menu.Item asChild>
                                    <Link href="#services">Serviços e Valores</Link>
                                </Menu.Item>
                                <Menu.Item asChild>
                                    <Link href="#location">Contato e Localização</Link>
                                </Menu.Item>
                                <Menu.Item asChild>
                                    <Link href="/psicologia">Psicologia</Link>
                                </Menu.Item>
                                <Menu.Item asChild>
                                    <Link href="/odontologia">Odontologia</Link>
                                </Menu.Item>
                                <Menu.Item asChild>
                                    <Link href="/veterinaria">Veterinária</Link>
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </Box>

            {/* --- NAVBAR (desktop) --- */}
            <HStack
                as="nav"
                display={{ base: "none", lg: "flex" }}
                color="blue.800"
                fontWeight="bold"
                gap={30}
            >
                <Text
                    asChild
                    cursor="pointer"
                    _hover={{ color: "blue.900", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                >
                    <Link href="/">
                        Início
                    </Link>
                </Text>
                <Text
                    asChild
                    cursor="pointer"
                    _hover={{ color: "blue.900", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                >
                    <Link href="#services">
                        Serviços e Valores
                    </Link>
                </Text>
                <Text
                    asChild
                    cursor="pointer"
                    _hover={{ color: "blue.900", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                >
                    <Link href="#location">
                        Contato e Localização
                    </Link>
                </Text>
                <Text
                    asChild
                    cursor="pointer"
                    _hover={{ color: "blue.900", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                >
                    <Link href="/psicologia">
                        Psicologia
                    </Link>
                </Text>
                <Text
                    asChild
                    cursor="pointer"
                    _hover={{ color: "blue.900", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                >
                    <Link href="/odontologia">
                        Odontologia
                    </Link>
                </Text>
                <Text
                    asChild
                    cursor="pointer"
                    _hover={{ color: "blue.900", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                >
                    <Link href="/veterinaria">
                        Veterinária
                    </Link>
                </Text>
            </HStack>
        </Box>
    );
}
