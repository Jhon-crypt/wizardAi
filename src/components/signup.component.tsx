import {
    Container,
    Heading,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiLogInCircle } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { EmailIcon } from '@chakra-ui/icons';
import { LockIcon } from '@chakra-ui/icons'

function Signup() {

    return (

        <>

            <Container color='white' mt={10} pt={10}>

                <Center>
                    <Heading as="h1" size="3xl" mb={5}>
                        <Icon as={BiLogInCircle} /> Signup
                    </Heading>
                </Center>

                <br />

                <form>

                    <FormControl mb={5}>
                        <FormLabel><Icon as={BiUser}  /> Fullname</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><EmailIcon /> Email address</FormLabel>
                        <Input type='email' />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><LockIcon /> Password</FormLabel>
                        <Input type='password' />
                    </FormControl>

                    <Button type="submit" w='100%' leftIcon={<Icon as={BiLogInCircle} />} bg='#5279F4'>
                        Signup
                    </Button>

                </form>

            </Container>

            <br /> <br />

        </>

    )

}

export default Signup