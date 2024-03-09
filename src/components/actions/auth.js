import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';

let baseUrl = 'https://localhost:5000/api/v1';

export const signUp = (user) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .catch((err) => {
            console.error('Error due to Signup:', err)
            // throw err
        });
};

export const signIn = (user) => {
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
};

export const signOut = (next) => {
    // clear cookie after signout
    removeCookie('token');
    removeLocalStorage('user');
    next();

    return fetch(`${baseUrl}/logout`, {
        method: 'GET',
    })
        .then((res) => {
            console.log('signout success');
        })
        .catch((err) => {
            console.log(err);
        });
};

// set a cookie
export const setCookie = (key, value) => {
    if (typeof window !== 'undefined') {
        cookie.set(key, value, {
            expires: 1,
        });
    }
};

export const removeCookie = (key) => {
    if (typeof window !== 'undefined') {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

export const getCookie = (key) => {
    if (typeof window !== 'undefined') {
        return cookie.get(key);
    }
};

// local storage
export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

// authenticate user
export const authenticate = (data, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', data);
    setCookie('token', data.token);
    setCookie('user', JSON.stringify(data.user));
    setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
    if (typeof window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
};
