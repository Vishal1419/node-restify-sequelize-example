module.exports = {
    //these constant error codes and error messages are used to avoid common mistakes and typos.
    ERROR_CODES: {
        INVALID_DATA_TYPE: 1000,
        REQUIRED_FIELD:1001,
        UNKNOWN_ERROR: 1002
    },
    ERROR_MSGS: {
        LASTNAME_INVALID_DATA_TYPE: "lastName should be string",
        LASTNAME_REQUIRED: "lastName is required",
        FIRSTNAME_INVALID_DATA_TYPE: "firstName should be string"
    }
};