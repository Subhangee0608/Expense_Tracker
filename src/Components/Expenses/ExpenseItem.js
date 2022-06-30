import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    
    const clickHandler = () => {
       setTitle('Update!');
        console.log('title');
    };
    console.log(title)
    return (
        <li>
        <Card className='expense-item'>
            <div className='expense-item__description' >
                <ExpenseDate date={props.date} />
            </div>
            <div className='expense-item__description' >
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>
                ${props.amount}
            </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;