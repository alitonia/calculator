import React, {useState} from 'react';
import Expression from "./Expression";
import Result from "./Result";


function Ground(props) {

    const [expression, setExpression] = useState("")
    const [result, setResult] = useState("")
    const [solved, setSolved] = useState(false)

    const addNewValue = value => {
        if (solved) {
            setSolved(false)
            reset()
        }
        setExpression(prevState => prevState + value)

    }


    const calculate = () => {
        try {
            const result = eval(expression)
            if (result) {
                setResult(result)
            } else {
                throw new Error()
            }
        } catch (e) {
            console.log(e)
            setResult("Invalid")
        }
        setSolved(true)
    }

    const reset = () => {
        setExpression("")
        setResult("")
    }

    return (
        <>
            <Expression value={expression}/>
            <div className={"pure-g"}>
                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>(
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>)
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue("**")}>^
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>0
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>1
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>2
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>+
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>3
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>4
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>5
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>-
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>6
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>7
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>8
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>*
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-24 pure-button"} onClick={() => reset()}>Esc</button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>9
                </button>

                <button className={"pure-u-1-24 pure-button"}
                        onClick={(event) => addNewValue(event.target.textContent)}>/
                </button>

                <button className={"pure-u-1-24 pure-button pure-button-primary"}
                        onClick={() => calculate()}> =
                </button>
            </div>
            <Result value={result}/>
        </>
    );
}

export default Ground;