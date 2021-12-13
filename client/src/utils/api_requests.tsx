import HTTP from "./axios"

export const checkForChoice = async () => {
    return await HTTP.get('/');
}

export const changeChoice = async (data : any) => {
    return await HTTP.post('/', data);
}