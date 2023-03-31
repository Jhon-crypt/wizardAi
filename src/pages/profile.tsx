import Profile from "../components/profile/profile.components"
import { useState, useEffect } from 'react'
import supabase from '../supabase/supabase';
import Logout from "../components/logout/logout.component";

function ProfilePage(){

    const [loginStatus, setLoginStatus] : any = useState(false)

    useEffect(() => {
     
        const loginGuard = async () => {

            try{

                const { data, error } = await supabase.auth.getSession()

                if(!data.session){

                    console.log(error)

                    setLoginStatus(false)

                }else{

                    setLoginStatus(true)

                    console.log(data)

                }

            }catch(error){

                console.log(error)

            }

        }

        loginGuard()

    }, [])
    

    return (

        
         <>

            {loginStatus? 

                (

                    <Profile />

                ): (

                    <Logout />

                )
            
            }
        
        
        </>


    )

}

export default ProfilePage