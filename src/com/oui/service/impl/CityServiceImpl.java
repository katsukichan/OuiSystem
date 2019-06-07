package com.oui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oui.mapper.CityMapper;
import com.oui.pojo.TbCity;
import com.oui.service.CityService;

/*标注这是Service类，会被Spring装载到容器中*/
@Service
public class CityServiceImpl implements CityService{
	/*需要哪个对象就使用这个注解注入进来*/
	@Autowired
	private CityMapper cityMapper;
	
	@Override
	public List<TbCity> getCityData() {
		return cityMapper.getCityData(); 
	}
	
	@Override
	public void addCity(TbCity tbCity) {
		cityMapper.addCity(tbCity);
	}
	
	@Override
	public void updateCity(TbCity tbCity) {
		cityMapper.updateCity(tbCity);
	}
	
	@Override
	public void deleteCity(Long code) {
		cityMapper.deleteCity(code);
	}
}	
