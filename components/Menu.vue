<template>
    <v-menu activator="parent">
        <v-list>
            <v-list-item @click="alert(item.title)" v-for="(item, index) in items" :key="index" :value="index" v-model="selected">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
  
  <script>
  export default {
    data: () => ({
      items: [
        { title: 'AMD' },
        { title: 'RU' },
        { title: 'EN' },
      ],
      selected: ""
    }),
  }
</script>