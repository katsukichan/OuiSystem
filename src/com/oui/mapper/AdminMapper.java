package com.oui.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.oui.pojo.TbAdmin;

/*标注这是一个mybatis的mapper接口*/
@Mapper
public interface AdminMapper {
	/*这里写sql语句, 数据它会自动封装到对象中，但是记得和数据库中的列名一致*/
	@Select("select * from tb_admin where user=#{user}")
	List<TbAdmin> findAdmin(String user);
}
