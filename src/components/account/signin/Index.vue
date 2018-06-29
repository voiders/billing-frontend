<template>
    <div>
        <h1>SIGN IN</h1>
        <form @submit.prevent="sign_in">

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
    name: 'SignIn',
    data: () => {
        return{
            userName: null,
            userPassword: null
        }
    },
    methods: {
        sign_in() {
            
            this.$firebase.auth().signInWithEmailAndPassword(this.userName,this.userPassword)
            .then(()=>{
                 this.$router.push('/')
            })
            .catch(error=>{
                alert('error, on credentials');
                console.log(error);
            })
            
        }
    }    
}
</script>

