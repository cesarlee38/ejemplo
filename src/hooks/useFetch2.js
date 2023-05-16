import {useState, useEffect} from 'react'

export const useFetch2 = (url) =>{
const [data, setData] = useState(null)

useEffect(()=>{
    const fetchData = async ()=>{
        try {
            const res = await fetch(url)
            if(!res.ok){
                let err = new Error("Error en la peticion fetch")
                err.status = res.status || "00"
                err.statusText = res.statusText || "Ocurrio un error"
                throw err
            }
            const json = await res.json()
            setData(json)
        } catch (error) {
            console.log.err(error)
        }
    }
    fetchData()
},[url])

return data
}