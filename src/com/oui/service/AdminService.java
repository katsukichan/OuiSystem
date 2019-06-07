package com.oui.service;

import java.util.List;

import com.oui.pojo.TbAdmin;

public interface AdminService {
	
	List<TbAdmin> findAdmin(String user);
	
}
