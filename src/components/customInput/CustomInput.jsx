import { Input, Button, Col, Row, Form, DatePicker, InputNumber } from 'antd';

import { useState } from 'react';

const CustomInput = ({addTodo}) => {

    const [text, setText] = useState('');

    //очищаем наш импут после добавления задачи в список
    const handleClick =(values)=> {
        addTodo(values);
        form.resetFields();
    }

    const [form] = Form.useForm(); //хук для обращения к форме (напр. для очистки полей)


    return (
        <>
            <Row justify="center">
                <Col span={6}>
                <Form onFinish={handleClick} form={form} >
                    <Form.Item
                        wrapperCol={{
                            // offset: 8,
                            span: 16,
                        }}
                        label="Product"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input product!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item name="date" label="Date">
                        <DatePicker />
                    </Form.Item>


                    <Form.Item label="Number" name="count" >
                        <InputNumber min={1} max={10} />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 2,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit"> {/*htmlType="submit" - вызывает onFinish после нажатия*/}
                            Add todo
                        </Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row> 


            {/* <Row justify="center">
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
            </Row> */}
        </>
    );
};
export default CustomInput;