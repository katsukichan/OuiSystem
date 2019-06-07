package com.oui.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.oui.pojo.TbOrder;

@Mapper
public interface OrderMapper {
	/*这里写sql语句, 数据它会自动封装到对象中，但是记得和数据库中的列名一致*/
	@Select("select a.id,a.l_id,a.`status`,b.login_phone,a.price,a.`name`,a.phone,a.way,a.address,a.confirm from tb_order a,tb_user_login b where a.u_id=b.id")
	List<TbOrder> getOrderData();
	
	/*更新订单确认值数据*/
	@Update("update tb_order set confirm=#{confirm} where id=#{id}")
	void updateOrderConfirm(@Param("id") Long id,@Param("confirm") String confirm);
	
	/*更新收票人及其手机数据*/
	@Update("update tb_order set name=#{name},phone=#{phone} where id=#{id}")
	void updateOrderMsg(@Param("id") Long id,@Param("name") String name,@Param("phone") String phone);
	
	/*删除订单数据*/
	@Delete("delete from tb_order where id=#{id}")
	void deleteOrder(Long id);
}
