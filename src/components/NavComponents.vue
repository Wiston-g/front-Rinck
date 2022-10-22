<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container justify-content-evenly">
   
        <router-link 
            to="/" 
            class="nav-link" 
            :class="{ active : activePath.home }" 
            aria-current="page">
                <span class="material-icons-outlined materialsw">
                    inventory
                </span>
        </router-link>
        <router-link 
            to="/profile" 
            class="nav-link" 
            :class="{ active : activePath.register }">
                <span class="material-icons-outlined materialsw">
                    person
                </span>
        </router-link>
        <router-link 
            to="/about" 
            class="nav-link" 
            :class="{ active : activePath.about }">
                <span class="material-icons-outlined materialsw">
                    close
                </span>
        </router-link>
       
    </div>
  </nav>
  
  <router-view/>
</template>

<script>
export default {
    name:'NavComponents',
    computed: {
        activePath(){
            if (this.$route.path === '/') {
                return {
                home: true,
                register: false,
                about: false,
                }
            }else if(this.$route.path === '/profile'){
                return {
                home: false,
                register: true,
                about: false,
                }
            }else{
                return {
                home: false,
                register: false,
                about: true,
                }
            }
            
        }
    }
}
</script>
<style scoped>
.active .materialsw{
    background-color: rgba(115, 255, 0, 0.3);
}
</style>
