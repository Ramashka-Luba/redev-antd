import { Input, Button, Col, Row } from 'antd';

import { useState } from 'react';

const CustomInput = ({addTodo}) => {

    const [text, setText] = useState('');

    //очищаем наш импут после добавления задачи в список
    const handleClick =()=> {
        addTodo(text);
        setText('');
    }

    return (
        <>
            <Row justify="center">
                <Col span={6}>
                    <Input onChange={(e) => setText(e.target.value)}
                        value={text}
                        placeholder="Lead the task" 
                        onPressEnter = {()=> handleClick()}
                        />
                </Col>

                <Col >
                    <Button onClick = {()=> handleClick()} type="primary">Add ToDo</Button>
                </Col>
            </Row>
        </>
    );
};
export default CustomInput;