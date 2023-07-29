import React from 'react'
import PropTypes from 'prop-types'
import css from './FriendsList.module.css'

const FriendsList = ({friends}) => {
    const friendsItems = friends.map(a => {
        const {avatar, name, isOnline, id} = a
        return (
            <li key={id} className={css.item}>
                <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
    })
  return (
    <section className={css.friendsListSec}>
        <ul className={css.friendsList}>
            {friendsItems}
        </ul>   
    </section>
  )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline:PropTypes.bool,
            id: PropTypes.number,
        })
    )
}

export default FriendsList