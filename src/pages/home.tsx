import Home from "../components/home/home.component"
import Features from "../components/features/features.component"
import Section from "../components/section/section.component"
import Footer from "../components/footer/footer.component"
import supabase from "../supabase/supabase"

function HomePage() {

    console.log(supabase)

    return (

        <>

            <Home />

            <Features />

            <Section />

            <Footer />

        </>

    )

}

export default HomePage