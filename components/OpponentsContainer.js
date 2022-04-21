import styles from './OpponentsContainer.module.css'

export default function OpponentsContainer(props) {
    return(
    <div>
        <h2>Your opponents</h2>
        <div className={styles.container}>
            {props.children}
        </div>
    </div>
    )
}