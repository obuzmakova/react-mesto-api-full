export const BASE_URL = 'http://api.places.nomoredomains.rocks';

    const checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    export const getUserInfo = (jwt) => {
        return fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
            .then((res) => checkResponse(res));
    }

    export const getInitialCards = (jwt) => {
        return fetch(`${BASE_URL}/cards`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
            .then((res) => checkResponse(res));
    }

    export const updateUserInfo = (newName, newAbout, jwt) => {
        return fetch(`${BASE_URL}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({
                name: newName,
                about: newAbout
            })
        })
            .then((res) => checkResponse(res));
    }

    export const addNewCard = (newName, newLink, jwt) => {
        return fetch(`${BASE_URL}/cards`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({
                name: newName,
                link: newLink
            })
        })
            .then((res) => checkResponse(res));
    }

    export const deleteCard = (cardsId, jwt) => {
        return fetch(`${BASE_URL}/cards/${cardsId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
            .then((res) => checkResponse(res));
    }

    export const changeLikeCardStatus = (cardId, isLiked) => {
        if (isLiked) {
            return setLike(cardId);
        } else {
           return deleteLike(cardId);
        }
    }

    export const setLike = (cardsId, jwt) => {
        return fetch(`${BASE_URL}/cards/likes/${cardsId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
            .then((res) => checkResponse(res));
    }

    export const deleteLike = (cardsId, jwt) => {
        return fetch(`${BASE_URL}/cards/likes/${cardsId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
            .then((res) => checkResponse(res));
    }

    export const addNewAvatar = (item, jwt) => {
        return fetch(`${BASE_URL}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({
                avatar: item.avatar,
            })
        })
            .then((res) => checkResponse(res));
    }