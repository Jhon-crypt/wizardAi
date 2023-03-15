import React from 'react';
import {
    Menu,
    Flex,
    Spacer,
    Box,
    Container,
    Text,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Divider,
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/icons';
import { GiWizardFace } from "react-icons/gi";
import { BiLogInCircle } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi"
import { MdNotes } from "react-icons/md";


function Header() {

    const { isOpen, onOpen, onClose }: any = useDisclosure()
    const btnRef: any = React.useRef()


    return (
        <>
            <Box bg="#191919" mr={4} ml={4} mt={3} borderRadius='45px' boxShadow='2xl'>
                <Container maxW='container.lg'>
                    <Menu>
                        <Flex pl={3} pr={3} pt={2} pb={2}>
                            <Box p='4' color='#5279F4'>

                                <Text fontSize='2xl' as='b'><Icon as={GiWizardFace} /> WizardAi</Text>

                            </Box>
                            <Spacer />
                            <Box p='4' color='#5279F4'>
                                <Text fontSize='2xl' ref={btnRef} onClick={onOpen}>
                                    <HamburgerIcon as='b' />
                                </Text>
                            </Box>
                        </Flex>

                    </Menu>
                </Container>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />

                <DrawerContent bg='#191919' color='white'>
                    <DrawerCloseButton />
                    <DrawerHeader color='#5279F4'>Menu</DrawerHeader>

                    <Divider />

                    <DrawerBody>

                        <List spacing={3} fontSize='2xl'>
                            <ListItem>
                                <ListIcon as={BiLogInCircle} />
                                Login
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiUserCircle} />
                                Sign up
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdNotes} />
                                About
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                                <ListIcon as={BiLogInCircle} />
                                Terms
                            </ListItem>
                        </List>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    );
}



export default Header