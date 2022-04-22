export default function GameResults(props){
    const isWin = () => {
        const myScore = props.currentCollection.calculateScore();
        const opponentsScores = props.opponentCollections.map(col => col.calculateScore());
        const opponentHighScore = opponentsScores.reduce((a,b) => {
            return Math.max(a,b);
        })
        console.log(myScore > opponentHighScore);
        if (myScore > opponentHighScore){
            return (<p>Congratulations! You won.</p>);
        }
        else if (myScore === opponentHighScore){
            return (<p>Oops! You tied your opponents. So close!</p>);
        }
        else {
            return (<p>Uh oh, you lost! Better luck next time!</p>);
        }
    }

    return(
        <div>
            {isWin()}
        </div>
    )
}