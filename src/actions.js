import {
    ADD_DATA_FORM
} from './constants'

export function addDataForm(payload) {
    return { type: ADD_DATA_FORM, payload }
}