package com.oui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oui.pojo.TbCity;
import com.oui.service.CityService;

/*使用注解标志这是一个Controller类*/
@Controller
public class CityController {
	/*城市数据*/
	@Autowired
	private CityService cityService;
	
	//获取城市数据
	@RequestMapping("/getCity")
	@ResponseBody
	public List<TbCity> getCityData() {
		return cityService.getCityData();
	}
	
	//添加城市数据
	@RequestMapping("/addCity")
	@ResponseBody
	public String save(TbCity tbCity) {
		cityService.addCity(tbCity);
		return "添加城市成功";
	}
	
	//更新城市数据
	@RequestMapping("/updateCity")
	@ResponseBody
	public String update(TbCity tbCity) {
		cityService.updateCity(tbCity);
		return "更新城市成功";
	}
	
	//删除城市数据
	@RequestMapping(value = "/deleteCity",  produces = "text/html;charset=utf-8")
	@ResponseBody
	public String delete(Long code) {
		cityService.deleteCity(code);
		return "删除城市成功";
	}
}
