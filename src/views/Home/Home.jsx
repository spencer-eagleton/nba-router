import { useEffect } from 'react';
import HyruleList from '../../components/HyruleList/HyruleList';
import { fetchData } from '../../services/hyrule';

export default function Home() {
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
      <HyruleList />
    </>
  );
}
