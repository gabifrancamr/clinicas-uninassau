"use client"

import { Card, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function SpecialtiesCard({ image, alt, title, description, page }) {
    const router = useRouter();

    function goToPage(page) {
        router.push(`/${page}`)
    }

    return (
        <Card.Root className="shadow" overflow="hidden" alignItems={"center"} flex="1" display="flex" flexDirection="column" justifyContent="space-between">
            <Image
                src={image}
                alt={alt}
                w="100%"         // largura total do container
                h="200px"        // altura fixa
                objectFit="cover" // corta a imagem para preencher o espaço
                borderRadius="md"
            />
            <Card.Body textAlign={"center"} gap="2">
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>

            </Card.Body>
            <Card.Footer gap="2">
                <Button onClick={() => goToPage(page)} variant="solid" bgColor={"blue.800"}>Ver mais</Button>
            </Card.Footer>

        </Card.Root>

    )
}