package com.oui.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.oui.pojo.TbCity;

@Mapper
public interface CityMapper {
	/*这里写sql语句, 数据它会自动封装到对象中，但是记得和数据库中的列名一致*/
	
	/*查询城市数据*/
	@Select("select * from tb_city")
	List<TbCity> getCityData();
	
	/*添加城市数据*/
	@Insert("insert into tb_city(code,name) values (#{code}, #{name})")
	void addCity(TbCity tbCity);
	
	/*更新城市数据*/
	@Update("update tb_city set name=#{name} where code=#{code}")
	void updateCity(TbCity tbCity);
	
	/*删除城市数据*/
	@Delete("delete from tb_city where code=#{code}")
	void deleteCity(Long code);
}
