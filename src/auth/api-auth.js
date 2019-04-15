const signin = (user) => {
    return fetch(`http://localhost:3000/auth/signin/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(user)
        })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}

const signout = () => {
    return fetch('http://localhost:3000/auth/signout/', {
        method: 'GET',
    }).then(response => {

        return response.json()
    }).catch((err) => console.log(err))
}

export {
    signin,
    signout
}