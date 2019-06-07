$(() => {
    //订单列表
    var $orderList = $("#orderList");
    //订单列表的表体
    var $orderTbody = $("#orderTbody");
    //修改列表
    var $editBox = $("#editBox");
    //修改表单的添加按钮
    var $edit_order = $("#edit_order");
    //修改表单的取消按钮
    var $edit_cancle = $("#edit_cancle");

    (async () => {
        let fn = {
            //请求函数
            getOrderData() {
                //获取订单数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:8080/OuiSystem/getOrder.do',
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            updateOrderConfirm(id) {
                //更新订单确认值
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateOrderConfirm.do',
                        data: {
                            id,
                            confirm: '1'
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            updateOrderMsg(id, name, phone) {
                //更新收票人姓名手机信息
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/updateOrderMsg.do',
                        data: {
                            id,
                            name,
                            phone
                        },
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            deleteOrderData(id) {
                //删除分类数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/deleteOrder.do',
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
                //修改表单取消按钮的点击
                $edit_cancle.on("click", () => {
                    $orderList.css("display", "block");
                    $editBox.css("display", "none");
                    $("#edit_order_name").val('');
                    $("#edit_order_phone").val('');
                })
            },
            orderTbodyClick() {
                //订单列表事件委托
                $orderTbody.on("click", async (e) => {
                    if (e.target.tagName == "BUTTON") {
                        var curButton = e.target;
                        var curId = curButton.parentElement.parentElement.parentElement.children[0].innerHTML;
                        if (curButton.innerHTML == "修改") {
                            var $curLastCol = $(curButton).parent().parent();
                            //将当前行值传入
                            var curName = $curLastCol.prev().prev().prev().prev().html();
                            var curPhone = $curLastCol.prev().prev().prev().html();
                            $("#edit_order_id").val(curId);
                            $("#edit_order_name").val(curName);
                            $("#edit_order_phone").val(curPhone);
                            $orderList.css("display", "none");
                            $editBox.css("display", "block");
                        }
                        if (curButton.innerHTML == "删除") {
                            if (confirm('确认删除订单？')) {
                                //根据id发送请求
                                let result = await fn.deleteOrderData(curId);
                                if (result == '删除订单成功') {
                                    location.reload();
                                }
                            } else {
                                return false;
                            }
                        }
                        if (curButton.innerHTML == "确认") {
                            var result = confirm("确认订单信息后将不可更改，是否继续？");
                            if (result) {
                                var curBtnGroup = curButton.parentElement;
                                curBtnGroup.innerHTML = `<button type="button" class="btn btn-dark btn-sm">删除</button>`;
                                //发送请求变更状态值
                                fn.updateOrderConfirm(curId);
                            } else {
                                return false;
                            }
                        }
                    }
                })
            },
            editOrderClick() {
                //修改表单按钮的点击
                $edit_order.on("click", async () => {
                    var editName = $("#edit_order_name").val();
                    var editPhone = $("#edit_order_phone").val();
                    if (!/^[\u4e00-\u9fa5]{2,5}$/.test(editName) || editName == '') {
                        alert('收票人请输入2-5位中文字符');
                        $("#edit_order_name").val('');
                        return false;
                    }
                    if (!/^1[3-8]\d{9}$/.test(editPhone) || editPhone == '') {
                        alert('请输入正确手机格式');
                        $("#edit_order_phone").val('');
                        return false;
                    }
                    var editId = $("#edit_order_id").val();
                    //发送请求
                    let result = await fn.updateOrderMsg(editId, editName, editPhone);
                    if (result == '更新订单信息成功') {
                        location.reload();
                    }
                })
            },
            //结构生成函数
            createOrderTbody(data) {
                var str = '';
                for (let i = 0; i < data.length; i++) {
                    str += `<tr>
                                <th scope="col">${data[i].id}</th>
                                <th scope="col">${data[i].l_id}</th>`;
                    if (data[i].status == '2') {
                        str += `<th scope="col">未支付</th>`;
                    } else if (data[i].status == '3') {
                        str += `<th scope="col">已支付</th>`;
                    } else if (data[i].status == '1') {
                    	str += `<th scope="col">已取消</th>`;
                    }
                    str += `<th scope="col">${data[i].login_phone}</th>
                            <th scope="col">${data[i].price}</th>
                            <th scope="col">${data[i].name}</th>
                            <th scope="col">${data[i].phone}</th>`;
                    if (data[i].way == '0') {
                        str += `<th scope="col">二维码票</th>`;
                    } else if (data[i].way == '1') {
                        str += `<th scope="col">快递票</th>`;
                    } else {
                        str += `<th scope="col">自取票</th>`;
                    }
                    str += `<th scope="col">${data[i].address == '' ? '无' : data[i].address}</th>;
                            <th scope="col">
                                <div class="btn-group" role="group" aria-label="Basic example">`;
                    if (data[i].confirm == '0') {
                        str += `<button type="button" class="btn btn-dark btn-sm">确认</button>
                                <button type="button" class="btn btn-secondary btn-sm">修改</button>
                                <button type="button" class="btn btn-dark btn-sm">删除</button>`;
                    } else {
                        str += `<button type="button" class="btn btn-dark btn-sm">删除</button>`;
                    }
                    str += ` </div>                                                                                    
                        </th>
                    </tr>`
                }
                $orderTbody.html(str);
            }
        }
        let data = await fn.getOrderData();
        fn.createOrderTbody(data);
        fn.changeContentClick();
        fn.orderTbodyClick();
        fn.editOrderClick();
    })()
})