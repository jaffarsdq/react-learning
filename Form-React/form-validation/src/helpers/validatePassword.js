function validatePassword(password) {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/])[A-Za-z\d!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/]{8,}$/;
    return passwordRegex.test(password);
}

export default validatePassword;
