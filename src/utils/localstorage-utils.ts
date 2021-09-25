import {AppRootStateType} from '../redux/store';

export const loadState = (): AppRootStateType | undefined => {
    const minValue = localStorage.getItem('minValue')
    const maxValue = localStorage.getItem('maxValue')
    const currentValue = localStorage.getItem('currentValue')
    if (!maxValue || !minValue || !currentValue) {
        return undefined
    }
    return {
        counter: {
            currentValue: JSON.parse(currentValue),
            minValue: JSON.parse(minValue),
            maxValue: JSON.parse(maxValue),
        }
    }
}

export const saveState = (state: AppRootStateType) => {
    localStorage.setItem('currentValue', JSON.stringify(state.counter.currentValue))
    localStorage.setItem('minValue', JSON.stringify(state.counter.minValue))
    localStorage.setItem('maxValue', JSON.stringify(state.counter.maxValue))

}