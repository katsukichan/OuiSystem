<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
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
                            <a class="nav-link" href="show.jsp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-bar-chart-2">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                                演出管理 
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
                            <a class="nav-link active" href="category.jsp">
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
                <!-- 分类列表 -->
                <div id="categoryList">
                    <h2>分类列表</h2>
                    <button type="button" class="btn btn-secondary btn-sm" id="addCategory">添加</button>  
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">分类id</th>
                                <th scope="col">分类名称</th>
                                <th scope="col">分类排序（数字小的排前）</th>
                                <th scope="col">操作</th>
                            </tr>
                        </thead>
                        <tbody id="categoryTbody">
                            <!-- js生成 -->
                        </tbody>
                    </table>
                </div>
                
                <!-- 添加列表 -->
                <div id="addBox" style="display:none">
                    
                    <label for="add_category_name">分类名称</label>
                    <input type="text" class="form-control" id="add_category_name" placeholder="长度为2-8个中文字符" maxlength="8">
                    
                    <div style="margin-top: 10px">
                        <button type="button" class="btn btn-dark btn-sm" id="add_category">添加</button>
                        <button type="button" class="btn btn-secondary btn-sm" id="add_cancle">取消</button>
                    </div>
                </div>

                <!-- 修改列表 -->
                <div id="editBox" style="display:none">
                    <label>分类id</label>
                    <input class="form-control" id="edit_category_id" type="text" value="1" readonly>

                    <label for="edit_category_name">分类名称</label>
                    <input type="text" class="form-control" id="edit_category_name" placeholder="长度为2-8个中文字符" maxlength="8">
                    
                    <div style="margin-top: 10px">
                        <button type="button" class="btn btn-dark btn-sm" id="edit_category">修改</button>
                        <button type="button" class="btn btn-secondary btn-sm" id="edit_cancle">取消</button>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="../lib/jquery-3.2.1.js"></script>
    <script src="../js/category.js"></script>
</body>

</html>