package com.yupi.usercenter.common;

public class ResultUtils {

    /**
     * 成功
     * @param data
     * @return
     * @param <T>
     */
    public static <T> BaseResponse<T> success( T data){

        return new BaseResponse<>(0,data,"ok");

    }

    /**
     *  失败
     *
     * @param
     * @return
     */
    public static BaseResponse error(int code,String message, String description){
        return new BaseResponse<>(code,null,message,description);
    }

    /**
     *  失败
     *
     * @param errorCode
     * @return
     */
    public static BaseResponse error(ErrorCode errorCode){
        return new BaseResponse<>(errorCode);
    }

    /**
     *  失败
     *
     * @param errorCode
     * @return
     */
    public static BaseResponse error(ErrorCode errorCode,String message, String description){
        return new BaseResponse<>(errorCode.getCode(),null,message,description);
    }

    /**
     *  失败
     *
     * @param errorCode
     * @return
     */
    public static BaseResponse error(ErrorCode errorCode,String description){
        return new BaseResponse<>(errorCode.getCode(),errorCode.getMessage(),description);
    }


}
