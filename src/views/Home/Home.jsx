import { useEffect } from 'react';
import MonsterList from '../../components/MonsterList/MonsterList';
import { fetchMonsters } from '../../services/monsters';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMonsters();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Home</div>
      <MonsterList />
    </>
  );
}
