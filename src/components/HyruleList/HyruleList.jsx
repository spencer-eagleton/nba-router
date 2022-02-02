import { fetchData } from '../../services/hyrule';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <div>
        {hyruleData.map((item) => (
          <div key={item.id}>
            <Link to={`/entry/${item.id}`}>
              <h3>{item.name}</h3>
              <img src={item.image} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
