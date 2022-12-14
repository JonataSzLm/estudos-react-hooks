import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, numberAddN, numberDiv25, numberMult7, numberParse, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'João')}
                    >Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >+2</button>
                    <button className="btn"
                        onClick={() => numberMult7(dispatch)}
                    >*7</button>
                    <button className="btn"
                        onClick={() => numberDiv25(dispatch)}
                    >/25</button>
                    <button className="btn"
                        onClick={() => numberParse(dispatch)}
                    >Parse</button>
                    <button className="btn"
                        onClick={() => numberAddN(dispatch, -9)}
                    >-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
