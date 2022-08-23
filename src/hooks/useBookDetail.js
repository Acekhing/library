import { useEffect, useState } from "react"
import { BASE_URL } from "../utilities/Constants"

const useBookDetail = (bookId) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(BASE_URL+`/${bookId}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setData(data);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
            setError(err);
        });
    }, [bookId])
   
    return [data, error, loading]
}

export default useBookDetail;