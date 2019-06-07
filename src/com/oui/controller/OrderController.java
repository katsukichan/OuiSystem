package com.oui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oui.pojo.TbOrder;
import com.oui.service.OrderService;
/*使用注解标志这是一个Controller类*/
@Controller
public class OrderController {
	/*订单数据*/
	@Autowired
	private OrderService orderService;
	
	//获取网站用户订单数据
	@RequestMapping("/getOrder")
	@ResponseBody
	public List<TbOrder> getOrderData() {
		return orderService.getOrderData();
	}
	
	//更新订单确认值
	@RequestMapping("/updateOrderConfirm")
	@ResponseBody
	public String update(Long id,String confirm) {
		orderService.updateOrderConfirm(id,confirm);
		return "更新确认值成功";
	}
	
	//更新收票人及其手机
	@RequestMapping("/updateOrderMsg")
	@ResponseBody
	public String update(Long id,String name,String phone) {
		orderService.updateOrderMsg(id,name,phone);
		return "更新订单信息成功";
	}
	
	//删除
	@RequestMapping(value = "/deleteOrder",  produces = "text/html;charset=utf-8")
	@ResponseBody
	public String delete(Long id) {
		orderService.deleteOrder(id);
		return "删除订单成功";
	}
}
