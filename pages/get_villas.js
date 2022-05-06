import { useEffect } from "react";


export default function () {


    useEffect(
        async () => {
            
                const res = await fetch('../api/get_villas?id=103', {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
            

                if(res.status === 200){ console.log(await res.json()) }
                if( res.status === 500 ) {console.log('There is an error')}
        }, []
    )

    return <>  </>
}