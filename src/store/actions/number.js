export function numberAdd2(dispatch) {
    dispatch({type: 'numberAdd2'})
}

export function numberAddN(dispatch, n) {
    dispatch({ type: 'numberAddN', payload: { n: n } })
}

export function numberMult7(dispatch) {
    dispatch({ type: 'numberMult7' })
}

export function numberDiv25(dispatch) {
    dispatch({ type: 'numberDiv25' })
}

export function numberParse(dispatch) {
    dispatch({ type: 'numberParse' })
}