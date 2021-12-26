import {MessageType} from "../components/Navbar/Dialogs/Message/Message";
import {v1} from "uuid";
import {ActionsType, DialogsPageType} from "./store";

type sendMessageACType = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
type changeMessageACType = {
    type: 'CHANGE-MESSAGE-TEXT',
    currentMessageText: string
}

const initialState = {
    dialogs: [
        {id: v1(), name: 'Vlad Izh'},
        {id: v1(), name: 'Katya Tselya'},
        {id: v1(), name: 'Alexey Navalny'},
        {id: v1(), name: 'Adolf Hitler'},
        {id: v1(), name: 'Donald Trump'},
        {id: v1(), name: 'Hydra Shop'},
    ],
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Пустити'},
        {id: v1(), message: 'Выбрал свой путь - иди по нему до конца'},
        {id: v1(), message: 'MAGA'},
        {id: v1(), message: 'buy please'},
    ],
    newMessageText: 'hello'
}

const DialogsPageReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: v1(), message: state.newMessageText
            }
            return {
                ...state,
                messages: state.messages = [...state.messages, newMessage],
                newMessageText: ''
            }
        case 'CHANGE-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.currentMessageText
            }
        default:
            return state
    }
};

export const sendMessageAC = (messageText: string): sendMessageACType =>
    ({type: 'SEND-MESSAGE', newMessageText: messageText})
export const changeMessageTextAC = (currentText: string): changeMessageACType =>
    ({type: 'CHANGE-MESSAGE-TEXT', currentMessageText: currentText})

export default DialogsPageReducer