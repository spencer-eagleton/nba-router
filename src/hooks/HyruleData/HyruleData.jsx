import { fetchData } from '../../services/hyrule';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useHyruleData = () => {
  const [hyruleData, setHyruleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchHyrule = async () => {
      setLoading(true);
      const data = await fetchData(category);
      setHyruleData(data);
      setLoading(false);
    };
    fetchHyrule();
  }, [category]);
  return { hyruleData, setHyruleData, loading, setLoading };
};
