var constants = require('./constants');

module.exports = {
    user: {
        type: Object,
        unknownKeys: 'allow',
        required: true,
        schema: {
            lastName: {
                type: String,
                trim: true,
                required: true,
                errors: {
                    type: {
                        errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                        message: constants.ERROR_MSGS.LASTNAME_INVALID_DATA_TYPE
                    },
                    required: {
                        errorCode: constants.ERROR_CODES.REQUIRED_FIELD,
                        message: constants.ERROR_MSGS.LASTNAME_REQUIRED
                    }
                }
            },
            firstName: {
                type: String,
                trim: true,
                errors: {
                    type: {
                        errorCode: constants.ERROR_CODES.INVALID_DATA_TYPE,
                        message: constants.ERROR_MSGS.FIRSTNAME_INVALID_DATA_TYPE
                    }
                }
            }
        }
    }
}