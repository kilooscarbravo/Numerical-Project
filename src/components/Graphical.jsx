import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'

const Graphical =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueX(data.map((x)=>x.X));
        setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">X<sub>Start </sub> </th>
                            <th width="30%">X</th>
                            <th width="30%">X<sub>End </sub></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.X}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const CalGraphical = (xl, xr) => {
        var X,fX,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            X = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:X,
            }
            fX = evaluate(Equation, scope)

            iter ++;
            if (fX*fXr > 0)
            {
                ea = error(xr, X);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    X:X,
                    Xr:xr
                }
                data.push(obj)
                xr = X;
            }
            else if (fX*fXr < 0)
            {
                ea = error(xl, X);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    X:X,
                    Xr:xr
                }
                data.push(obj)
                xl = X;
            }
        }while(ea>e && iter<MAX)
        setX(X)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueX, setValueX] = useState([]);
    const [valueXr, setValueXr] = useState([]);
     
   
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(43*x)-180")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        CalGraphical(xlnum,xrnum);
     
        setHtml(print());
           
        console.log(valueIter)
        console.log(valueXl)
    }

    return (
    <div className=" flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-3 px:-5 gap-10 bg-gradient-to-r from-[#e4ffd6] to-[#fafcfa]">
            <Container className="text-center">
                <h1 className="text-center text-xl font-semibold">Graphical Method</h1>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>f(x) : </Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>X<sub>Start </sub> : </Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>X<sub>End </sub> : </Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5>Answer X = {X.toPrecision(7)}</h5>
                <Container>
                {html}
                </Container>
               
            </Container>
        </div>
           
    )
}

export default Graphical