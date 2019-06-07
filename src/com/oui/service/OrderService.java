package com.oui.service;

import java.util.List;

import com.oui.pojo.TbOrder;

public interface OrderService {
	
	//查询
	List<TbOrder> getOrderData();
	
	//修改订单确认值
	void updateOrderConfirm(Long id,String confirm);
	
	//修改收票人及其手机数据
	void updateOrderMsg(Long id,String name,String phone);
	
	//删除
	void deleteOrder(Long id);
}
