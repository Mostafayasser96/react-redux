import { 
	createSlice, 
	nanoid, 
	PayloadAction 
} from "@reduxjs/toolkit";
import { RootState } from "../../store";


const initialState = [
	{ title: 'this is title 1', content: 'this is content 1' },
	{ title: 'this is title 2', content: 'this is content 2' }
]
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action: PayloadAction<{ title: string, content: string }>){
				state.push(action.payload);
			},
			prepare(title, content){
				return{
					payload: {
						id: nanoid(),
						title,
						content
					}
				}
			}
		}
	}
})
export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;