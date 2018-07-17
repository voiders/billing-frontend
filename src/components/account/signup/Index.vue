<template>

    <form @submit.prevent="sign_up">
        <div class="field">
            <div class="control has-icons-left has-icons-right">
                <input :class="['input',{'is-danger': errors.has('email')}]" type="text" placeholder="Email..." 
                    v-model="userName" v-validate="'required|email'" name="email" required >
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
            <p class="help is-error" v-show="errors.has('email')" v-text="errors.first('email')"></p>
        </div>
        <div class="field">
            <div class="control has-icons-left has-icons-right">
                <input :class="['input',{'is-danger': errors.has('password')}]" type="password" placeholder="Password..." 
                    v-model="userPassword" name="password" required 
                    v-validate="{required:tue, regex : /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/}">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
            <p class="help is-error" v-show="errors.has('password')" v-text="errors.first('password')"></p>
        </div>

        <button class="button is-fullwidth is-primary" type="submit" :disabled="errors.any()">
            Sign Up
        </button>

    </form>
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

