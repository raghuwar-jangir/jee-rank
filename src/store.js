import { createStore } from 'redux';

const initialState = [
    { name: 'akash', key: 0, score: { P: 119, C: 89, M: 93 } },
    { name: 'Jaipal', key: 1, score: { P: 80, C: 69, M: 91 } },
    { name: 'Babulal', key: 2, score: { P: 45, C: 129, M: 90 } },
];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add': {
            let obj = {
                name: action.payload.name,
                score: action.payload.score
            }
            return [...state, obj];
        }
        case 'rank': {
            return [...state].sort((a, b) => {
                const aTotal = a.score.P + a.score.C + a.score.M;
                const bTotal = b.score.P + b.score.C + b.score.M;
                if (aTotal < bTotal) {
                    return 1;
                }
                else if (aTotal > bTotal) {
                    return -1;
                }
                else {
                    return b.score.M - a.score.M;
                }
            })
        }
        case 'alpha': {
            return state.sort((a, b) => a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0));
        }
        default:
            return state;
    }
}

export const rank = () => {
    return {
        type: 'rank'
    }
}

export const alpha = () => {
    return {
        type: 'alpha'
    }
}

export const add = (name, P, C, M) => {
    return {
        type: 'add',
        payload: {
            name: name,
            score: {
                P: Number(P),
                C: Number(C),
                M: Number(M)
            }
        }

    }
}

export const store = createStore(reducer);