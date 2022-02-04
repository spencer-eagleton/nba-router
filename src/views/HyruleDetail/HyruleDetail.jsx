import DetailCard from '../../components/DetailCard/DetailCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataById } from '../../services/hyrule';
import { useHistory } from 'react-router-dom';

export default function HyruleDetail() {
  const [loading, setLoading] = useState(true);
  const [hyruleEntry, setHyruleEntry] = useState([]);
  const { entry } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchHyruleById = async () => {
      setLoading(true);
      const data = await fetchDataById(entry);
      setHyruleEntry(data);
      setLoading(false);
    };

    fetchHyruleById();
  }, [entry]);
  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <h1>Hyrule Detail</h1>
      <DetailCard hyruleEntry={hyruleEntry} />
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Back to Home
      </button>
    </>
  );
}
