package com.oui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oui.pojo.TbCategory;
import com.oui.service.CategoryService;
/*使用注解标志这是一个Controller类*/
@Controller
public class CategoryController {
	/*分类数据*/
	@Autowired
	private CategoryService categoryService;
	
	//获取分类数据
	@RequestMapping("/getCategory")
	@ResponseBody
	public List<TbCategory> getCategoryData() {
		return categoryService.getCategoryData();
	}
	
	//添加
	@RequestMapping("/addCategory")
	@ResponseBody
	public String save(String name) {
		categoryService.addCategory(name);
		return "添加分类成功";
	}
	
	//更新名称
	@RequestMapping("/updateCategoryName")
	@ResponseBody
	public String update(Long id,String name) {
		categoryService.updateCategoryName(id,name);
		return "更新分类名称成功";
	}
	
	//更新排序数
	@RequestMapping("/updateCategorySort")
	@ResponseBody
	public String update(Long id,Long sort) {
		categoryService.updateCategorySort(id,sort);
		return "更新分类排序数成功";
	}
	
	//删除
	@RequestMapping(value = "/deleteCategory",  produces = "text/html;charset=utf-8")
	@ResponseBody
	public String delete(Long id) {
		categoryService.deleteCategory(id);
		return "删除分类成功";
	}
}
