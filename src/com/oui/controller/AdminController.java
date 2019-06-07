package com.oui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oui.pojo.TbAdmin;
import com.oui.service.AdminService;
/*使用注解标志这是一个Controller类*/
@Controller
public class AdminController {
	/*后台用户数据*/
	@Autowired
	private AdminService adminService;
	
	//登录验证查询
	@RequestMapping("/login")
	@ResponseBody
	public List<TbAdmin> findAdmin(String user) {
		return adminService.findAdmin(user);
	}
}
