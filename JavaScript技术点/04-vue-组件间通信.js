
// 总体上来说 vue 项目中的组件有 父子组件、非父子组件。


// 第一种 父组件通过 props 的方式向 子组件传递数据； 子组件 通过 $emit 向父组件通信

// 父组件
/*

<template>
  <div class='section'>
    <com-article :article="articleList"></com-article>
  </div>
</template >
<script>
  import comArticle from './test/article.vue';
  export default {
    name: 'HelloWorld',
    components: {comArticle},
    data(){
      return {
        articleList: ['红楼梦','西游记', '三国演义']
      }
    }
  }
</script>

*/

// 子组件 article.vue
/*
<template>
  <div>
    <span v-for="(item, index) in articles" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>
*/


// ======================================== 第二种通信方式 =====================================================
//

// 子组件向父组件传值 通过 $emit 绑定一个自定义事件，这个语句被执行时，就会将参数 arg 传递给父组件，父组件通过 v-on 监听并接受参数。

// 父组件中
/*
<template>
  <div class="section">
    <com-article :articles="articleList" @onEmitIndex="onEmitIndex"></com-article>
    <p>{{currentIndex}}</p>
  </div>
</template>

<script>
import comArticle from './test/article.vue'
export default {
  name: 'HelloWorld',
  components: { comArticle },
  data() {
    return {
      currentIndex: -1,
      articleList: ['红楼梦', '西游记', '三国演义']
    }
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx
    }
  }
}
</script>
*/

// 子组件
/*
<template>
  <div>
    <div v-for="(item, index) in articles" :key="index" @click="emitIndex(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {
    emitIndex(index) {
      this.$emit('onEmitIndex', index)
    }
  }
}
</script>
*/



