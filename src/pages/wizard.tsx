import {
    Container,
    CircularProgress
} from '@chakra-ui/react'
import Wizard from "../components/wizard/wizard.component"
import { useState, useEffect } from 'react'
import supabase from '../supabase/supabase';
import Logout from "../components/logout/logout.component";

function WizardPage() {

    const [loginStatus, setLoginStatus]: any = useState(false)

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const loginGuard = async () => {

            try {

                setLoading(true)

                const { data, error } = await supabase.auth.getSession()

                setLoading(false)

                if (!data.session) {

                    console.log(error)

                    setLoginStatus(false)

                } else {

                    setLoginStatus(true)

                    //console.log(data)

                }

            } catch (error) {

                console.log(error)

            }

        }

        loginGuard()

    }, [])


    return (

        <>

            {loading ?

                (

                    <Container color='white' mt={10} pt={10} mb={10}>

                    </Container>

                ) : (

                    <>

                        {loginStatus ?

                            (

                                <Wizard />

                            ) : (

                                <Logout />

                            )

                        }

                    </>

                )

            }


        </>

    )

}

export default WizardPage