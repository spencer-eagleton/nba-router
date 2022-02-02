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
      <div>
        <h1>{hyruleEntry.name}</h1>
        <img src={hyruleEntry.image} />
      </div>
    </>
  );
}
