$(() => {
    //分类列表
    var $categoryList = $("#categoryList");
    //分类列表的添加按钮
    var $addCategory = $("#addCategory");
    //分类列表的表体
    var $categoryTbody = $("#categoryTbody");
    //添加列表
    var $addBox = $("#addBox");
    //添加表单的添加按钮
    var $add_category = $("#add_category");
    //添加表单的取消按钮
    var $add_cancle = $("#add_cancle");
    //修改列表
    var $editBox = $("#editBox");
    //修改表单的修改按钮
    var $edit_category = $("#edit_category");
    //修改表单的取消按钮
    var $edit_cancle = $("#edit_cancle");

    (async () => {
        let fn = {
            //请求函数
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
            addCategoryData(name) {
                //添加分类数据
                return new Promise((resolve, reject) => {
                    //添加分类数据
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/addCategory.do',
                        data: {
                            name
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            updateCategoryName(id, name) {
                //更新分类名称数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateCategoryName.do',
                        data: {
                            id,
                            name
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            updateCategorySort(id, sort) {
                //更新分类排序数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateCategorySort.do',
                        data: {
                            id,
                            sort
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            deleteCategoryData(id) {
                //删除分类数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/deleteCategory.do',
                        data: {
                            id
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            //事件绑定函数
            changeContentClick() {
                //分类列表添加按钮的点击
                $addCategory.on("click", () => {
                    $categoryList.css("display", "none");
                    $addBox.css("display", "block");
                })

                //添加表单取消按钮的点击
                $add_cancle.on("click", () => {
                    $categoryList.css("display", "block");
                    $addBox.css("display", "none");
                    $("#add_category_name").val('');
                })

                //修改表单取消按钮的点击
                $edit_cancle.on("click", () => {
                    $categoryList.css("display", "block");
                    $editBox.css("display", "none");
                    $("#edit_category_id").val('');
                    $("#edit_category_name").val('');
                })
            },
            categoryTbodyClick() {
                //分类列表事件委托
                $categoryTbody.on("click", async (e) => {
                    if (e.target.tagName == "INPUT") {
                        var curInput = e.target;
                        var curId = curInput.parentElement.parentElement.children[0].innerHTML;
                        curInput.onblur = async () => {
                            var curSort = parseInt(curInput.value);
                            //发送请求更改sort
                            await fn.updateCategorySort(curId, curSort);
                            alert('排序数已更新');
                        }
                    }
                    if (e.target.tagName == "BUTTON") {
                        var curButton = e.target;
                        var curId = curButton.parentElement.parentElement.children[0].innerHTML;
                        if (curButton.innerHTML == "修改") {
                            var curCategoryName = $(curButton).parent().prev().prev().html();
                            $("#edit_category_id").val(curId);
                            $("#edit_category_name").val(curCategoryName);
                            $categoryList.css("display", "none");
                            $editBox.css("display", "block");
                        } else if (curButton.innerHTML == "删除") {
                                if(confirm('确认删除分类？')){
                                    //根据id发送请求
                                    let result = await fn.deleteCategoryData(curId);
                                    if (result == '删除分类成功') {
                                        location.reload();
                                }else{
                                    return false;
                                }
                            }
                        }
                    }
                })
            },
            addCategoryClick() {
                //添加表单添加按钮的点击
                $add_category.on("click", async () => {
                    var addName = $("#add_category_name").val();
                    if (!/^[\u4e00-\u9fa5]{2,8}$/.test(addName) || addName == '') {
                        alert('请输入中文');
                        $("#add_category_name").val('');
                        return false;
                    }
                    //发送请求
                    let result = await fn.addCategoryData(addName);
                    if (result == '添加分类成功') {
                        location.reload();
                    }
                })
            },
            editCategoryClick() {
                //修改表单修改按钮的点击
                $edit_category.on("click", async () => {
                    var eidtName = $("#edit_category_name").val();
                    if (!/^[\u4e00-\u9fa5]{2,8}$/.test(eidtName) || eidtName == '') {
                        alert('请输入中文');
                        $("#edit_category_name").val('');
                        return false;
                    }
                    var editId = $("#edit_category_id").val();
                    //发送请求
                    let result = await fn.updateCategoryName(editId, eidtName);
                    if (result == '更新分类名称成功') {
                        location.reload();
                    }
                })
            },
            //结构生成函数
            createCategoryTbody(data) {
                let str = data.map((item) => {
                    return `<tr>
                                <th scope="col">${item.id}</th>
                                <th scope="col">${item.name}</th>
                                <th scope="col">
                                    <input class="form-control" type="number" value="${item.sort}" oninput="if(value.length>2)value=value.slice(0,2)">
                                </th>
                                <th scope="col">
                                    <button type="button" class="btn btn-secondary btn-sm">修改</button>
                                    <button type="button" class="btn btn-dark btn-sm">删除</button>                                                       
                                </th>
                            </tr>`
                }).join('');
                $categoryTbody.html(str);
            }
        }
        let data = await fn.getCategoryData();
        fn.createCategoryTbody(data);
        fn.changeContentClick();
        fn.categoryTbodyClick();
        fn.addCategoryClick();
        fn.editCategoryClick();
    })();
})