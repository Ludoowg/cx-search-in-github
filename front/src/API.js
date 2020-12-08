import fetch from 'node-fetch';

const API_URL = 'http://localhost:4000';

export async function getUser(username)
{
    const response = await fetch(API_URL + `/users/${username}`, {
        method: 'get',
    })

    return response.json();
}

