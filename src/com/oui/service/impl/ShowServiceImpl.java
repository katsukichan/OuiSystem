package com.oui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oui.mapper.ShowMapper;
import com.oui.pojo.TbShow;
import com.oui.service.ShowService;

/*标注这是Service类，会被Spring装载到容器中*/
@Service
public class ShowServiceImpl implements ShowService{
	/*需要哪个对象就使用这个注解注入进来*/
	@Autowired
	private ShowMapper showMapper;
	
	@Override
	public List<TbShow> getShowData() {
		return showMapper.getShowData(); 
	}
	
	@Override
	public void addShow(String title,String time,String place,String img,String city,String category,String status,String price,String first_play_date) {
		showMapper.addShow(title,time,place,img,city,category,status,price,first_play_date);
	}
	
	@Override
	public void updateShow(Long id,String title,String time,String place,String img,String city,String category,String price,String first_play_date) {
		showMapper.updateShow(id,title,time,place,img,city,category,price,first_play_date);
	}
	
	@Override
	public void updateShowStatus(Long id,String status) {
		showMapper.updateShowStatus(id,status);
	}
	
	@Override
	public void deleteShow(Long id) {
		showMapper.deleteShow(id);
	}
}
