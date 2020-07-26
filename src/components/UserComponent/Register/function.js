export const adduser = (fullname, email, password) => {
    fetch('http://localhost:8000', {
            method: "POST",
            body: JSON.stringify({
                name: fullname,
                email: email,
                password: password
            })
        }).then(response => response.json())
        .then(data => console.log(data));
}