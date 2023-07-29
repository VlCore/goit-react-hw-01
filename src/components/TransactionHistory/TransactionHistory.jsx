import React from 'react'
import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

const TransactionHistory = ({rows}) => {
    const transactions = rows.map(a => {
        const {id, type, amount, currency} = a
        return (
            <tr key={id}>
              <td className={css.tableType}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          )
    })
    return (
<section className={css.tableSec}>
    <table className={css.table}>
        <thead>
         <tr>
         <th>Type</th>
         <th>Amount</th>
         <th>Currency</th>
         </tr>
        </thead>
        <tbody>
            {transactions}
        </tbody>
    </table>
</section>
)
}

TransactionHistory.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}

export default TransactionHistory