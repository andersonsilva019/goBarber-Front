import React,{ useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns'
import pt from 'date-fns/locale/pt'
import api from '~/services/api';

import { Container, Time } from './styles';

import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

export default function Dashboard() {

  const[date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt}),
    [date]
  );
  
  /* Voltando 1 dia */
  function handlePrevDay(){
    setDate(subDays(date, 1));
  }

  /* Voltando 1 dia */
  function handleNextDay(){
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF"/>
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF"/>
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Anderson Silva</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Silva</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Anderson</span>
        </Time>
      </ul>
    </Container>
  );
}
