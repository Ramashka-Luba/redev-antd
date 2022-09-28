// import { List } from 'antd';
import { Col, Row, Input, List, Popconfirm, Checkbox } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';

const ToDo = ({ item, deleteTodo, editTodo, chengeStatus }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(item.title);


    const actionsArr = [
        <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => deleteTodo(item.id)}
            okText="Yes"
            cancelText="No"
        >
        <DeleteOutlined />
        </Popconfirm>
    ];

    //переключаем кнопку edit на save
    if (isEdit) {
        actionsArr.push(<SaveOutlined onClick={() => handleClick()} />)
    } else {
        actionsArr.push(<EditOutlined onClick={() => setIsEdit(!isEdit)} />)
    }

    const handleClick = () => {
        setIsEdit(!isEdit);
        editTodo(item.id, editText)
    }





    return (
        <List.Item actions={actionsArr}>
            <Row >
                {
                    isEdit
                        ? <Input onChange={(e) => setEditText(e.target.value)} value={editText} />
                        : <Col>
                            <Checkbox onChange={() => chengeStatus(item.id)}>
                                {item.status ? (
                                    <p style={{textDecoration:"line-through"}}>{item.title}</p>
                                ) : (
                                    <p>{item.title}</p>
                                )}
                            </Checkbox>
                        </Col>
                }
            </Row>
        </List.Item>
    );


}
export default ToDo;