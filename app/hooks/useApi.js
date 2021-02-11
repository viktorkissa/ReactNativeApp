import { useState } from 'react';

export default useAPI = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        const { ok, data, problem } = await apiFunc(...args);
        setLoading(false);

        if (!ok) return setError(true);  

        setError(false);
        setData(data);
    };

    return { data, error, loading, request };
};