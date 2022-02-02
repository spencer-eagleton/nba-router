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

  const { image, name, description, common_locations } = hyruleEntry;
  return (
    <>
      {console.log(common_locations)}
      <h1>Hyrule Detail</h1>
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>{description}</p>
        {common_locations?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
}
