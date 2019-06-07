package com.oui.controller;

import java.io.File;

import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


import com.oui.pojo.TbShow;
@Controller
public class UploadController {

	@RequestMapping("/upload")
	@ResponseBody
	public String uploadItemImg(TbShow tbShow, MultipartFile file, HttpServletRequest request) throws Exception {
		if (file.getSize() > 0) {
			String picName = UUID.randomUUID().toString();
		    // 截取文件的扩展名(如.jpg)
		    String oriName = file.getOriginalFilename();
		    String extName = oriName.substring(oriName.lastIndexOf("."));
		    // 创建文件存储路径
	        File saveFile =  new File(request.getSession().getServletContext().getRealPath("/") + "/img");
	        if (!saveFile.exists()) {
	            saveFile.mkdirs();
	        }
		    // 保存文件
		    file.transferTo(new File(saveFile, picName + extName));
		    //这里保存或者更新
		    String path = "http://localhost:8080/OuiSystem/img/" + picName + extName; //这个就是数据库中的地址
		    System.out.println(path);
			return picName + extName; //新名称
			//return oriName; 原来的名称
		}else{
			return "无上传";
		}
		
	}
	
}
