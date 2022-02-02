import DetailCard from '../../components/DetailCard/DetailCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataById } from '../../services/hyrule';
export default function HyruleDetail() {
  const [hyruleEntry, setHyruleEntry] = useState([]);
  const { entry } = useParams();
  console.log(entry);

  useEffect(() => {
    const fetchHyruleById = async () => {
      const data = await fetchDataById(entry);
      console.log(data);
      setHyruleEntry(data);
    };

    fetchHyruleById();
  }, [entry]);

  return (
    <>
      <h1>Hyrule Detail</h1>
      <DetailCard hyruleEntry={hyruleEntry} />
    </>
  );
}
