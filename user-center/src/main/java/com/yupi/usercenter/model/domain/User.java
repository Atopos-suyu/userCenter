package com.yupi.usercenter.model.domain;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户表
 * @TableName user
 */
@TableName(value ="user")
@Data
public class User implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 用户昵称
     */
    private String username;

    /**
     * 账号
     */
    private String userAccount;

    /**
     * 用户头像
     */
    private String avatarUrl;

    /**
     * 性别
     */
    private String gender;

    /**
     * 密码
     */
    private String userPassword;

    /**
     * 电话
     */
    private String phone;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 状态 0-正常
     */
    private Integer userStatus;

    /**
     * 创建时间
     */
    private Date createStatus;

    /**
     * 更新时间
     */
    private Date updateTime;

    @TableLogic
    /**
     * 是否删除
     */
    private Integer isDelete;

    /**
     * 默认用户 0 - 普通用户 1 - 管理员
     */
    private Integer userRole;
    /**
     * 星球编号
     */
    private String planetCode;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}