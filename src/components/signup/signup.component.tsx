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
    AlertDescription
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiUserCircle } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { EmailIcon } from '@chakra-ui/icons';
import { LockIcon } from '@chakra-ui/icons'

function Signup() {

    return (

        <>

            <Container color='white' mt={10} pt={10}>

                <Center>
                    <Heading as="h1" size="3xl" mb={5}>
                        <Icon as={BiUserCircle} /> Signup
                    </Heading>
                </Center>

                <br />

                <form>

                    <Center>
                        <Alert status='success' mb={3} color="black" as="b" borderRadius={45} w={410}>
                            <AlertIcon />
                            <Box>
                                <AlertDescription>
                                    Data uploaded to the server. Fire on!
                                </AlertDescription>
                            </Box>
                            <CloseButton
                                alignSelf='flex-start'
                                position='relative'
                                right={-10}
                                top={-1}
                            />
                        </Alert>
                    </Center>

                    <FormControl mb={5}>
                        <FormLabel><Icon as={BiUser} /> Fullname</FormLabel>
                        <Input type='text'  required/>
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><EmailIcon /> Email address</FormLabel>
                        <Input type='email' required/>
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><LockIcon /> Password</FormLabel>
                        <Input type='password' required/>
                    </FormControl>

                    <Button type="submit" w='100%' leftIcon={<Icon as={BiUserCircle} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                    _hover={{
                        borderColor: '#5279F4',
                        backgroundColor: '#000000',
                        color: '#5279F4'
                    }}>
                        Signup
                    </Button>

                </form>

            </Container>

            <br /> <br />

        </>

    )

}

export default Signup