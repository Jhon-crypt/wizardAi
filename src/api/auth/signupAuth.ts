import supabase from "../../supabase/supabase"

async function handleSignup(email : any, fullname : any, password : any){

    //console.log(email)

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {

                full_name: fullname,

            }
        }
    })

    if(error){

        console.log(error)

    }else{

        console.log(data)

    }

}

export default handleSignup