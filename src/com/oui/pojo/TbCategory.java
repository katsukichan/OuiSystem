package com.oui.pojo;

import java.io.Serializable;

public class TbCategory implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	/*分类编号*/
	private Long id;
	/*分类名称*/
	private String name;
	/*分类排序号*/
	private Long sort;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getSort() {
		return sort;
	}
	public void setSort(Long sort) {
		this.sort = sort;
	}
	
	
}
