import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = props => {
	const month = props.date.toLocaleString('en-US', { month: 'long' })
	const year = props.date.getFullYear()
	const day = props.date.toLocaleString('en-US', { day: '2-digit' })

	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>{props.amount}</div>
				</div>
			</Card>
		</li>
	)
}

export default ExpenseItem
