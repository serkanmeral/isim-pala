var vm = new window.Vue({
      el: '#app',
      components: {
        'menu-root': window.httpVueLoader('./menu-root.vue'),
        'menu-list': window.httpVueLoader('./menu-list.vue')
      },
      //render: h => h(app),
      data:{
        userName:'Serkan MERAL',
        activeComponent:'menu-root',
        serverTimeOffset     : '[unknown]',
        imgProps             : { width: 75, height: 75 },

        msgRecvd    : '[Nothing]',
        msgsReceived: 0,
        msgCtrl     : '[Nothing]',
        msgsControl : 0,

        msgSent     : '[Nothing]',
        msgsSent    : 0,
        msgCtrlSent : '[Nothing]',
        msgsCtrlSent: 0,
      },
      
      methods:{
          showComponent:function(cName){
              this.activeComponent=cName;
          },
          uiBuilderFunctions:function() {
              uibuilder.start();
              
              var vueApp = this;
              
              vueApp.feVersion = uibuilder.get('version');

              uibuilder.onChange('msg', function(newVal){
                  //console.log(newVal)
                  vueApp.msgRecvd = newVal.payload.testNum;
                  if(newVal) {
                      vueApp.$emit('onChangeMsg', newVal);
                  }
              });
              uibuilder.onChange('msgsReceived', function(newVal){
                  vueApp.userName = newVal;
              });
              uibuilder.onChange('ctrlMsg', function(newVal){
                  vueApp.msgCtrl = newVal;
              });
              uibuilder.onChange('msgsCtrl', function(newVal){
                  vueApp.msgsControl = newVal;
              });
              uibuilder.onChange('sentMsg', function(newVal){
                  vueApp.msgSent = newVal;
              });
              uibuilder.onChange('msgsSent', function(newVal){
                  vueApp.msgsSent = newVal;
              });
              uibuilder.onChange('sentCtrlMsg', function(newVal){
                  vueApp.msgCtrlSent = newVal;
              });
              uibuilder.onChange('msgsSentCtrl', function(newVal){
                  vueApp.msgsCtrlSent = newVal;
              });
              uibuilder.onChange('ioConnected', function(newVal){
                  vueApp.socketConnectedState = newVal;
              });
              uibuilder.onChange('serverTimeOffset', function(newVal){
                  vueApp.serverTimeOffset = newVal;
              });
              uibuilder.onChange('event', function(newVal){
                  vueApp.serverTimeOffset = newVal;
              });
          }
      },
      beforeCreate:function(){
         
      },
      created:function(){
         
      },
      mounted: function(){
          this.uiBuilderFunctions();
      }
});