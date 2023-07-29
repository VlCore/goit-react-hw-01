import React from 'react'
import PropTypes from 'prop-types'
import css from './Statistics.module.css'

const Statistics = ({title, stats}) => {
    const statisticsItems = stats.map(a => {
        const {id, label, percentage} = a
        return (
            <li key={id} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
        )
    })
  return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2> }
        <ul className={css.statList}>
            {statisticsItems}
        </ul>
    </section>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage:PropTypes.number,
        })
    )
}

export default Statistics