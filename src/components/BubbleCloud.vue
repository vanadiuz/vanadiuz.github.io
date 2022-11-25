<template>
  <graph-bubblecloud
            :width="500"
            :height="500"
            :padding-top="5"
            :padding-bottom="0"
            :padding-left="0"
            :padding-right="0"
            :values="values"

            :styles="styles"
            :render-interval="0">
            <!-- @click="onClickEvent"> -->
            
        <!-- <note :text="'Bubble Cloud (Created by luavis)'" :align="'left'"></note> -->
  </graph-bubblecloud>
</template>

<script>
export default {

  data() {
    return {
      values: [
          [ "/index.jsp", 100, 1000 ],
          [ "/home.jsp", 70, 2000 ],
          [ "/admin.jsp", 30, 3000 ],
          [ "/test/a.jsp", 5, 8000 ],
          [ "/test/b.jsp", 50, 5000 ],
          [ "/test/c.jsp", 1, 10000 ],
          [ "/test/d.jsp", 1, 1000 ]
      ],
      // colors: function(data) {
      //     if (data[2] <= 3000) {
      //       return '#497eff';
      //     } else if (data[2] <= 7000) {
      //       return '#ffdd26';
      //     } else {
      //       return '#ff4f55';
      //     }
      // },
      styles: {
          titleFontSize: 15,
          titleFontWeight: 'bold'
      },
    }
  },

};
</script>

<style scoped>
</style>