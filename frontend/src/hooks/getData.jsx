import {useState, useEffect} from 'react';

export function getData(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const[error,setError]= useState(null);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            if (mounted){
                setLoading(true);
                setError(null);
            }
            try {
                let myObject = await fetch(url);
                if (!myObject.ok) {
                    throw new Error(`HTTP error! Status: ${myObject.status}`);
                }
                let myData = await myObject.json();
                if (mounted) {
                    setData(myData);
                }
            } catch (error) {
                if (mounted) {
                    setError(error.message || "Unable to load");
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }
        fetchData();
        return () => {mounted = false; };
    }, [url])
    return {data, loading, error};
}