<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="tabs is-centered">
                    <ul>
                        <li :class="{'is-active': !up}">
                            <a  @click="change">
                                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                                <span>Sign In</span>
                            </a>
                        </li>
                        <li :class="{'is-active': up}">
                            <a @click="change">
                                <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                                <span>Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <SignIn v-show="!up" />
                <SignUp v-show="up" />
            </div>
        </div>
    </div>
    
</template>

<script>


import SignIn from '@/components/account/signin'
import SignUp from '@/components/account/signup'

export default {
    data:()=>(
    {
        up:false
    }
    ),
    methods:{
        change(){
            this.up = !this.up;
        }
    },
    components:{
        SignIn,
        SignUp
    }
}
</script>
