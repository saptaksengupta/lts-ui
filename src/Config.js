import socketIOClient from 'socket.io-client';

// const API_BASE_URL = 'http://192.168.43.104:9999/';
// const SOCKET_BASE_URL = 'http://192.168.43.104:9998/';

const API_BASE_URL = 'https://lts-api-prod.herokuapp.com/';
const SOCKET_BASE_URL = 'https://lts-api-prod.herokuapp.com/';


const API_PREFIX = "api/v1/";

export const getBaseUrl = () => `${API_BASE_URL}${API_PREFIX}`;

export const getSocketBaseUrl = (namespace) => {
    return `${SOCKET_BASE_URL}${namespace}`
};

export const getSocketConnection = (url) =>
    socketIOClient(
        getSocketBaseUrl(ACTIVE_NAMESPACES.LIST_AND_BOARDS)
    );


export const SOCKET_EVENTS = {
    LIST_ITEM_STATUS_UPDATED: 'listItemUpdated',
    LIST_ITEM_ADDED: 'listItemAdded',
    LIST_ITEM_DELETED: 'listItemDeleted',
    LIST_ITEM_DESC_UPDATED: 'listItemDescUpdated',
    BOARD_ADDED: 'boardAdded',
    BOARD_UPDATED: 'boardUpdated',
    BOARD_DELETED: 'boardDeleted'
}

export const ACTIVE_NAMESPACES = {
    LIST_AND_BOARDS: 'list-and-boards'
}