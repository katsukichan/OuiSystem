package com.oui.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.oui.pojo.TbShow;

@Mapper
public interface ShowMapper {
	/*这里写sql语句, 数据它会自动封装到对象中，但是记得和数据库中的列名一致*/
	@Select("select * from tb_show")
	List<TbShow> getShowData();
	
	/*添加演出数据*/
	@Insert("insert into tb_show(title,time,place,img,city,category,status,price,first_play_date) values (#{title}, #{time},#{place},#{img},#{city},#{category},#{status},#{price},#{first_play_date})")
	void addShow(@Param("title") String title,@Param("time") String time,@Param("place") String place,@Param("img") String img,@Param("city") String city,@Param("category") String category,@Param("status") String status,@Param("price") String price,@Param("first_play_date") String first_play_date);
	
	/*修改演出数据*/
	@Update("update tb_show set title=#{title},time=#{time},place=#{place},img=#{img},city=#{city},category=#{category},price=#{price},first_play_date=#{first_play_date} where id=#{id}")
	void updateShow(@Param("id") Long id,@Param("title") String title,@Param("time") String time,@Param("place") String place,@Param("img") String img,@Param("city") String city,@Param("category") String category,@Param("price") String price,@Param("first_play_date") String first_play_date);
	
	/*更新演出的上下架状态*/
	@Update("update tb_show set `status`=#{status} where id=#{id}")
	void updateShowStatus(@Param("id") Long id,@Param("status") String status);
	
	/*删除演出*/
	@Delete("delete from tb_show where id=#{id}")
	void deleteShow(Long id);
}
