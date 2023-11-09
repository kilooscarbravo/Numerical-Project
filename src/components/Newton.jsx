import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { derivative,evaluate } from 'mathjs'
import img from '../assets/img/new.jpg'

const Newton =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueX0(data.map((x)=>x.X0));
        setValueX1(data.map((x)=>x.X1));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="45%">X<sub>Start </sub> : </th>
                            <th width="45%">X<sub>End </sub> : </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X0}</td>
                                <td>{element.X1}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const CalNewton = () => {
        var X1, fX0, fX0Prime, ea, scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};
        
        do {
            var fX0Prime = derivative(Equation,"x").evaluate({x:X0});
            scope = {
                x: X0,
            };
            fX0 = evaluate(Equation, scope);
            
            scope = {
                x: X0,
            };
            // fX0Prime = evaluate(`derivative(${Equation}, x)`, scope);
            
            X1 = X0 - (fX0 / fX0Prime); 
            
            iter++;
            
            ea = error(X0, X1);
            
            obj = {
                iteration: iter,
                X0: X0,
                X1: X1,
            };
            data.push(obj);
            
            X0 = X1; 
        } while (ea > e && iter < MAX);
        
        setX(X1);
    };
    

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueX0, setValueX0] = useState([]);
    const [valueX1, setValueX1] = useState([]);
     
   
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^2)-7")
    const [X,setX] = useState(0)
    const [X0,setX0] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }
 
    const calculateRoot = () =>{
        const X0num = parseFloat(X0)
        CalNewton(X0num);
     
        setHtml(print());
           
        console.log(valueIter)
        console.log(valueX0)
    }

    return (
    <div className=" flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-3 px:-5 gap-10 bg-gradient-to-r from-[#fcfcfa] to-[#d6f3ff]">
            <Container className="text-center">
                <h1 className="text-center text-xl font-semibold">Newton Raphson Method</h1>
                <img className="flex justify-center rounded-lg" src={img}></img>

                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>f(x) : </Form.Label>
                        <input type="text" id="Equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>X<sub>Start </sub> : </Form.Label>
                        <input type="number" id="X0" onChange={inputX0} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
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

export default Newton