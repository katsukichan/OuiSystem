package com.oui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oui.mapper.UserMsgMapper;
import com.oui.pojo.TbUserMsg;
import com.oui.service.UserMsgService;

/*标注这是Service类，会被Spring装载到容器中*/
@Service
public class UserMsgServiceImpl implements UserMsgService{
	/*需要哪个对象就使用这个注解注入进来*/
	@Autowired
	private UserMsgMapper userMsgMapper;
	
	@Override
	public List<TbUserMsg> getUserData() {
		return userMsgMapper.getUserData();
	}
	
	@Override
	public void deleteUserInfo(Long id) {
		userMsgMapper.deleteUserInfo(id);
	}
	
	@Override
	public void deleteUserLogin(String login_phone) {
		userMsgMapper.deleteUserLogin(login_phone);
	}
}
