import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col, Button, Input, List} from 'antd'


const {TextArea} = Input;
const dataSource = [
   "a",
    "b",
    "c"
]
function App() {
    return (
        <div className="App">
            <Row style={{height: "600px"}}>
                <Col span={16}>
                    <Row>
                        <TextArea rows={5}>
                        </TextArea>
                        <p></p>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" block>7</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>8</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>9</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>+</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>x^</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" block>4</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>5</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>6</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>-</Button>
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
                            <Button type="default" block>1</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>2</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>3</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>*</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>=</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <Button type="default" block>(</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>0</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>)</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>/</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>C</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" block>Empty</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}  style={{height: "inherit"}}>
                    <List
                        footer={<Button>Clear</Button>}
                        dataSource = {dataSource}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default App;
