$(() => {
    //会员列表的表体
    var $accountTbody = $("#accountTbody");

    (async()=>{
        let fn = {
            //请求函数
            getAccountData() {
                //获取网站用户数据
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:8080/OuiSystem/getWebAccount.do',
                        success(data) {
                            resolve(data);
                        }
                    })
                })
            },
            deleteUserInfo(id){
                //删除用户信息数据
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/deleteUserInfo.do',
                        data: {
                            id
                        },
                        success(data){
                            resolve(data);
                        }
                    })
                })
            },
            deleteUserLogin(login_phone){
                //删除用户登录数据
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/OuiSystem/deleteUserLogin.do',
                        data:{
                            login_phone
                        },
                        success(data){
                            resolve(data);
                        }
                    })
                })
            },
            //事件绑定函数
            accountTbodyClick() {
                //会员列表事件委托
                $accountTbody.on("click", async (e) => {
                    if (e.target.tagName == "BUTTON") {
                        if(confirm('确认删除该用户？')){
                            var curButton = e.target;
                            //获取id和手机号发送请求 先删除对应user_id的信息表信息 最后删除登录表
                            var curId = curButton.parentElement.parentElement.children[0].innerHTML;
                            var curPhone = curButton.parentElement.parentElement.children[1].innerHTML;
                            await fn.deleteUserInfo(curId);
                            await fn.deleteUserLogin(curPhone);
                            alert('删除成功');
                            location.reload();
                        }else{
                            return false;
                        }
                    }
                })
            },
            //结构生成函数
            createAccountTbody(data){
                let str = data.map((item)=>{
                    return `<tr>
                                <th scope="col">${item.id}</th>
                                <th scope="col">${item.login_phone}</th>
                                <th scope="col">${item.nickname == ''? '-' : item.nickname}</th>
                                <th scope="col">${item.gender == ''? '-' : item.gender}</th>
                                <th scope="col">
                                    <button type="button" class="btn btn-dark btn-sm">删除</button>                                                       
                                </th>
                            </tr>`
                }).join('');
                $accountTbody.html(str);
            }
        }
        let data = await fn.getAccountData();
        fn.createAccountTbody(data);
        fn.accountTbodyClick();
    })();
})