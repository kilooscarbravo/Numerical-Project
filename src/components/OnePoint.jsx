import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import img from '../assets/img/one.jpg'

const OnePoint =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueX(data.map((x)=>x.X));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="90%">X</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const CalOnePoint = () => {
        var ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        var X=XStart;
        do
        {
            scope = {
                x:X,
            }
            const newX = evaluate(Equation, scope)

            iter ++;
            ea = error(X,newX);

            obj = {
                iteration:iter,
                X:newX
            }
            data.push(obj)

            X=newX;
           
        }while(ea>e && iter<MAX)
        setX(X)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueX, setValueX] = useState([]);
   
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(1+(43*x))/86")
    const [X,setX] = useState(0)
    const [XStart,setXStart] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXStart = (event) =>{
        console.log(event.target.value)
        setXStart(event.target.value)
    }

    const calculateRoot = () =>{
        const XStartnum = parseFloat(XStart)
        CalOnePoint(XStartnum);
        
        setHtml(print());
           
        console.log(valueIter)
        console.log(valueX)
    }

    return (
    <div className=" flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-3 px:-5 gap-10 bg-gradient-to-r from-[#d6fffe] to-[#fcfcfa]">
            <Container className="text-center">
                <h1 className="text-center text-xl font-semibold">One-Point Iteration Method</h1>
                <img className="flex justify-center rounded-lg" src={img}></img>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>f(x) : </Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"40%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>X<sub>Start </sub> : </Form.Label>
                        <input type="number" id="XStart" onChange={inputXStart} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
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

export default OnePoint
