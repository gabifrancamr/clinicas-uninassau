import { Button, Menu, Portal } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

export function HeaderMenu() {
    return (

        <Menu.Root>
            <Menu.Trigger asChild>
                <Button colorPalette="yellow" variant="solid" size="sm">
                    <IoMenu />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="start">
                            Início
                        </Menu.Item>
                        <Menu.Item value="specialties">
                            Especialidades
                        </Menu.Item>
                        <Menu.Item value="location">
                            Localização
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>

    )
}