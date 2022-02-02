import { Link } from 'react-router-dom';

export default function List({ hyruleData }) {
  return (
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
  );
}
