package com.oui.pojo;

import java.io.Serializable;

public class TbCity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	/*城市编码*/
	private Long code;
	/*城市名称*/
	private String name;
	
	public Long getCode() {
		return code;
	}
	public void setCode(Long code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
