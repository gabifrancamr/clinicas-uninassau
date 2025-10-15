"use client"

import { Card, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function SpecialtiesCard({ image, alt, title, page }) {
    const router = useRouter();

    function goToPage(page) {
        router.push(`/${page}`)
    }

    return (
        <Card.Root minW="215px" overflow="hidden" alignItems={"center"}>
            <Image
                src={image}
                alt={alt}
                w="100%"         // largura total do container
                h="200px"        // altura fixa
                objectFit="cover" // corta a imagem para preencher o espaço
                borderRadius="md"
            />
            <Card.Body gap="2">
                <Card.Title textAlign={"center"}>{title}</Card.Title>
                <Button onClick={() => goToPage(page)} variant="solid" colorPalette={"yellow"}>Ver mais</Button>
            </Card.Body>
            
        </Card.Root>

    )
}