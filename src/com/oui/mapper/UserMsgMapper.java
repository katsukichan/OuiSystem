package com.oui.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.oui.pojo.TbUserMsg;

@Mapper
public interface UserMsgMapper {
	/*这里写sql语句, 数据它会自动封装到对象中，但是记得和数据库中的列名一致*/
	@Select("SELECT a.id,a.login_phone,b.nickname,b.gender FROM tb_user_login a,tb_user_info b WHERE a.id=b.user_id")
	List<TbUserMsg> getUserData();
	
	/*删除用户信息*/
	@Delete("delete from tb_user_info where user_id=#{id}")
	void deleteUserInfo(Long id);
	
	/*删除用户登录账号*/
	@Delete("delete from tb_user_login where login_phone=#{login_phone}")
	void deleteUserLogin(String login_phone);
}
