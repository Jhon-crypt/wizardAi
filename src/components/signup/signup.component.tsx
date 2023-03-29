import {
    Container,
    Heading,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon,
    CloseButton,
    Box,
    AlertDescription,
    useDisclosure
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiUserCircle } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { EmailIcon } from '@chakra-ui/icons';
import { LockIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import supabase from '../../supabase/supabase';

function Signup() {

    const [FullName, setFullName] = useState('')

    const [Email, setEmail] = useState('');

    const [Password, setPassword] = useState('')

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false)

    const [signupStatus, setSignupStatus] = useState(false)

    const handleSignup = async (event: any) => {

        setLoading(true)

        event.preventDefault();

        try {

            const { data, error } = await supabase.auth.signUp({
                email: `${Email}`,
                password: `${Password}`,
                options: {
                    data: {

                        full_name: `${FullName}`,

                    }
                }
            })

            if (error) {

                console.log(error)

                setError(true)

                setSignupStatus(false)

            } else {

                setError(false)

                setSignupStatus(true)

                console.log(data)

            }

            setLoading(false)

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <>

            <Container color='white' mt={10} pt={10}>

                <Center>
                    <Heading as="h1" size="3xl" mb={5}>
                        <Icon as={BiUserCircle} /> Signup
                    </Heading>
                </Center>

                <br />

                <form onSubmit={handleSignup}>

                    <Center>
                        {error ?

                            (



                                <Alert status='error' mb={3} color="black" as="b" borderRadius={45} w={300}>
                                    <AlertIcon />
                                    <Box>
                                        <AlertDescription>
                                            <Center>
                                                Something went wrong
                                            </Center>
                                        </AlertDescription>
                                    </Box>
                                </Alert>

                            ) : (

                                <></>

                            )

                        }

                        {signupStatus ?

                            (

                                <Alert status='success' mb={3} color="black" as="b" borderRadius={45} w={350}>
                                    <AlertIcon />
                                    <Box>
                                        <AlertDescription>
                                            Account created, check your mail, then continue 
                                            by loggin in <a href="http://localhost:5173/Login" color="blue"><Button bg='#5279F4' size='xs' borderRadius={45}>here</Button></a>
                                        </AlertDescription>
                                    </Box>
                                </Alert>

                            ) : (

                                <></>

                            )

                        }

                    </Center>

                    <FormControl mb={5}>
                        <FormLabel><Icon as={BiUser} /> Fullname</FormLabel>
                        <Input type='text' required value={FullName} onChange={(event) => setFullName(event.target.value)} />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><EmailIcon /> Email address</FormLabel>
                        <Input type='email' required value={Email} onChange={(event) => setEmail(event.target.value)} />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><LockIcon /> Password</FormLabel>
                        <Input type='password' required value={Password} onChange={(event) => setPassword(event.target.value)} 
                        minLength={6}/>
                    </FormControl>

                    {loading ?

                        (

                            <Button isLoading loadingText='Submitting' type="submit" w='100%' bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                _hover={{
                                    borderColor: '#5279F4',
                                    backgroundColor: '#000000',
                                    color: '#5279F4'
                                }}>
                                Signup
                            </Button>

                        ) : (

                            <Button type="submit" w='100%' leftIcon={<Icon as={BiUserCircle} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                _hover={{
                                    borderColor: '#5279F4',
                                    backgroundColor: '#000000',
                                    color: '#5279F4'
                                }}>
                                Signup
                            </Button>

                        )

                    }



                </form>

            </Container>

            <br /> <br />

        </>

    )

}

export default Signup