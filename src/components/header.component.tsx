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
import { Outlet, Link } from "react-router-dom"


function Header(props : {
    login_color : string,
    signup_color : string,
    about_color : string,
    terms_color : string
}) {

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
                            <ListItem color={props.login_color}>
                                <Link to="Login">
                                    <ListIcon as={BiLogInCircle} />
                                    Login
                                </Link>
                            </ListItem>
                            <ListItem  color={props.signup_color}>
                                <Link to="Signup">
                                    <ListIcon as={BiUserCircle} />
                                    Sign up
                                </Link>
                            </ListItem>
                            <ListItem color={props.about_color}>
                                <Link to="About">
                                    <ListIcon as={MdNotes} />
                                    About
                                </Link>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem color={props.terms_color}>
                                <Link to="Terms">
                                    <ListIcon as={BiLogInCircle} />
                                    Terms
                                </Link>
                            </ListItem>
                        </List>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Outlet />

        </>
    );
}



export default Header