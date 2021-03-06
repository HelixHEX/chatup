"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
exports.validateRegister = (input) => {
    if (input.username.length <= 2) {
        return [
            {
                field: "username",
                message: "length must be greater than 2",
            },
        ];
    }
    if (input.username.includes("@")) {
        return [
            {
                field: "username",
                message: "cannot include an @",
            },
        ];
    }
    if (input.password.length <= 2) {
        return [
            {
                field: "password",
                message: "length must be greater than 2",
            },
        ];
    }
    return null;
};
//# sourceMappingURL=validateRegister.js.map