import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import { useHyruleData } from '../../hooks/HyruleData/HyruleData';

export default function HyruleList() {
  const { hyruleData, loading } = useHyruleData();

  if (loading) return <h3>Loading...</h3>;
  return (
    <>
      <div>Hyrule List</div>
      <div>
        <List hyruleData={hyruleData} />
      </div>
    </>
  );
}
