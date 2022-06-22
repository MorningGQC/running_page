import React from 'react';
import YearStat from 'src/components/YearStat';
import {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  CHINESE_LOCATION_INFO_MESSAGE_THIRD,
} from '../../utils/const';
import CitiesStat from './CitiesStat';
import LocationSummary from './LocationSummary';
import PeriodStat from './PeriodStat';

const LocationStat = ({ changeYear, changeCity, changeTitle }) => (
  <div className="fl w-100 w-30-l pb5 pr5-l">
    <section className="pb4" style={{ paddingBottom: '0rem' }}>
      <p style={{ lineHeight: 1.8 }}>
        {CHINESE_LOCATION_INFO_MESSAGE_FIRST}
        <br />
        {CHINESE_LOCATION_INFO_MESSAGE_SECOND}
        <br />
        {CHINESE_LOCATION_INFO_MESSAGE_THIRD}
        <br />
        <br />
        Cerca Trova
      </p>
    </section>
    <hr color="red" />
    <YearStat year="Total" onClick={changeYear} />
    <LocationSummary />
    <CitiesStat onClick={changeCity} />
    <PeriodStat onClick={changeTitle} />
  </div>
);

export default LocationStat;
