import Header from "../components/header.component"
import Login from "../components/login.component"

function LoginPage() {


    return (

        <>

            <Header
                login_color="#5279F4"
                signup_color="white"
                about_color="white"
                terms_color="white"
            />

            <Login />

        </>

    )

}

export default LoginPage