import fetchData from "../utils/http_request";
import styles from "./Trivia.module.css"

function Trivia(){
    const url = 'https://the-trivia-api.com/api/questions?limit=5'
    const data = fetchData(url).this(data => data)
    const [q1, q2, q3, q4, q5] = data

    return (
        <div className={styles.formContainer}>
            <form>
                
            </form>

        </div>
    )
}

export default Trivia;