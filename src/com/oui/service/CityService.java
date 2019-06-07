package com.oui.service;

import java.util.List;

import com.oui.pojo.TbCity;

public interface CityService {
	
	//查询
	List<TbCity> getCityData();
	
	//添加
	void addCity(TbCity tbCity);
	
	//修改
	void updateCity(TbCity tbCity);
	
	//删除
	void deleteCity(Long code);
}
