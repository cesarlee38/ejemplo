import {useState, useEffect} from 'react'

export const useFetch = (url) =>{
const [data, setData] = useState(null)

useEffect(()=>{
    const abortController = new AbortController()
    const signal = abortController.signal
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
            if(!signal.aborted){
                setData(json)
            }
        } catch (error) {
            if(!signal.aborted){
                setData(null)
                console.log.err(error)
            }
        }
    }
    fetchData()
    return abortController.abort()
},[url])

return {data}
}