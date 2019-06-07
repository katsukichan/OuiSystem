package com.oui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oui.pojo.TbUserMsg;
import com.oui.service.UserMsgService;
/*使用注解标志这是一个Controller类*/
@Controller
public class UserMsgController {
	/*网站用户数据*/
	@Autowired
	private UserMsgService userMsgService;
	
	//获取网站用户数据
	@RequestMapping("/getWebAccount")
	@ResponseBody
	public List<TbUserMsg> getUserData() {
		return userMsgService.getUserData();
	}
	
	//删除用户信息数据
	@RequestMapping(value = "/deleteUserInfo",  produces = "text/html;charset=utf-8")
	@ResponseBody
	public String delete(Long id) {
		userMsgService.deleteUserInfo(id);
		return "删除用户信息数据成功";
	}
	
	//删除用户登录数据
	@RequestMapping(value = "/deleteUserLogin",  produces = "text/html;charset=utf-8")
	@ResponseBody
	public String delete(String login_phone) {
		userMsgService.deleteUserLogin(login_phone);
		return "删除用户登录数据成功";
	}
}
