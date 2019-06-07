package com.oui.service;

import java.util.List;

import com.oui.pojo.TbCategory;

public interface CategoryService {
	//查分类全部
	List<TbCategory> getCategoryData();
	
	//添加
	void addCategory(String name);
	
	//修改名称
	void updateCategoryName(Long id,String name);
	
	//修改排序数
	void updateCategorySort(Long id,Long sort);
	
	//删除
	void deleteCategory(Long id);
}
