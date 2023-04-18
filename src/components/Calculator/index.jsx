import { useState } from "react";
import { Container } from "./styles";

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  function clear(e) {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(oldNum / num);
    } else if (operator === "x") {
      setNum(oldNum * num);
    } else if (operator === "-") {
      setNum(oldNum - num);
    } else if (operator === "+") {
      setNum(Number(oldNum) + Number(num));
    }
  }

  return (
    <Container>
      <h1>Calculadora</h1>
      <div className="content">
        <h1 className="result">{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button onClick={operatorHandler} className="orange" value={"/"}>
          /
        </button>
        <button className="gray" onClick={inputNum} value={7}>
          7
        </button>
        <button className="gray" onClick={inputNum} value={8}>
          8
        </button>
        <button className="gray" onClick={inputNum} value={9}>
          9
        </button>
        <button className="orange" onClick={operatorHandler} value={"x"}>
          x
        </button>
        <button className="gray" onClick={inputNum} value={4}>
          4
        </button>
        <button className="gray" onClick={inputNum} value={5}>
          5
        </button>
        <button className="gray" onClick={inputNum} value={6}>
          6
        </button>
        <button className="orange" onClick={operatorHandler} value={"-"}>
          -
        </button>
        <button className="gray" onClick={inputNum} value={1}>
          1
        </button>
        <button className="gray" onClick={inputNum} value={2}>
          2
        </button>
        <button className="gray" onClick={inputNum} value={3}>
          3
        </button>
        <button className="orange" onClick={operatorHandler} value={"+"}>
          +
        </button>
        <button className="gray" onClick={inputNum} value={0}>
          0
        </button>
        <button className="gray" onClick={inputNum} value={"."}>
          .
        </button>
        <button style={{ visibility: "hidden" }}>.</button>
        <button className="orange" onClick={calculate}>
          =
        </button>
      </div>
    </Container>
  );
}

export default Calculator;
