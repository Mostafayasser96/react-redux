import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import {
	increment,
	decrement,
	incrementByAmount,
	reset
} from './counterSlice';
const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.count);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState<number>(0);
	const addValue = Number(incrementAmount) || 0;
	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	}
	return (
		<section>
			<div> {count} </div>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
			<div>
				<input type='text'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(Number(e.currentTarget.value))}
				/>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
				<button onClick={resetAll}> Reset </button>
			</div>
		</section>
	)
}
export default Counter;