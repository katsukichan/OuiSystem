package com.oui.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.oui.pojo.TbCategory;

@Mapper
public interface CategoryMapper {
	/*这里写sql语句, 数据它会自动封装到对象中，但是记得和数据库中的列名一致*/
	
	/*查询分类数据*/
	@Select("select * from tb_category")
	List<TbCategory> getCategoryData();
	
	/*添加分类数据*/
	@Insert("insert into tb_category(name) values (#{name})")
	void addCategory(String name);
	
	/*更新分类名称数据*/
	@Update("update tb_category set name=#{name} where id=#{id}")
	void updateCategoryName(@Param("id") Long id,@Param("name") String name);
	
	/*更新分类排序数数据*/
	@Update("update tb_category set sort=#{sort} where id=#{id}")
	void updateCategorySort(@Param("id") Long id,@Param("sort") Long sort);
	
	/*删除分类数据*/
	@Delete("delete from tb_category where id=#{id}")
	void deleteCategory(Long id);
}
