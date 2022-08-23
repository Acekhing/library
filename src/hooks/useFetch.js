import { useEffect, useState } from "react";


const useFetch = (url, method) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url, {method: method})
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
    }, [url]);

    const refetch = () => {
        setLoading(true);
        fetch(url, {method: method})
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
      };

    return { data, loading, error, refetch };
};

export default useFetch;