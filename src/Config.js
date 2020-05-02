// const API_BASE_URL = 'http://localhost:9999/';
// const API_BASE_URL = 'http://192.168.43.134:9999/';
const API_BASE_URL = 'http://192.168.43.105:9999/';
const SOCKET_BASE_URL = 'http://192.168.43.105:9998/';

const API_PREFIX = "api/v1/";

export const getBaseUrl = () => `${API_BASE_URL}${API_PREFIX}`;

export const getSocketBaseUrl = (namespace) => `${SOCKET_BASE_URL}${namespace}`;

export const APP_BASE_URL = `http://localhost:3000/`;


export const SOCKET_EVENTS = {
    LIST_ITEM_MODIFIED: 'listItemUpdated-',
    LIST_ITEM_ADDED: 'listItemAdded-',
}