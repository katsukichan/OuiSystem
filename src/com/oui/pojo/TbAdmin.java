package com.oui.pojo;

import java.io.Serializable;

public class TbAdmin implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	/*后台用户编号*/
	private Long id;
	/*后台用户登录名*/
	private String user;
	/*后台用户登录密码*/
	private String password;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
