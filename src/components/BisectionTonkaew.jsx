import { abs, evaluate } from "mathjs";
import { useState } from "react";

function BisectionTonkaew() {
  const [func, setFunc] = useState();
  const [xLeft, setXLeft] = useState();
  const [xRight, setXRight] = useState();
  const [epsilon, setEpsilon] = useState();

  const [xResult, setXResult] = useState(0);
  const [xTable, setXTable] = useState([]);

  // bisectionCalculate(0, 10, "1-43x", 0.000001);

  function bisectionCalculate(xLeft, xRight, func, epsilon) {
    console.log("bisection...");
    const xTable = [];
    let iter = 0;
    const MAX_ITER = 100;

    let xMedium = (xLeft + xRight) / 2;
    while (iter < MAX_ITER) {
      iter += 1;
      xMedium = (xLeft + xRight) / 2;

      if (abs(evaluate(func, { x: xMedium })) < epsilon) {
        setXResult(xMedium);
        console.log("result: " + evaluate(func, { x: xMedium }));
        break;
      }

      const fxLeft = evaluate(func, { x: xLeft });
      const fxMedium = evaluate(func, { x: xMedium });

      console.log(iter, xLeft, xMedium, xResult);
      xTable.push({
        iter,
        xLeft,
        xRight,
        xMedium,
        error: abs(evaluate(func, { x: xMedium }))
      });

      if (fxLeft * fxMedium < 0) {
        xRight = xMedium;
      } else {
        xLeft = xMedium;
      }
    }

    console.log(xTable);
    setXTable(xTable);
  }

  return (
    <div>
      Func
      <input onChange={(e) => setFunc(e.target.value)} />
      XL
      <input type="number" onChange={(e) => setXLeft(e.target.value)} />
      XR
      <input type="number" onChange={(e) => setXRight(e.target.value)} />
      Error
      <input type="number" onChange={(e) => setEpsilon(e.target.value)} />
      <button onClick={(e) => bisectionCalculate(xLeft, xRight, func, epsilon)}>
        CLICK ME!
      </button>
      <p>RESULT: {xResult}</p>
      <table>
        <thead>
          <tr>
            <th>iter</th>
            <th>XL</th>
            <th>XM</th>
            <th>XR</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          {xTable.map((v) => {
            return <tr>
              <td>{v.iter}</td>
              <td>{Number(v.xLeft).toFixed(12)}</td>
              <td>{v.xRight}</td>
              <td>{v.xMedium}</td>
              <td>{v.error * 100}%</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BisectionTonkaew;