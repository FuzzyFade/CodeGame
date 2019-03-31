<template>
    <div>
        <div class="container">
            <div>
                <div>
                    <img class="avatar" src="../assets/logo.png" alt="avatar">
                </div>
                <p>
                    新用户
                </p>
            </div>
            <div>
                <input type="text" v-model="loginForm.username" placeholder="用户名"/>
            </div>
            <div>
                <input type="text" v-model="loginForm.password" placeholder="密码"/>
            </div>
        </div>
        <div>
            <div class="footer">
                <button class="btn1" @click="login">注册</button>
                <div class="next_step">
                    <p style="font-size: 12px">下一步</p>
                    <button class="btn2" @click="login">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import axios from 'axios'
    export default {
        name: "Login",
        data: () => ({
            loginForm: {
                username: '',
                password: ''
            },
            userToken: ''
        }),
        methods:{
            ...mapMutations(['changeLogin']),
            login () {
                let _this = this;
                let data = this.loginForm;
                if (this.loginForm.username === '' || this.loginForm.password === '') {
                    alert('账号或密码不能为空');
                } else {
                    axios
                        .post('/user/login',data)
                        .then(res => {
                            console.log(res.data);
                            _this.userToken = 'Bearer ' + res.data.data.body.token;
                            // 将用户token保存到vuex中
                            _this.changeLogin({Authorization: _this.userToken});
                            _this.$router.push('/home');
                            alert('登陆成功');
                        })
                        .catch(error => {
                            alert('账号或密码错误');
                            console.log(error);
                        });
                }
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-direction column
        justify-content center
        .avatar
            width 140px
            height 140px
    .footer
        width 100%
        height 80px
        position fixed
        bottom 0
        z-index -1
        .btn1
            position float
            float left
            margin-left 20px
            width 54px
            height 54px
            border-radius 27px
        .next_step
            position float
            float right
            margin-right 20px
            .btn2
                width 54px
                height 54px
                border-radius 27px
</style>
