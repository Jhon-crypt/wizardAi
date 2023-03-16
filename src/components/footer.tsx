import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center
} from '@chakra-ui/react'

function Footer() {

    return (

        <>
            <Center>
                <Breadcrumb separator='-' color="white">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink>Oladele John</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>

            <br /><br />

        </>

    )

}

export default Footer
