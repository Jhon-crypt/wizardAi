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
import { RepeatClockIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/icons';
import { GiWizardFace } from "react-icons/gi";
import { Outlet, Link } from "react-router-dom"


function Header(props: {
    login_color: string,
    signup_color: string,
    about_color: string,
    terms_color: string
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
                    <DrawerHeader color='#5279F4'>

                        <Link to="Profile">Oladele John</Link>

                    </DrawerHeader>

                    <Divider />

                    <DrawerBody>

                        

                        <List spacing={3} fontSize='xl' mb={3}>
                            <ListItem color={props.login_color}>
                                <Link to="Login">
                                    <ListIcon as={RepeatClockIcon} />
                                    History
                                </Link>
                            </ListItem>
                        </List>

                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' pt={3} pb={3} pl={3} pr={3} bg="#000000">

                            <List spacing={3} fontSize='lg'>
                                
                                {/* You can also use custom icons from react-icons */}
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem color={props.terms_color}>
                                    <Link to="Terms">

                                        Termsnjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjd djkdjdjdjdjdjdjdjdjdjdjdjdjd
                                    </Link>
                                </ListItem>
                                <Divider />
                            </List>

                        </Box>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Outlet />

        </>
    );
}



export default Header