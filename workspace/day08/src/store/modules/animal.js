const TIGER = "animal/TIGER";
const DOG = "animal/DOG";
const CAT = "animal/CAT";
const CHICK = "animal/CHICK";

export const tiger = () => ({ type: TIGER });
export const dog = () => ({ type: DOG });
export const cat = () => ({ type: CAT });
export const chick = () => ({ type: CHICK });

const initialState = { name: "", crying: "" };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TIGER:
            return { name: "호랑이", crying: "어흥" };
        case DOG:
            return { name: "강아지", crying: "멍멍" };
        case CAT:
            return { name: "고양이", crying: "야옹" };
        case CHICK:
            return { name: "병아리", crying: "삐약" };
        default:
            return state;
    }
};
export default reducer;
