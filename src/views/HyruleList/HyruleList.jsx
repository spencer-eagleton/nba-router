import { fetchData } from '../../services/hyrule';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
export default function HyruleList() {
  const [loading, setLoading] = useState(true);
  const [hyruleData, setHyruleData] = useState([]);
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

  if (loading) return <h3>Loading...</h3>;
  return (
    <>
      <div>Hyrule List</div>
      <List hyruleData={hyruleData} />
    </>
  );
}
