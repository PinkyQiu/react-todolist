import React from 'react';
import { Input, Button, List} from 'antd';
const TodolistUI = (props) => {
    return (
        <div className="Todolist">
          <div style={{margin: "30px 0 0 30px"}}>
            <Input placeholder="todolist" style={{width:200,marginRight:"10px"}} value={props.inputVal} onChange={props.handelInputChange}/>
            <Button type="primary" onClick={props.handelBtnClick}>提交</Button>
          </div>
          <List style={{margin:'30px 0 0 30px',width:"300px"}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item onClick={ () => {
                props.handelDeleteItem(index)
            }}>{item}</List.Item>)}
          />
        </div>
    );
}
export default TodolistUI