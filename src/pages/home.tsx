import Home from "../components/home.component"
import Header from "../components/header.component"
import Features from "../components/features.component"
import Section from "../components/section.component"
import Footer from "../components/footer.component"

function HomePage() {

    return (

        <>

            <Header 
                login_color="white"
                signup_color="white"
                about_color="white"
                terms_color="white"
            />

            <Home />

            <Features />

            <Section />

            <Footer />

        </>

    )

}

export default HomePage