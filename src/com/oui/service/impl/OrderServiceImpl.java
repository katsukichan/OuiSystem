package com.oui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oui.mapper.OrderMapper;
import com.oui.pojo.TbOrder;
import com.oui.service.OrderService;

/*标注这是Service类，会被Spring装载到容器中*/
@Service
public class OrderServiceImpl implements OrderService{
	/*需要哪个对象就使用这个注解注入进来*/
	@Autowired
	private OrderMapper orderMapper;
	
	@Override
	public List<TbOrder> getOrderData() {
		return orderMapper.getOrderData();
	}
	
	@Override
	public void updateOrderConfirm(Long id,String confirm) {
		orderMapper.updateOrderConfirm(id,confirm);
	}
	
	@Override
	public void updateOrderMsg(Long id,String name,String phone) {
		orderMapper.updateOrderMsg(id,name,phone);
	}
	
	@Override
	public void deleteOrder(Long id) {
		orderMapper.deleteOrder(id);
	}
}
