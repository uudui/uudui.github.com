/*   Copyright (c) 2012,  Zhangyi.
 */
var Validation = {
  rules:{
    username:{
      regular:/^(|[A-Za-z0-9_]{0,20})$/,
      length: [6,20]
    },
    email:{
      regular: /^(([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,}))(, *(([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})))*$/,
      length:[5,100]
    }
  },
  whiteListed: function(keyCode) {
    var keyCodes = [0, 37, 38, 39, 40, 8, 9];
    return $.grep(keyCodes, function(element){
        return keyCode !== element;
    }).length === keyCodes.length - 1
  },
  events: {
    usernameKeyPress: function(event){
      if(Validation.whiteListed(event.keyCode)){
        return;
      }
      if(!Validation.rules.username.regular.test(this.value + String.fromCharCode(event.keyCode))){
        event.preventDefault();
      }
    },
    emailKeyPress: function(event){
      if(Validation.whiteListed(event.keyCode)){
        return;
      }
      if(!Validation.rules.regular.test(this.value + String.fromCharCode(event.keyCode))){
        $("#user-email").css("border-color", "#8B0000");
      }else{
        $("#user-email").css("border-color", "#666666");
      }
    }
  }
};

$(function(){
  $("#user-name").keypress(Validation.events.usernameKeyPress);
  $("#user-email").keypress(Validation.events.emailKeyPress);
});