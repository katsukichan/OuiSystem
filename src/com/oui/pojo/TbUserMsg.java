package com.oui.pojo;

import java.io.Serializable;

public class TbUserMsg implements Serializable{

	private static final long serialVersionUID = 1L;
	
	/*网站用户编号*/
	private Long id;
	/*网站用户手机*/
	private String login_phone;
	/*网站用户昵称*/
	private String nickname;
	/*网站用户性别*/
	private String gender;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLogin_phone() {
		return login_phone;
	}
	public void setLogin_phone(String login_phone) {
		this.login_phone = login_phone;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
}
