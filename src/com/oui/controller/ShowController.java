package com.oui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oui.pojo.TbShow;
import com.oui.service.ShowService;
/*使用注解标志这是一个Controller类*/
@Controller
public class ShowController {
	/*演出数据*/
	@Autowired
	private ShowService showService;
	
	//获取演出数据
	@RequestMapping("/getShow")
	@ResponseBody
	public List<TbShow> getShowData() {
		return showService.getShowData();
	}
	
	//添加演出数据
	@RequestMapping("/addShow")
	@ResponseBody
	public String save(String title,String time,String place,String img,String city,String category,String status,String price,String first_play_date) {
		showService.addShow(title,time,place,img,city,category,status,price,first_play_date);
		return "添加演出成功";
	}
	
	//更新演出数据
	@RequestMapping("/updateShow")
	@ResponseBody
	public String update(Long id,String title,String time,String place,String img,String city,String category,String price,String first_play_date) {
		showService.updateShow(id,title,time,place,img,city,category,price,first_play_date);
		return "更新演出成功";
	}
	
	//更新演出状态值
	@RequestMapping("/updateShowStatus")
	@ResponseBody
	public String update(Long id,String status) {
		showService.updateShowStatus(id,status);
		return "更新演出状态成功";
	}
	
	//删除
	@RequestMapping(value = "/deleteShow",  produces = "text/html;charset=utf-8")
	@ResponseBody
	public String delete(Long id) {
		showService.deleteShow(id);
		return "删除演出成功";
	}
}
