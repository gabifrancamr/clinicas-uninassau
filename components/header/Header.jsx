import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { HeaderMenu } from "../header-menu/HeaderMenu";

export function Header() {
    return (
        <Flex paddingX={{ base: "4", md: "8" }} paddingY={{ base: "2rem" }} justifyContent={"space-between"}>
            <Image src="/logo-branco.svg" width={200} height={100} alt="logo uninassau" />
            <HeaderMenu />
        </Flex>
    )
}