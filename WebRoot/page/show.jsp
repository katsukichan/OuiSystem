<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/fileinput.min.css">
    <link rel="stylesheet" href="../css/system.css">
</head>

<body>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Oui后台管理系统</a>
        <nav class="my-2 my-md-0 mr-md-3">
            <img src="../img/katsuki.jpg" alt="头像" width="40" height="40" id="header_img" class="img-circle">
            <a class="p-2 text-white" href="../login.jsp">登出</a>
        </nav>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="show.jsp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-bar-chart-2">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                                演出管理 <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="city.jsp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-home">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                城市列表
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="category.jsp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-layers">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                                分类列表
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="webAccount.jsp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-users">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                会员管理
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="order.jsp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-file-text">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                                订单管理
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <!-- 演出列表 -->
                <div id="showList">
                    <h2>演出管理</h2>
                    <button type="button" class="btn btn-secondary btn-sm" id="addShow">添加</button>  
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">演出id</th>
                                <th scope="col">演出图片</th>
                                <th scope="col">演出标题</th>
                                <th scope="col">演出场馆</th>
                                <th scope="col">演出时间</th>
                                <th scope="col">演出价格</th>
                                <th scope="col">演出城市</th>
                                <th scope="col">演出分类</th>
                                <th scope="col">上架状态</th>
                                <th scope="col">操作</th>
                            </tr>
                        </thead>
                        <tbody id="showTbody">
                            <!-- js生成 -->
                        </tbody>
                    </table>
                </div>

                <!-- 添加列表 -->
                <div id="addBox" style="display:none">
                    <label for="add_show_title">演出标题</label>
                    <input type="text" class="form-control" id="add_show_title" placeholder="限制长度为50个中文字符" maxlength="50">
                    
                    <label for="add_show_time">演出时间</label>
                    <!-- 字符穿切割 存入演出时间 演出场次 第一场次日期 -->
                    <input type="text" class="form-control" id="add_show_time" placeholder="限制长度为100个字符，格式参考：2019/10.27-10.28,19:00-21:40或2018/12.27-2019/01.18,19:00">
                    
                    <label for="add_show_place">演出场馆</label>
                    <input type="text" class="form-control mb-3" id="add_show_place" placeholder="限制长度为50个中文字符" maxlength="50">
                    
                    <form id="add_form">
                        <input id="add_file" name="file" type="file">
                    </form>
                    
                    <label for="add_show_city">演出城市</label>
                    <select class="form-control" id="add_show_city">
                        <!-- js生成 -->
                    </select>
                    
                    <label for="add_show_category">演出分类</label>
                    <select class="form-control" id="add_show_category">
                        <!-- js生成 -->
                    </select>
                    
                    <label for="add_show_price">演出价格</label>
                    <!-- 获取时以逗号切割 -->
                    <input type="text" class="form-control" id="add_show_price" placeholder="限制长度为50个字符，格式100,200,300" maxlength="50">
                    
                    <!-- 是否上架 -->
                    <p>上下架选择</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="isOnline" id="add_show_on" value="0" checked>
                        <label class="form-check-label" for="add_show_on" style="margin-right: 10px">上架</label>
                        <input class="form-check-input" type="radio" name="isOnline" id="add_show_off" value="1">
                        <label class="form-check-label" for="add_show_off">下架</label>
                    </div>
                    
                    <div style="margin-top: 10px">
                        <button type="button" class="btn btn-dark btn-sm" id="add_show">添加</button>
                        <button type="button" class="btn btn-secondary btn-sm" id="add_cancle">取消</button>
                    </div>
                </div>

                <!-- 修改列表 -->
                <div id="editBox" style="display:none">
                    <label>演出id</label>
                    <input class="form-control" id="edit_show_id" type="text" readonly>
                    
                    <label for="edit_show_title">演出标题</label>
                    <input type="text" class="form-control" id="edit_show_title" placeholder="限制长度为50个中文字符" maxlength="50">
                    
                    <label for="edit_show_time">演出时间</label>
                    <!-- 字符穿切割 存入演出时间 演出场次 第一场次日期 -->
                    <input type="text" class="form-control" id="edit_show_time" placeholder="限制长度为100个字符，格式参考：2019/10.27-10.28,19:00-21:40或2018/12.27-2019/01.18,19:00">
                    
                    <label for="edit_show_place">演出场馆</label>
                    <input type="text" class="form-control mb-3" id="edit_show_place" placeholder="限制长度为50个中文字符" maxlength="50">
                    
                    <form id="edit_form">
                        <input id="edit_file" name="file" type="file">
                    </form>            
                    
                    <label for="edit_show_city">演出城市</label>
                    <select class="form-control" id="edit_show_city">
                        <!-- js生成 -->
                    </select>
                    
                    <label for="edit_show_category">演出分类</label>
                    <select class="form-control" id="edit_show_category">
                        <!-- js生成 -->
                    </select>
                    
                    <label for="edit_show_price">演出价格</label>
                    <!-- 获取时以逗号切割 -->
                    <input type="text" class="form-control" id="edit_show_price" placeholder="限制长度为50个字符，格式100,200,300" maxlength="50">
                    
                    <div style="margin-top: 10px">
                        <button type="button" class="btn btn-dark btn-sm" id="edit_show">修改</button>
                        <button type="button" class="btn btn-secondary btn-sm" id="edit_cancle">取消</button>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="../lib/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="../js/fileinput.min.js"></script>
	<script type="text/javascript" src="../js/zh.js"></script>
    <script src="../js/show.js"></script>
</body>

</html>