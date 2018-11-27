export const loginRequest = data => ({
    type: 'LOGIN_REQUEST',
    data,
})

export const logoutRequest = () => ({
    type: 'LOGOUT_REQUEST',
})
