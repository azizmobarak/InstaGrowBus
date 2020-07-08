import { json } from "body-parser";

export const sendmessage = (email, question, message) => {

    return fetch("https://apimessagestomail.herokuapp.com/messages", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                question: question,
                message: message,
            })
        }).then(response => response.json())
        .then(data => console.log(data));

}