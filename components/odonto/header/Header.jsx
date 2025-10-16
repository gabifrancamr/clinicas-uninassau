import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HeaderMenu } from "../header-menu/HeaderMenu";

export function Header() {
    return (
        <Flex paddingX={{ base: "4", md: "8" }} paddingY={{ base: "4" }} justifyContent={"space-between"} alignItems={"center"}>
            <Link href="/">
                <Image src="/logo.png" width={200} height={100} alt="logo uninassau" />
            </Link>
            <HeaderMenu />
        </Flex>
    )
}