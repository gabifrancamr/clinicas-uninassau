import { Box, Text, Table } from "@chakra-ui/react"

export function ServicesTable({ category, description, items }) {
    return (
        <Box width={"100vw"}>
            <Box>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" className="title">{category}</Text>
                <Text fontSize={{ base: "lg", lg: "larger" }} mb={4} className="text">{description}</Text>
            </Box>

            <Table.Root size={{ base: "sm", md: "md", lg: "lg" }} variant="outline" bgColor="blue.200" showColumnBorder minW={{ base: "auto", sm: "100%" }} layout="fixed">
                    <Table.Header bg="blue.900">
                        <Table.Row>
                            <Table.ColumnHeader width="40%" color="blue.100">Procedimento</Table.ColumnHeader>
                            <Table.ColumnHeader width="40%" color="blue.100">Observação</Table.ColumnHeader>
                            <Table.ColumnHeader width="40%" textAlign="center" color="blue.100">Valor (R$)</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {items.map((item, i) => (
                            <Table.Row key={`${item.name}-${i}`} _hover={{ bg: "blue.50" }} color="blue.900">
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.note || ""}</Table.Cell>
                                <Table.Cell textAlign="center">{item.price}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
        </Box>

    )
}
