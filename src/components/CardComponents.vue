<template>
    <div class="card bg-dark " >
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img v-if="picture" :src="picture" alt="api-rick">
                </div>
                <div class="col">
                    <h3 v-if="title" class="card-title">{{ title }}</h3>
                    <p v-if="parrafo" class="card-text">{{ parrafo }}</p>
                </div>
            </div>
                        
            <slot></slot>
            
            <div class="d-grid gap-2">
                <button
                       
                    v-for="btn in btns" 
                    :key="btn.txt" 
                    type="submit" 
                    class="btn" 
                    :class="btn.class">
                        {{ btn.txt }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'CardComponents',
    props:['title', 'parrafo', 'btns', 'picture'],
}
</script>

<style scoped>
img{
    width: 100px;
    height: 100px;
}
</style>




