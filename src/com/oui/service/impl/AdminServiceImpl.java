package com.oui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oui.mapper.AdminMapper;
import com.oui.pojo.TbAdmin;
import com.oui.service.AdminService;

/*标注这是Service类，会被Spring装载到容器中*/
@Service
public class AdminServiceImpl implements AdminService{
	/*需要哪个对象就使用这个注解注入进来*/
	@Autowired
	private AdminMapper adminMapper;
	
	@Override
	public List<TbAdmin> findAdmin(String user) {
		return adminMapper.findAdmin(user); //可以直接使用
	}
}
