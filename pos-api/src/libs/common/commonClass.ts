import { ResponseStatus } from "./commonConstant";

export class ResponseData {
    constructor(
        public message: string,
        public data: any,
        public error: boolean,
        public statusCode?: number
    ) {
        return {
            message: message,
            data: data,
            error: error,
            statusCode: statusCode
        };
    }

    static success(data: any, message: string) {
        return new ResponseData(message, data, false, ResponseStatus.OK);
    }

    static error(message: string, data: any) {
        return new ResponseData(message, data, true);
    }

    static notFound() {
        return new ResponseData("Data not found", null, true);
    }
}