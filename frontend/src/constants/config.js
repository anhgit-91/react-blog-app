// API MESSAGES

export const API_MESSAGES = {
    loading: {
        title: "Loading",
        msg: "Data is being loaded, please wait...",
    },
    success: {
        title: "Success",
        msg: "Data is loaded successfully",
    },
    responseError: {
        title: "Error",
        msg: "An error occurred while loading data",
    },
    requestError: {
        title: "Error",
        msg: "Server is not responding",
    },
    networkError: {
        title: "Error",
        msg: "Network error",
    },
};

// API SERIVCE CALL
// service call: {url: "/", method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false}
export const SERVICE_URLS = {
    userSignup: { url: "/signup", method: "POST" },
};
