import {
    Container,
    Heading,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    AlertIcon,
    Alert,
    AlertDescription,
    Box
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiLogInCircle } from "react-icons/bi";
import { EmailIcon } from '@chakra-ui/icons';
import { LockIcon } from '@chakra-ui/icons'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase/supabase';

function Login() {

    let navigate = useNavigate()

    const [Email, setEmail] = useState('')

    const [Password, setPassword] = useState('')

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false)

    const handleLogin = async (event: any) => {

       
        event.preventDefault();

        try {

            setLoading(true)

            const { data, error }: any = await supabase.auth.signInWithPassword({
                email: `${Email}`,
                password: `${Password}`,
            })

            setLoading(false)

            if (error) {

                setError(true)

                console.log(data)

            } else {

                setError(false)

                console.log(error)

                navigate("/App")


            }

        } catch (error) {

            console.log(error)

        }



    }

    return (

        <>


            <Container color='white' mt={10} pt={10}>

                <Center>
                    <Heading as="h1" size="3xl" mb={5}>
                        <Icon as={BiLogInCircle} /> Login
                    </Heading>
                </Center>

                <br />

                <form onSubmit={handleLogin}>

                    <Center>

                        {error ?

                            (

                                <Alert status='error' mb={3} color="black" as="b" borderRadius={45} w={300}>
                                    <AlertIcon />
                                    <Box>
                                        <AlertDescription>
                                            <Center>
                                                Wrong email or password
                                            </Center>
                                        </AlertDescription>
                                    </Box>
                                </Alert>

                            ) : (

                                <></>

                            )

                        }

                    </Center>

                    <FormControl mb={5}>
                        <FormLabel><EmailIcon /> Email address</FormLabel>
                        <Input type='email' required value={Email} onChange={(event) => setEmail(event.target.value)} />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><LockIcon /> Password</FormLabel>
                        <Input type='password' required value={Password} onChange={(event) => setPassword(event.target.value)} />
                    </FormControl>

                    {loading ?
                        (

                            <Button isLoading loadingText='Loggin in' type="submit" w='100%' leftIcon={<Icon as={BiLogInCircle} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                _hover={{
                                    borderColor: '#5279F4',
                                    backgroundColor: '#000000',
                                    color: '#5279F4'
                                }}>
                                Login
                            </Button>

                        ) : (

                            <Button type="submit" w='100%' leftIcon={<Icon as={BiLogInCircle} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                _hover={{
                                    borderColor: '#5279F4',
                                    backgroundColor: '#000000',
                                    color: '#5279F4'
                                }}>
                                Login
                            </Button>

                        )

                    }



                </form>

            </Container>

            <br /> <br />

        </>

    )

}

export default Login