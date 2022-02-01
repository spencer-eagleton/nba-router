import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import HyruleList from '../../components/HyruleList/HyruleList';
import { fetchData } from '../../services/hyrule';

export default function Home() {
  // const [category, setCategory] = useState();
  // const { category } = useParams();
  // const params = useParams();
  // console.log('params', params);

  useEffect(() => {
    const fetchHyrule = async () => {
      const data = await fetchData();
      console.log(data);
    };
    fetchHyrule();
  }, []);

  return (
    <>
      <div>Home</div>
    </>
  );
}
