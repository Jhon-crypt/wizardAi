import Header from "../components/header.component"
import Signup from "../components/signup.component"
import Footer from "../components/footer.component"

function SignupPage() {

    return (

        <>

            <Header
                login_color="white"
                signup_color="#5279F4"
                about_color="white"
                terms_color="white"
            />

            <Signup />

            <Footer />

        </>

    )

}

export default SignupPage