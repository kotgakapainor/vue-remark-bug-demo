<template>
    <RenderHTML :html="getContent()"/>
</template>

<script>
export default {
    props: {
        content: String
    },
    methods:{
        getContent(){
                return `<div class="journal-content">${this.$props.content}</div>`
            }
    }
}
</script>

<style>
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
h2 {
    font-size: 2rem;
}
h3 {
    font-size: 1.5rem;
}
h4, h5, h6 {
    font-size: 1.15rem;
}
</style>
