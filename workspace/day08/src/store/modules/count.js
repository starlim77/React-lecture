import Count from "../../component/Count";

const INCREMENT = "count/INCREMENT";
const DECREMENT = "count/DECREMENT";
const RESET = "count/RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        case RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
