import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getMonster } from '../redux/monster/monsterSlice';
import styles from '../styles/Monster.module.css';

const Monster = () => {
  const monsterStat = useSelector((state) => state.monster.monsterStats);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getMonster(slug));
    }
  }, [dispatch, slug]);

  return (
    <Container className={styles.card}>
      <Row>
        <Col>
          <h1>{monsterStat.name}</h1>
          <hr />
          <h4>
            Armor Class
            {' '}
            {monsterStat.ac}
          </h4>
          <br />
          {monsterStat.hp}
          <br />
          {monsterStat.cr}
          <br />
          {monsterStat.stats[0].str}
          {' '}
          (+
          {Math.floor(((monsterStat.stats[0].str) - 10) / 2)}
          )
          <br />
          {monsterStat.stats[0].dex}
          <br />
          {monsterStat.stats[0].con}
          <br />
          {monsterStat.stats[0].int}
          <br />
          {monsterStat.stats[0].wis}
          <br />
          {monsterStat.stats[0].cha}
          <br />
          {monsterStat.doc}
          <br />
        </Col>
        <Col>
          <Link to="/monsters">
            <button type="button" className="backBtn">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Monster;
