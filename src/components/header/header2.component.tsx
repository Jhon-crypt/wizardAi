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
    ListIcon,
    Button,
    VStack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { RepeatClockIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/icons';
import { GiWizardFace } from "react-icons/gi";
import { Outlet, Link } from "react-router-dom"
import supabase from '../../supabase/supabase'
import { useState, useEffect } from "react"
import { DeleteIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

function Header(props: {
    login_color: string,
    signup_color: string,
    about_color: string,
    terms_color: string
}) {

    const [history, setHistory]: any = useState([])

    const { isOpen, onOpen, onClose }: any = useDisclosure()

    let navigate = useNavigate()

    const btnRef: any = React.useRef()


    useEffect(() => {

        const fetchHistory = async () => {

            try {

                const { data }: any = await supabase.auth.getUser()

                if (data) {

                    try {

                        let { data: history, error }: any = await supabase
                            .from('History')
                            .select("*")
                            .eq('user_id', `${data.user.id}`)
                            .order('id', { ascending: false })

                        if (history) {

                            setHistory(history)

                            //console.log(History)

                        } else {

                            console.log(error)

                        }


                    } catch (error) {

                        console.log(error)

                    }


                }


            } catch (error) {

                console.log(error)

            }

        }

        fetchHistory()


    }, [])

    useEffect(() => {

        const historyListener = supabase
            .channel('history')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'History' }, payload => {
                const newHistory = payload.new;
                setHistory((oldHistory: any) => {
                    const newHistories = [...oldHistory, newHistory];
                    newHistories.sort((a, b) => b.id - a.id);
                    return newHistories;
                });
            })
            .subscribe()

        return () => {

            supabase.removeChannel(historyListener)

        };

    }, [])

    const handleDelete = (historyId: any) => async () => {

        try {

            //setLoadingResearch(true)

            const { error } = await supabase
                .from('History')
                .delete()
                .eq('id', `${historyId}`)

            //setLoadingResearch(true)

            if (error) {

                console.log(error)

            } else {

                navigate("/Redirect")

            }

        } catch (error) {

            console.log(error)

        }


    }


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

                        <Link to="Profile" onClick={onClose}>Oladele John</Link>

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

                                {history.map((item: { id: React.Key | null | undefined; question: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (

                                    <>

                                        {/* You can also use custom icons from react-icons */}
                                        <ListItem color={props.terms_color} key={item.id}>
                                            <VStack
                                                spacing={4}
                                                align='stretch'
                                            >
                                                <Box>
                                                    {item.question}
                                                </Box>

                                                <Box>
                                                    <Button leftIcon={<DeleteIcon />} bg='black' color='red' borderRadius={45} border='1px' borderColor='red'
                                                    size='xs'
                                                    _hover={{
                                                        borderColor: 'red',
                                                        backgroundColor: 'red',
                                                        color: 'white'
                                                    }} onClick={handleDelete(`${item.id}`)} >

                                                        Delete

                                                    </Button>
                                                </Box>

                                            </VStack>
                                        </ListItem>
                                        <Divider />

                                    </>

                                ))}

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