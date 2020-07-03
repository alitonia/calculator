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
            <Expression value={expression} style={{letterSpacing: 2}}/>
            <div className={"pure-g"}>
                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("(")}>(
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue(")")}>)
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("**")}>^
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("0")}>0
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("1")}>1
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("2")}>2
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("+")}>+
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("3")}>3
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("4")}>4
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("5")}>5
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("-")}>-
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("6")}>6
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("7")}>7
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("8")}>8
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("*")}>*
                </button>
            </div>

            <div className={"pure-g"}>
                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24  pure-button"}
                        onClick={() => reset()}>Esc
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("9")}>9
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button"}
                        onClick={(event) => addNewValue("/")}>/
                </button>

                <button className={"pure-u-1-8 pure-u-sm-1-12 pure-u-lg-1-24 pure-button pure-button-primary"}
                        onClick={() => calculate()}> =
                </button>
            </div>
            <Result value={result}/>
        </>
    );
}

export default Ground;