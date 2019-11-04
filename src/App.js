import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col, Button, Input, List} from 'antd';

const caculate = require('./logic/calculate');

const {TextArea} = Input;

function App() {
    const [formula, setFormula] = useState("");
    const [history, setHistory] = useState([]);

    function textAreaOnChange(e) {
        setFormula(e.target.value);
    }

    function addCharacter(char) {
        setFormula(formula + char)
    }

    function enterCalculate() {
        const result = caculate.removeParenthese(formula);
        console.log('result :', result);
        setHistory([...history, formula + " = " + result]);
        setFormula("");
    }

    function clearHistory() {
        setHistory([]);
    }

    function clearFormula() {
        setFormula("");
    }

    return (
        <div className="App">
            <Row style={{height: "600px"}}>
                <Col span={16}>
                    <Row>
                        <TextArea value={formula} onChange={textAreaOnChange} onPressEnter={enterCalculate}>
                        </TextArea>
                        <p></p>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("7")} block>7</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("8")} block>8</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("9")} block>9</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("+")} block>+</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("^")} block>x^</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("4")} block>4</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("5")} block>5</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("6")} block>6</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("-")} block>-</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>SR</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("1")} block>1</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("2")} block>2</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("3")} block>3</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("*")} block>*</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={enterCalculate} block>=</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("(")} block>(</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("0")} block>0</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter(")")} block>)</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => addCharacter("/")} block>/</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={clearFormula} block>C</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}  style={{height: "inherit"}}>
                    <List
                        footer={<Button onClick={clearHistory}>Clear</Button>}
                        dataSource = {history}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default App;
