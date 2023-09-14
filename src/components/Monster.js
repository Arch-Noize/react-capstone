import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getMonster } from '../redux/monster/monsterSlice';
import hr from '../assets/redTriangle.png';
import styles from '../styles/Monster.module.css';

const Monster = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      dispatch(getMonster(slug));
    }
  }, [dispatch, slug]);

  const monsterStat = useSelector((state) => state.monster.monsterStats);

  const modifier = (num) => (
    Math.floor(((num) - 10) / 2)
  );

  return (
    <Container>
      <Row className={styles.card}>
        <Row>
          <h1>{monsterStat.name}</h1>
          <img src={hr} alt="lb" />
          <p>
            Armor Class
            {' '}
            <span>
              {monsterStat.ac}
            </span>
          </p>
          {monsterStat.hp}
          <br />
          {monsterStat.cr}
          <br />
          {monsterStat.stats[0].str}
          {' '}
          (+
          {modifier(monsterStat.stats[0].str)}
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
        </Row>
        <Col>
          <Link to="/">
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
