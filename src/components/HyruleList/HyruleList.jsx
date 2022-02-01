import { fetchData } from '../../services/hyrule';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function HyruleList() {
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    const fetchHyrule = async () => {
      const data = await fetchData();
      console.log(data);
    };
    fetchHyrule();
  }, []);

  return (
    <>
      <div>Hyrule List</div>
      <div></div>
    </>
  );
}
