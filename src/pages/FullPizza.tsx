import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza: FC = () => {
    const [data, setData] = useState<{ name: string; imageUrl: string; price: number }>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const fetchPizza = async () => {
                const { data } = await axios.get(
                    `https://636b5bd97f47ef51e12e05f5.mockapi.io/items/${id}`
                );
                setData(data);
            };
            fetchPizza();
        } catch (err) {
            console.error(err);
            navigate('/');
        }
    }, [id, navigate]);

    if (!data) return <>Loading...</>;

    return (
        <div className="container">
            <img src={data.imageUrl} alt="" />
            <h2>{data.name}</h2>
            <h4>{data.price} Р</h4>
        </div>
    );
};

export default FullPizza;
