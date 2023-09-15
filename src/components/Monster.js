import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Container, Row, Col, Badge,
} from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getMonster } from '../redux/monster/monsterSlice';
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
        <Col xs={6}>
          <Link to="/">
            <button type="button" className={styles.back}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </Link>
        </Col>

        <Col xs={6}>
          <Row className={styles.front}>
            <h1>{monsterStat.name}</h1>
            <Badge pill className={styles.doc}>
              {monsterStat.doc}
            </Badge>
            <p>
              CR:
              {' '}
              {monsterStat.cr}
            </p>
          </Row>
        </Col>

        <Row className={styles.basic}>

          <Row className={styles.bar}>
            <Col>
              MONSTER STATS
            </Col>
          </Row>

          <Row>
            <Col>
              Armor Class
            </Col>
            <Col className={styles.stat}>
              {monsterStat.ac}
            </Col>
          </Row>

          <Row>
            <Col>
              Hit Points
            </Col>
            <Col className={styles.stat}>
              {monsterStat.hp}
              (
              {monsterStat.dice}
              )
            </Col>
          </Row>

          <Row>
            <Col>
              Challenge Rating
            </Col>
            <Col className={styles.stat}>
              {monsterStat.cr}
            </Col>
          </Row>

          <Row>
            <Col>
              Strength
            </Col>
            <Col className={styles.stat}>
              {monsterStat.stats[0].str}
              (
              {(modifier(monsterStat.stats[0].str) < 0 ? '' : '+') + modifier(monsterStat.stats[0].str)}
              )
            </Col>
          </Row>

          <Row>
            <Col>
              Dexterity
            </Col>
            <Col className={styles.stat}>
              {monsterStat.stats[0].dex}
              (
              {(modifier(monsterStat.stats[0].dex) < 0 ? '' : '+') + modifier(monsterStat.stats[0].dex)}
              )
            </Col>
          </Row>

          <Row>
            <Col>
              Constitution
            </Col>
            <Col className={styles.stat}>
              {monsterStat.stats[0].con}
              (
              {(modifier(monsterStat.stats[0].con) < 0 ? '' : '+') + modifier(monsterStat.stats[0].con)}
              )
            </Col>
          </Row>

          <Row>
            <Col>
              Intelligence
            </Col>
            <Col className={styles.stat}>
              {monsterStat.stats[0].int}
              (
              {(modifier(monsterStat.stats[0].int) < 0 ? '' : '+') + modifier(monsterStat.stats[0].int)}
              )
            </Col>
          </Row>

          <Row>
            <Col>
              Wisdom
            </Col>
            <Col className={styles.stat}>
              {monsterStat.stats[0].wis}
              (
              {(modifier(monsterStat.stats[0].wis) < 0 ? '' : '+') + modifier(monsterStat.stats[0].wis)}
              )
            </Col>
          </Row>

          <Row>
            <Col>
              Charisma
            </Col>
            <Col className={styles.stat}>
              {monsterStat.stats[0].cha}
              (
              {(modifier(monsterStat.stats[0].cha) < 0 ? '' : '+') + modifier(monsterStat.stats[0].cha)}
              )
            </Col>
          </Row>

        </Row>

      </Row>
    </Container>
  );
};

export default Monster;
