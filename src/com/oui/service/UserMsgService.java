package com.oui.service;

import java.util.List;

import com.oui.pojo.TbUserMsg;

public interface UserMsgService {
	//查询
	List<TbUserMsg> getUserData();
	
	//删除用户info
	void deleteUserInfo(Long id);
	
	//删除用户login
	void deleteUserLogin(String login_phone);
}
