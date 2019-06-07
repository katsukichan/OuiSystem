$(() => {
    //城市列表
    var $cityList = $("#cityList");
    //城市列表的添加按钮
    var $addCity = $("#addCity");
    //城市列表的表体
    var $cityTbody = $("#cityTbody");
    //添加列表
    var $addBox = $("#addBox");
    //添加表单的添加按钮
    var $add_city = $("#add_city");
    //添加表单的取消按钮
    var $add_cancle = $("#add_cancle");
    //修改列表
    var $editBox = $("#editBox");
    //修改表单的添加按钮
    var $edit_city = $("#edit_city");
    //修改表单的取消按钮
    var $edit_cancle = $("#edit_cancle");

    (async () => {
        let fn = {
            //请求函数
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
            addCityData(code, name) {
                //添加城市数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/addCity.do',
                        data: {
                            code,
                            name
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            updateCityData(code, name) {
                //更新城市数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateCity.do',
                        data: {
                            code,
                            name
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            deleteCityData(code) {
                //删除城市数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/deleteCity.do',
                        data: {
                            code
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            //事件绑定函数
            changeContentClick() {
                //界面显示隐藏
                //城市列表添加按钮的点击
                $addCity.on("click", () => {
                    $cityList.css("display", "none");
                    $addBox.css("display", "block");
                })

                //添加表单取消按钮的点击
                $add_cancle.on("click", () => {
                    $cityList.css("display", "block");
                    $addBox.css("display", "none");
                    $("#add_city_code").val('');
                    $("#add_city_name").val('');
                })

                //修改表单取消按钮的点击
                $edit_cancle.on("click", () => {
                    $cityList.css("display", "block");
                    $editBox.css("display", "none");
                    $("#edit_city_code").val('');
                    $("#edit_city_name").val('');
                })
            },
            cityTbodyClick() {
                //城市列表事件委托
                $cityTbody.on("click", async (e) => {
                    if (e.target.tagName == "BUTTON") {
                        var curButton = e.target;
                        var curCode = curButton.parentElement.parentElement.children[0].innerHTML;
                        if (curButton.innerHTML == "修改") {
                            var curCityName = $(curButton).parent().prev().html();
                            $("#edit_city_code").val(curCode);
                            $("#edit_city_name").val(curCityName);
                            $cityList.css("display", "none");
                            $editBox.css("display", "block");
                        } else if (curButton.innerHTML == "删除") {
                            if(confirm("确认删除城市？")){
                                //根据code删除请求
                                let result = await fn.deleteCityData(curCode);
                                if (result == '删除城市成功') {
                                    location.reload();
                                }
                            }else{
                                return false;
                            }
                        }
                    }
                })
            },
            addCityClick() {
                //添加表单添加按钮的点击
                $add_city.on("click", async () => {
                    var addCode = $("#add_city_code").val();
                    var addCity = $("#add_city_name").val();
                    if (addCode == '') {
                        alert('请输入城市编码');
                        $("#add_city_code").val('');
                        return false;
                    }
                    if (addCode.length != 6) {
                        alert('请输入6位数城市编码');
                        return false;
                    }
                    if (!/^[\u4e00-\u9fa5]{2,8}$/.test(addCity) || addCity == '') {
                        alert('请输入城市2-8位中文名称');
                        $("#add_city_name").val('');
                        return false;
                    }
                    //发送添加请求
                    let result = await fn.addCityData(addCode, addCity);
                    if (result == '添加城市成功') {
                        location.reload();
                    }
                })
            },
            editCityClick() {
                //修改表单添加按钮的点击
                $edit_city.on("click", async () => {
                    var editCityName = $("#edit_city_name").val();
                    if (!/^[\u4e00-\u9fa5]{2,8}$/.test(editCityName) || editCityName == '') {
                        alert('请输入城市2-8位中文名称');
                        $("#edit_city_name").val('');
                        return false;
                    }
                    var editCityCode = $('#edit_city_code').val();
                    //发送请求
                    let result = await fn.updateCityData(editCityCode, editCityName);
                    if (result == '更新城市成功') {
                        location.reload();
                    }
                })
            },
            //结构生成函数
            createCityTbody(data) {
                let str = data.map((item) => {
                    return `<tr>
                                <th scope="col">${item.code}</th>
                                <th scope="col">${item.name}</th>
                                <th scope="col">
                                    <button type="button" class="btn btn-secondary btn-sm">修改</button>
                                    <button type="button" class="btn btn-dark btn-sm">删除</button>                                                       
                                </th>
                            </tr>`
                }).join('');
                $cityTbody.html(str);
            }
        }
        let data = await fn.getCityData();
        fn.createCityTbody(data);
        fn.changeContentClick();
        fn.cityTbodyClick();
        fn.addCityClick();
        fn.editCityClick()
    })();
})