enum ACTION_TYPE {
    CHANGE_CURRENT_VALUE = 'CHANGE_CURRENT_VALUE',
    CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
}

export type CounterStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

let initialState: CounterStateType = {
    currentValue: 0,
    minValue: 0,
    maxValue: 5,
}

export const counterReducer = (state = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case ACTION_TYPE.CHANGE_CURRENT_VALUE:
            return {...state, ...action.payload,}
        case ACTION_TYPE.CHANGE_MIN_VALUE:
            return {...state, ...action.payload,}
        case ACTION_TYPE.CHANGE_MAX_VALUE:
            return {...state, ...action.payload,}
        default:
            return state
    }
}

type ActionType = ChangeMaxValueType | ChangeMinValueType | ChangeCurrentValueType

type ChangeMaxValueType = ReturnType<typeof changeMaxValue>
type ChangeMinValueType = ReturnType<typeof changeMinValue>
type ChangeCurrentValueType = ReturnType<typeof changeCurrentValue>

export const changeCurrentValue = (currentValue: number) => {
    return {
        type: ACTION_TYPE.CHANGE_CURRENT_VALUE,
        payload: {currentValue,}
    } as const
}

export const changeMinValue = (minValue: number) => {
    return {
        type: ACTION_TYPE.CHANGE_MIN_VALUE,
        payload: {minValue,}
    } as const
}

export const changeMaxValue = (maxValue: number) => {
    return {
        type: ACTION_TYPE.CHANGE_MAX_VALUE,
        payload: {maxValue,}
    } as const
}
