package com.oui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oui.mapper.CategoryMapper;
import com.oui.pojo.TbCategory;
import com.oui.service.CategoryService;

/*标注这是Service类，会被Spring装载到容器中*/
@Service
public class CategoryServiceImpl implements CategoryService{
	/*需要哪个对象就使用这个注解注入进来*/
	@Autowired
	private CategoryMapper categoryMapper;
	
	@Override
	public List<TbCategory> getCategoryData() {
		return categoryMapper.getCategoryData(); 
	}
	
	@Override
	public void addCategory(String name) {
		categoryMapper.addCategory(name);
	}
	
	@Override
	public void updateCategoryName(Long id,String name) {
		categoryMapper.updateCategoryName(id,name);
	}
	
	@Override
	public void updateCategorySort(Long id,Long sort) {
		categoryMapper.updateCategorySort(id,sort);
	}
	
	@Override
	public void deleteCategory(Long id) {
		categoryMapper.deleteCategory(id);
	}
}	
