import reateLimit, { rateLimit } from "express-rate-limit";

export const apilimiter = rateLimit({
    window: 1* 60* 1000,  //1-minute
    max:2,   //max 2 requests per IP
    message:{
        success: false,
        message: "Too many requests, please Try again later"
    },
    standardHeaders: true,
    legacyHeaders: false
});


export default rateLimit