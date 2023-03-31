import {
    Container,
    FormControl,
    Center,
    Button,
    Textarea,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    Box,
    Stack
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import openai from '../../openai/openai'
import supabase from '../../supabase/supabase'
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react'


function Wizard() {

    const [Query, setQuery] = useState('')

    const [loading, setLoading] = useState(false)

    const [result, setResult]: any = useState([])

    useEffect(() => {

        const fetchResearch = async () => {

            try {

                const { data }: any = await supabase.auth.getUser()

                if (data) {

                    try {

                        let { data: research, error }: any = await supabase
                            .from('Research')
                            .select("*")
                            .eq('user_id', `${data.user.id}`)
                            .order('id', { ascending: false })

                        setLoading(false)

                        if (research) {

                            setResult(research)

                            //console.log(research)

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

        fetchResearch()


    }, [])

    useEffect(() => {

        const researchListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Research' }, payload => {
                const newResearch = payload.new;
                setResult((oldResearch: any) => {
                    const newResearches = [...oldResearch, newResearch];
                    newResearches.sort((a, b) => b.id - a.id);
                    return newResearches;
                });
            })
            .subscribe()

        return () => {

            supabase.removeChannel(researchListener)

        };

    }, [])



    const handleResearch = async (event: any) => {

        event.preventDefault();

        try {

            setLoading(true)

            //running openAi api
            const completion: any = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `${Query}` }],
            });

            if (!completion.data.choices[0].message) {

                console.log("Could not run")

            } else {

                //console.log(completion.data.choices[0].message.content);

                //fetching user id from supabase
                try {

                    const { data }: any = await supabase.auth.getUser()

                    if (data) {

                        console.log(data.user.id)

                        //insert user query and other data into supabase
                        const { error } = await
                            supabase.from('Research').insert({
                                question: `${Query}`,
                                user_id: `${data.user.id}`,
                                result: completion.data.choices[0].message.content
                            })

                        if (error) {

                            console.log("Could not insert into the database")

                        } else {

                            console.log("Inserted into the database")

                            try {

                                const { error } = await
                                    supabase.from('History').insert({
                                        question: `${Query}`,
                                        user_id : `${data.user.id}`
                                    })

                                if (error) {

                                    console.log(error)

                                } else {

                                    console.log("Inserted into history")

                                }

                            } catch (error) {

                                console.log("Could not insert into history")

                            }

                        }

                    } else {

                        console.log("Could not fetch user data")

                    }

                } catch (error) {

                    console.log(error)

                }

            }

            setLoading(false)

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <>

            <Container color='white' mt={10} pt={10} id="wizard_form">

                <form onSubmit={handleResearch}>

                    <FormControl mb={5}>
                        <Textarea placeholder='E.g Write a research of 100 words on sentence structure and technical writing'
                            required value={Query} onChange={(event) => setQuery(event.target.value)} />
                    </FormControl>

                    <Center>

                        {loading ?

                            (

                                <Button isLoading loadingText='Running magic' mb={5} type="submit" w='100%' bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                    _hover={{
                                        borderColor: '#5279F4',
                                        backgroundColor: '#000000',
                                        color: '#5279F4'
                                    }}
                                >
                                    Run the magic
                                </Button>

                            ) : (

                                <Button mb={5} type="submit" w='100%' bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                    _hover={{
                                        borderColor: '#5279F4',
                                        backgroundColor: '#000000',
                                        color: '#5279F4'
                                    }}
                                >
                                    Run the magic
                                </Button>

                            )

                        }


                    </Center>

                </form>
            </Container>

            <Container maxW='container.sm' >

                {result.map((item: { id: Key | null | undefined; question: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; result: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (

                <Box p={4} bg="#191919" borderRadius={10} mt={3} key={item.id}>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>{item.question}</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        {item.result}
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                </Box>

                ))}

                <a href="#wizard_form">
                    <Button border='1px' borderColor='#5279F4' mb={3} bg='#5279F4' pos="fixed" bottom="20px" right="10px" borderRadius={45}
                        _hover={{
                            borderColor: '#5279F4',
                            backgroundColor: '#000000',
                            color: '#5279F4'
                        }}
                    >

                        <ArrowUpIcon />
                    </Button>
                </a>

            </Container>

            <br />

        </>

    )

}

export default Wizard