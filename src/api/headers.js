let token = localStorage.getItem("token");
export const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'x-access-token',
    'x-access-token': token
}