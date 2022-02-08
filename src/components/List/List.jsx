import { Link } from 'react-router-dom';
import styles from './List.css';

export default function List({ hyruleData }) {
  return (
    <div className={styles.hyrule_list}>
      {hyruleData.map((item) => (
        <div key={item.id}>
          <Link to={`/entry/${item.id}`}>
            <div className={styles.card}>
              <img className={styles.list_img} src={item.image} />
              <h3>{item.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
