import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Redirect(){

    let navigate = useNavigate()

    useEffect(() => {

        navigate("../../App")
      
    }, [navigate])

    return (

        <></>

    )

}

export default Redirect