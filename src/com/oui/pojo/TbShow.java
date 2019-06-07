package com.oui.pojo;

import java.io.Serializable;

public class TbShow implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	/*演出编号*/
	private Long id;
	/*演出图片路径*/
	private String img;
	/*演出标题*/
	private String title;
	/*演出场馆*/
	private String place;
	/*演出时间*/
	private String time;
	/*演出价格*/
	private String price;
	/*演出城市*/
	private String city;
	/*演出分类*/
	private String category;
	/*演出上下架状态*/
	private String status;
	/*第一场场次日期*/
	private String first_play_date;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getFirst_play_date() {
		return first_play_date;
	}
	public void setFirst_play_date(String first_play_date) {
		this.first_play_date = first_play_date;
	}
}
