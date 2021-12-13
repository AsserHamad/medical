import HTTP from "./axios"

export const checkForChoice = async () => {
    return await HTTP.get('/');
}

export const changeChoice = async (choice : Number) => {
    return await HTTP.post('/', {choice});
}