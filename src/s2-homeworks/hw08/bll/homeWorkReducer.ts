import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

// const initialPeople: UserType[] = [
//     // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
//     {_id: 0, name: 'Кот', age: 3},
//     {_id: 1, name: 'Александр', age: 66},
//     {_id: 2, name: 'Коля', age: 16},
//     {_id: 3, name: 'Виктор', age: 44},
//     {_id: 4, name: 'Дмитрий', age: 40},
//     {_id: 5, name: 'Ирина', age: 55},
// ]

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
                return [...state.sort((a, b) => a.name.localeCompare(b.name))]
            }
            else {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1 )]
            }
        }
        case 'check': {

            return [...state.filter(el=> el.age >= action.payload).sort((a,b) =>a.name > b.name ? -1 : 1 ) ]
        }
        default:
            return state
    }
}
