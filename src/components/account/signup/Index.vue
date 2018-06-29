<template>
    <div>
        <h1>SIGN UP</h1>
        <form @submit.prevent="sign_up">

            <label for="uname"><b>Username</b></label>
            <input type="email" placeholder="Enter Username" v-model="userName" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" v-model="userPassword" required>

            <button type="submit">sign in</button>

        </form>
    </div>
</template>

<script>

export default {
    name: 'SignUp',
    data: () => {
        return{
            userName: null,
            userPassword: null
        }
    },
    methods: {
        sign_up() {

            this.$firebase.auth().createUserWithEmailAndPassword(this.userName,this.userPassword)
            .then(()=>{
                this.$router.push('/')
            })
            .catch(error=>{
                alert('error');
                console.log(error);
            });
        }
    }
}
</script>

