import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Container, Row, Col, Badge, Stack,
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
          <Stack direction="horizontal" gap={2}>
            <h1>{monsterStat.name}</h1>
            <Badge pill className={styles.doc}>
              {monsterStat.doc}
            </Badge>
            <Link to="/">
              <button type="button" className={styles.back}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </Link>
          </Stack>
          <img src={hr} alt="lb" />
          <Row className={styles.basic}>
            <p>
              Armor Class
              {' '}
              <span>
                {monsterStat.ac}
              </span>
            </p>
            <p>
              Hit Points
              {' '}
              <span>
                {monsterStat.hp}
              </span>
              {' '}
              <span>
                (
                {monsterStat.dice}
                )
              </span>
            </p>
            <p>
              Challenge Rating
              {' '}
              <span>
                {monsterStat.cr}
              </span>
            </p>
          </Row>

          <img src={hr} alt="lb" />

          {monsterStat.stats.map((stat) => (
            <Row xs={6} key={stat.str} className={styles.stats}>
              <Col>
                <p>
                  STR
                  {' '}
                  <span>
                    {stat.str}
                    (
                    {(modifier(stat.str) < 0 ? '' : '+') + modifier(stat.str)}
                    )
                  </span>
                </p>
              </Col>
              <Col>
                <p>
                  DEX
                  {' '}
                  <span>
                    {stat.dex}
                    (
                    {(modifier(stat.dex) < 0 ? '' : '+') + modifier(stat.dex)}
                    )
                  </span>
                </p>
              </Col>
              <Col>
                <p>
                  CON
                  {' '}
                  <span>
                    {stat.con}
                    (
                    {(modifier(stat.con) < 0 ? '' : '+') + modifier(stat.con)}
                    )
                  </span>
                </p>
              </Col>
              <Col>
                <p>
                  INT
                  {' '}
                  <span>
                    {stat.int}
                    (
                    {(modifier(stat.int) < 0 ? '' : '+') + modifier(stat.int)}
                    )
                  </span>
                </p>
              </Col>
              <Col>
                <p>
                  WIS
                  {' '}
                  <span>
                    {stat.wis}
                    (
                    {(modifier(stat.wis) < 0 ? '' : '+') + modifier(stat.wis)}
                    )
                  </span>
                </p>
              </Col>
              <Col>
                <p>
                  CHA
                  {' '}
                  <span>
                    {stat.cha}
                    (
                    {(modifier(stat.cha) < 0 ? '' : '+') + modifier(stat.cha)}
                    )
                  </span>
                </p>
              </Col>
            </Row>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Monster;
