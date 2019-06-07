package com.oui.service;

import java.util.List;

import com.oui.pojo.TbShow;

public interface ShowService {
	//查询演出
	List<TbShow> getShowData();
	
	//添加演出
	void addShow(String title,String time,String place,String img,String city,String category,String status,String price,String first_play_date);
	
	//修改演出数据
	void updateShow(Long id,String title,String time,String place,String img,String city,String category,String price,String first_play_date);
	
	//修改演出的上下架状态
	void updateShowStatus(Long id,String status);
	
	//删除演出
	void deleteShow(Long id);
}
