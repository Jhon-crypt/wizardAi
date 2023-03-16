import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BsTwitter,BsFacebook } from "react-icons/bs";

function Footer() {

    return (

        <>
            <Center>
                <Breadcrumb separator='|' color="white">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Icon as={BsTwitter}></Icon></BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink>Oladele John</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink href='#'><Icon as={BsFacebook}></Icon></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>

            <br /><br />

        </>

    )

}

export default Footer
