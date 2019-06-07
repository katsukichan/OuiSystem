$(() => {
    //演出列表
    var $showList = $("#showList");
    //演出列表的添加按钮
    var $addShow = $("#addShow");
    //演出列表的表体
    var $showTbody = $("#showTbody");
    //添加列表
    var $addBox = $("#addBox");
    //添加表单的添加按钮
    var $add_show = $("#add_show");
    //添加表单的取消按钮
    var $add_cancle = $("#add_cancle");
    //修改列表
    var $editBox = $("#editBox");
    //修改表单的添加按钮
    var $edit_show = $("#edit_show");
    //修改表单的取消按钮
    var $edit_cancle = $("#edit_cancle");
    //添加表单的城市列表
    var $add_show_city = $("#add_show_city");
    //添加表单的分类列表
    var $add_show_category = $("#add_show_category");
    //修改表单的城市列表
    var $edit_show_city = $("#edit_show_city");
    //修改表单的分类列表
    var $edit_show_category = $("#edit_show_category");
    //存修改时获取图片路径变量
    var imgSrc = '';

    (async () => {
        let fn = {
            //请求函数
            getShowData() {
                //获取演出数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:8080/OuiSystem/getShow.do',
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            getCityData() {
                //获取城市数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:8080/OuiSystem/getCity.do',
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            getCategoryData() {
                //获取分类数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:8080/OuiSystem/getCategory.do',
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            addShowData(sendObj){
                //添加演出数据
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/addShow.do',
                        data: sendObj,
                        success(data){
                            resolve(data);
                        }
                    })
                })
            },
            updateShowData(sendObj){
                //更新演出数据
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateShow.do',
                        data: sendObj,
                        success(data){
                            resolve(data);
                        }
                    })
                })
            },
            updateShowStatus(id, status) {
                //更新演出上下架状态值
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateShowStatus.do',
                        data: {
                            id,
                            status
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            deleteShowData(id) {
                //删除演出数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/deleteShow.do',
                        data: {
                            id
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            upload(formData) {
                //上传文件函数
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/upload.do',
                        contentType: false,
                        processData: false,
                        data: formData,
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            //事件绑定函数
            changeContentClick() {
                //演出列表添加按钮的点击
                $addShow.on("click", () => {
                    $showList.css("display", "none");
                    $addBox.css("display", "block");
                })
                //添加表单取消按钮的点击
                $add_cancle.on("click", () => {
                    $showList.css("display", "block");
                    $addBox.css("display", "none");
                    $("#add_show_title").val('');
                    $("#add_show_time").val('');
                    $("#add_show_place").val('');
                    $("#add_show_price").val('');
                    $("#add_file").val('');
                })
                //修改表单取消按钮的点击
                $edit_cancle.on("click", () => {
                    $showList.css("display", "block");
                    $editBox.css("display", "none");
                    $("#edit_show_title").val('');
                    $("#edit_show_time").val('');
                    $("#edit_show_place").val('');
                    $("#edit_show_price").val('');
                    $("#edit_show_id").val('');
                    imgSrc = '';
                })
            },
            showTbodyClick() {
                //演出列表事件委托
                $showTbody.on("click", async (e) => {
                    if (e.target.tagName == "BUTTON") {
                        var curButton = e.target;
                        var curId = curButton.parentElement.parentElement.parentElement.children[0].innerHTML;
                        if (curButton.innerHTML == "修改") {
                            var $curTr = $(curButton).parent().parent().parent();
                            //获取当前图片src值
                            imgSrc = $curTr.children().eq(1).children().eq(0).attr('src');
                            var curTitle = $curTr.children().eq(2).html();
                            var curTime = $curTr.children().eq(4).html();
                            var curPlace = $curTr.children().eq(3).html();
                            var curPrice = $curTr.children().eq(5).html();
                            $("#edit_show_id").val(curId);
                            $("#edit_show_title").val(curTitle);
                            $("#edit_show_time").val(curTime);
                            $("#edit_show_place").val(curPlace);
                            $("#edit_show_price").val(curPrice);
                            //获取城市和分类值，遍历选项，相同字则添加选中属性
                            var curCity = $curTr.children().eq(6).html();
                            var curCategory = $curTr.children().eq(7).html();
                            var $cityArr = $("#edit_show_city").children();
                            for (let i = 0; i < $cityArr.length; i++) {
                                if ($cityArr.eq(i).html() == curCity) {
                                    $cityArr.eq(i).prop('selected', true);
                                }
                            }
                            var $categoryArr = $("#edit_show_category").children();
                            for (let i = 0; i < $categoryArr.length; i++) {
                                if ($categoryArr.eq(i).html() == curCategory) {
                                    $categoryArr.eq(i).prop('selected', true);
                                }
                            }
                            $showList.css("display", "none");
                            $editBox.css("display", "block");
                            //返顶
                            scrollTo(0, 0);
                        } else if (curButton.innerHTML == "删除") {
                            if (confirm('确认删除演出？')) {
                                //根据id发送请求
                                let result = await fn.deleteShowData(curId);
                                if (result == '删除演出成功') {
                                    location.reload();
                                }
                            } else {
                                return false;
                            }
                        } else {
                            //上下架
                            var showStatus = curButton.parentElement.parentElement.previousElementSibling;
                            if (curButton.innerHTML == '下架') {
                                curButton.innerHTML = '上架';
                                showStatus.innerHTML = '下架';
                                //发送请求 变更为下架状态
                                var status = '1';
                                fn.updateShowStatus(curId, status);
                            } else if (curButton.innerHTML == '上架') {
                                curButton.innerHTML = '下架';
                                showStatus.innerHTML = '上架';
                                //发送请求 变更为上架状态
                                var status = '0';
                                fn.updateShowStatus(curId, status);
                            }
                        }
                    }
                })
            },
            addShowClick() {
                $("#add_file").fileinput({
                    language: 'zh',
                    uploadUrl: "UploadServlet", // 上传路径
                    uploadAsync: true, //是否异步传输
                    maxFileCount: 20, //最大文件上传数量
                    dropZoneEnabled: false,//是否显示拖拽区域
                    showUpload: false //是否显示上传按钮
                });
                //添加表单添加按钮的点击
                $add_show.on("click", async () => {
                    //输入框
                    var addTitle = $("#add_show_title").val();
                    var addTime = $("#add_show_time").val();
                    var addPlace = $("#add_show_place").val();
                    var addPrice = $("#add_show_price").val();
                    if (addTitle.trim().length == 0) {
                        alert("请输入标题");
                        $("#add_show_title").val('');
                        return false;
                    }
                    if (addTime.trim().length == 0) {
                        alert("请输时间");
                        $("#add_show_time").val('');
                        return false;
                    }
                    if (addPlace.trim().length == 0) {
                        alert("请输入场馆");
                        $("#add_show_place").val('');
                        return false;
                    }
                    if (addPrice.trim().length == 0) {
                        alert("请输入价格");
                        $("#add_show_price").val('');
                        return false;
                    }

                    //上传文件
                    var formData = new FormData($("#add_form")[0]);
                    var uploadResult = await fn.upload(formData);
                    if(uploadResult != '无上传'){
                        var addImg = `http://localhost:8080/OuiSystem/img/` + uploadResult;
                    }else{
                        alert('未选择上传图片');
                        return false;
                    }

                    //选项
                    var $checked = $(":checked");
                    //城市
                    var addCity = $checked.eq(0).html();
                    //分类
                    var addCategory = $checked.eq(1).html();
                    //上下架
                    var status = $checked.eq(2).val();

                    //第一场场次日期,根据addTime处理
                    var timeSplit1 = addTime.split(",");
                    //年日期
                    var yearDate = timeSplit1[0];
                    var timeSplit2 = yearDate.split("/");
                    //处理跨年
                    if (timeSplit2.length > 2) {
                        var timeSplit3 = timeSplit2[1].split("-");
                        //上年
                        var firstYear = timeSplit2[0];
                        //上日期
                        var firstDate = timeSplit3[0];
                        var addFirstDate = firstYear + `.` + firstDate;
                    } else {
                        //年
                        var year = timeSplit2[0];
                        //日期
                        var date = timeSplit2[1];
                        var timeSplit3 = date.split("-");
                        //首日期
                        var firstDate = timeSplit3[0];
                        var addFirstDate = year + `.` + firstDate;
                    }

                    let addObj = {
                        title: addTitle,
                        time: addTime,
                        place: addPlace,
                        img: addImg,
                        city: addCity,
                        category: addCategory,
                        status: status,
                        price: addPrice,
                        first_play_date: addFirstDate
                    }
                    console.log(addObj);
                    let result = await fn.addShowData(addObj);
                    if(result == '添加演出成功'){
                        location.reload();
                    }
                })
            },
            editShowClick() {
                $("#edit_file").fileinput({
                    language: 'zh',
                    uploadUrl: "UploadServlet", // 上传路径
                    uploadAsync: true, //是否异步传输
                    maxFileCount: 20, //最大文件上传数量
                    dropZoneEnabled: false,//是否显示拖拽区域
                    showUpload: false //是否显示上传按钮
                });
                //修改表单添加按钮的点击
                $edit_show.on("click", async () => {
                    //输入框
                    var editId = $("#edit_show_id").val();
                    var editTitle = $("#edit_show_title").val();
                    var editTime = $("#edit_show_time").val();
                    var editPlace = $("#edit_show_place").val();
                    var editPrice = $("#edit_show_price").val();
                    if (editTitle.trim().length == 0) {
                        alert("请输入标题");
                        $("#edit_show_title").val('');
                        return false;
                    }
                    if (editTime.trim().length == 0) {
                        alert("请输时间");
                        $("#edit_show_time").val('');
                        return false;
                    }
                    if (editPlace.trim().length == 0) {
                        alert("请输入场馆");
                        $("#edit_show_place").val('');
                        return false;
                    }
                    if (editPrice.trim().length == 0) {
                        alert("请输入价格");
                        $("#edit_show_price").val('');
                        return false;
                    }

                    //上传文件
                    var formData = new FormData($("#edit_form")[0]);
                    var uploadResult = await fn.upload(formData);
                    if(uploadResult != '无上传'){
                        imgSrc = `http://localhost:8080/OuiSystem/img/` + uploadResult;
                    }

                    //选项
                    var $checked = $(":checked");
                    //城市
                    var editCity = $checked.eq(3).html();
                    //分类
                    var editCategory = $checked.eq(4).html();

                    //第一场场次日期,根据editTime处理
                    var timeSplit1 = editTime.split(",");

                    //年日期
                    var yearDate = timeSplit1[0];
                    var timeSplit2 = yearDate.split("/");
                    //处理跨年
                    if (timeSplit2.length > 2) {
                        var timeSplit3 = timeSplit2[1].split("-");
                        //上年
                        var firstYear = timeSplit2[0];
                        //上日期
                        var firstDate = timeSplit3[0];
                        var editFirstDate = firstYear + `.` + firstDate;
                    } else {
                        //年
                        var year = timeSplit2[0];
                        //日期
                        var date = timeSplit2[1];
                        var timeSplit3 = date.split("-");
                        //首日期
                        var firstDate = timeSplit3[0];
                        var editFirstDate = year + `.` + firstDate;
                    }

                    let editObj = {
                        id: editId,
                        title: editTitle,
                        time: editTime,
                        place: editPlace,
                        img: imgSrc,
                        city: editCity,
                        category: editCategory,
                        price: editPrice,
                        first_play_date: editFirstDate
                    }

                    let result = await fn.updateShowData(editObj);
                    if(result == '更新演出成功'){
                        location.reload();
                    }
                })
            },
            //结构生成函数
            createShowTbody(data) {
                var str = '';
                for (let i = 0; i < data.length; i++) {
                    str += `<tr>
                                <th scope="col">${data[i].id}</th>
                                <th scope="col">
                                    <img src="${data[i].img}" width="100px">
                                </th>
                                <th scope="col">${data[i].title}</th>
                                <th scope="col">${data[i].place}</th>
                                <th scope="col">${data[i].time}</th>
                                <th scope="col">${data[i].price}</th>
                                <th scope="col">${data[i].city}</th>
                                <th scope="col">${data[i].category}</th>`;
                    if (data[i].status == '0') {
                        str += `<th scope="col">上架</th>
                                <th scope="col">
                                    <div class="btn-group-vertical">
                                        <button type="button" class="btn btn-dark btn-sm">下架</button>`
                    } else {
                        str += `<th scope="col">下架</th>
                                <th scope="col">
                                    <div class="btn-group-vertical">
                                        <button type="button" class="btn btn-dark btn-sm">上架</button>`
                    }
                    str += `   <button type="button" class="btn btn-secondary btn-sm">修改</button>
                                <button type="button" class="btn btn-dark btn-sm">删除</button>  
                            </div>                                                      
                        </th>
                    </tr>`
                }
                $showTbody.html(str);
            },
            createSelectList(cityData, categoryData) {
                //下拉选择列表渲染
                var cityStr = '';
                var categoryStr = '';
                for (let i = 0; i < cityData.length; i++) {
                    cityStr += `<option value="${cityData[i].name}">${cityData[i].name}</option>`;
                }
                for (let i = 0; i < categoryData.length; i++) {
                    categoryStr += `<option value="${categoryData[i].name}">${categoryData[i].name}</option>`;
                }
                $add_show_city.html(cityStr);
                $edit_show_city.html(cityStr);
                $add_show_category.html(categoryStr);
                $edit_show_category.html(categoryStr);
            }
        }
        let showData = await fn.getShowData();
        let cityData = await fn.getCityData();
        let categoryData = await fn.getCategoryData();
        fn.createShowTbody(showData);
        fn.createSelectList(cityData, categoryData);
        fn.changeContentClick();
        fn.showTbodyClick();
        fn.addShowClick();
        fn.editShowClick();
    })()
})