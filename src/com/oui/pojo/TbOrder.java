package com.oui.pojo;

import java.io.Serializable;

public class TbOrder implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	/*订单编号*/
	private Long id;
	/*订单流水号*/
	private Long l_id;
	/*订单状态*/
	private String status;
	/*订单用户手机*/
	private String login_phone;
	/*订单金额*/
	private Long price;
	/*订单收票人姓名*/
	private String name;
	/*订单收票人手机*/
	private String phone;
	/*订单收票方式*/
	private String way;
	/*订单收票人地址*/
	private String address;
	/*订单确认状态*/
	private String confirm;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getL_id() {
		return l_id;
	}
	public void setL_id(Long l_id) {
		this.l_id = l_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getLogin_phone() {
		return login_phone;
	}
	public void setLogin_phone(String login_phone) {
		this.login_phone = login_phone;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWay() {
		return way;
	}
	public void setWay(String way) {
		this.way = way;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getConfirm() {
		return confirm;
	}
	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}
}
