import React from 'react'
import styles from './Message.module.css'


type propsMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: propsMessageType) {
    return (
        <div className={styles.post}>

            <img src={props.avatar} alt="avatar" className={styles.avatar}/>
            <div className={styles.decorator}></div>


            <div className={styles.bubble}>
                <div>
                    <div className={styles.author}>{props.name}</div>
                    <div className={styles.text}>{props.message}</div>
                </div>
                <div className={styles.time}>{props.time}</div>
            </div>


        </div>
    )
}

export default Message
