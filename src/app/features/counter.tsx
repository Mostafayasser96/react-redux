import React, { useState } from 'react';
import {
	useSelector,
	useDispatch
} from 'react-redux';
import {
	increment,
	incrementByAmount,
	decrement,
	reset
} from '../../counterSlice';
import { RootState } from '../../store';


const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.counter.count);
	const [incrementAmount, setIncrementAmount] = useState<number>(0);
	const addValue = Number(incrementAmount) || 0;
	const resetAll = () => {
		setIncrementAmount(0);
		reset();
	}
	return (
		<section>
			<h1> {count} </h1>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
			<input type='text'
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(Number(e.currentTarget.value))}
			/>
			<button onClick={() => dispatch(incrementByAmount(addValue))} >Add Amount</button>
			<button onClick={resetAll}>Reset</button>
		</section>
	)
}
export default Counter;