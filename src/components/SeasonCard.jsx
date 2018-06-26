import React from 'react';
import PropTypes from 'prop-types';
import './seasoncard.css';

function SeasonCard(props){
  return(
    <div className='season-card-wrapper'>


      <div className='column'><h3>{props.month}</h3></div>
      {props.selection.map((veg, index) =>
      <div className='column'>{veg}</div>
    )}
    </div>
  );
}

SeasonCard.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default SeasonCard;
