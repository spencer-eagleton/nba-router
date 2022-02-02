import { fetchData } from '../../services/hyrule';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function HyruleList() {
  const [hyruleData, setHyruleData] = useState([]);
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    const fetchHyrule = async () => {
      const data = await fetchData(category);
      console.log(data);
      setHyruleData(data);
    };
    fetchHyrule();
  }, [category]);

  return (
    <>
      <div>Hyrule List</div>
      <div></div>
    </>
  );
}
