<template>
  <div id="gzkUserPassword">
    修改密码
  </div>
</template>
<script>
  export default{
    data () {
      return {}
    },
    components: {},
    methods: {},
    mounted () {
        let users =[
          {name:'iwen',display:1},
          {name:'iwen1',display:1},
          {name:'iwe2n',display:1},
          {name:'iwen3',display:0},
          {name:'iwen4',display:1},
          {name:'iwen5',display:0},
          {name:'iwen5',display:1},
        ]
      console.log(_.filter(users, {'display': 0}));

      /* var array = [1,2,3];
      _.isArray(array) && array.forEach((val, index) => {
        console.log(val)
      })*/
      /*if (_.isArray(array)) {

       /!* _.pull(array, 2, 3);
        console.log(array);*!/
      }*/
      /* var obj = undefined
       let a =_.isPlainObject(obj) && obj.name*/
//      console.log(a)
     /*  if(_.isPlainObject(obj)){

       }*/

//      console.log(moment('2017/11/11 22:33:24').format('YYYY-MM-DD hh:mm:ss a'));
//      console.log(moment().add(7, 'days').format('YYYY-MM-DD hh:mm:ss a'));
    },
    watch: {}
  }

</script>
