import React, { Component } from 'react'

class Calculator extends Component {
    state ={
        num1: "",
        num2: "",
        total: 0,
        operator: "+"
    }

    setNum = (e, num) => {
        this.setState({ [num]: parseInt(e.target.value)})
    }
    setOp = (e, operator) => {
        this.setState({ operator: e.target.value})
    }
    calcTotal = (e) => {
        e.preventDefault()
        switch (this.state.operator){
            case "+":
                this.setState({
                    total: parseInt(this.state.num1) + parseInt(this.state.num2)
                })
                break;
            case "-":
                this.setState({
                    total: parseInt(this.state.num1) - parseInt(this.state.num2)
                })
                break;
            case "*":
                this.setState({
                    total: parseInt(this.state.num1) * parseInt(this.state.num2)
                })
                break;
            case "/":
                this.setState({
                    total: parseInt(this.state.num1) / parseInt(this.state.num2)
                })
                break;

        }
    } 

    render(){

        return(
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder='Enter your first number'
                        value={this.state.num1}
                        onChange= { (e) => this.setNum(e, 'num1')}
                    />
                    <select 
                    onChange={this.setOp}
                    id="operator" 
                    name="operator">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    </select>
                    <input type="number"
                        name='num2'
                        placeholder='Enter your second number'
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={this.calcTotal}>=</button>
                    <h3>{this.state.total}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator