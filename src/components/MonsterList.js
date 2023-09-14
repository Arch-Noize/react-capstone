import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { getAllMonsters, getMonsterByBook } from '../redux/monster/monsterSlice';
import styles from '../styles/List.module.css';

const MonsterList = () => {
  const { monsters, source } = useSelector((state) => state.monster);
  const dispatch = useDispatch();

  useEffect(() => {
    if (source) {
      dispatch(getMonsterByBook(source));
    } else {
      dispatch(getAllMonsters());
    }
  }, [dispatch, source]);

  return (
    <>
      <div className={styles.list}>
        <Row xs={2} className={styles.container}>
          <div className="bar">
            Monsters and their CR
          </div>
          {monsters.map((item) => (
            <Col key={item.slug} className={styles.item}>
              <Link to={`/${item.slug}`}>
                <FontAwesomeIcon icon={faArrowRight} className={styles.detail} />
                <h3>{item.name}</h3>
                <p className={styles.cr}>
                  CR:
                  {' '}
                  {item.cr}
                </p>
              </Link>
            </Col>
          ))}
        </Row>
        <div className="bar">
          And many more creatures
          {' '}
          <a href="https://5e.tools/bestiary.html">
            here
          </a>
        </div>
      </div>
    </>
  );
};

export default MonsterList;
