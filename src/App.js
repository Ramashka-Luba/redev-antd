// import './App.css';
import { useState } from 'react';

import ToDo from './components/toDo/ToDo.jsx';
import CustomInput from './components/customInput/CustomInput.jsx';

import { Typography, Col, Row, List, notification, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React from 'react';

const { Title } = Typography;


const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Chese", status: false }]);

  //Добовляем в наш массив задач новую задачу
  const addTodo = (text) => {
    const newArrAdd = [...todos, { id: todos.length + 1, title: text, status: false }];
    setTodos(newArrAdd);
    notification.open({
      type: 'success',
      message: 'Added'
    });
  };

  const deleteTodo = (id) => {
    const newArrDelete = todos.filter((item) => item.id !== id);
    setTodos(newArrDelete);
  };

  //функция изменения 
  const editTodo = (id, text) => {
    const newArrEdit = todos.map(item => item.id == id ? { ...item, title: text } : item)
    setTodos(newArrEdit);
    message.info('This is a normal message');
  };

  //клик на чекбокс
  const chengeStatus = (id) => {
    const newArrStatus = todos.map(item => item.id == id ? { ...item, status: !item.status } : item)
    setTodos(newArrStatus);
    message.info('Done');
  };

  return (
    <>
      <Row justify="center">
        <Col>
          <Title orientation="center" level={2}>
            What's the Plan for Today?
            <p>TASKS: {todos.length}</p>
          </Title>
        </Col>
      </Row>

      <CustomInput addTodo={addTodo} />
      <Row>
        <Col offset={8} span={8}>
          <List
            size="middle"
            bordered
            dataSource={todos}
            renderItem={item =>
              <ToDo item={item}
                deleteTodo={deleteTodo}
                editTodo={editTodo} 
                chengeStatus = {chengeStatus}
                />
            } />
        </Col>
      </Row>

    </>
  );
}

export default App;
