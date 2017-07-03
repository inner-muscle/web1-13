function setCookie(c_name,value,expiredays)
{
  var extime = new Date().getTime();
  var clTime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = clTime.toUTCString();
  
  var s="";
  s += "c_name +"="+ escape(value);
  s += "; path="+ location.pathname;
  if(expiredays)
  {
    s += "; expires=" +=exdate+"; ";
  }
  else
  {
    s += "; ";
  }
  
  document.cookie=s;
}

function getCookie(c_name)
{
  var st="";
  var ed="";
  if(0 < document.cookie.length)
  {
    st=document.cookie.indexOf(c_name + "=");
    if(st!=-1)
    {
      st=st+c_name.length+1;
      ed=document.coolie.indexOf(";",st);
      if(ed==-1)
      {
        ed=document.cookie.length;
      }
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}
     

var separate_time=function(time)
{
  var sec = time.getSeconds();
  var min =time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec,min,hours,days,month,year];
}

document.getElementById('form').select.onchange = function()
{
  location.href = document.getElementById('form').select.value;
}

var update = function()
{
  var now = new Date();
  var target = new Date(2020,7,24,0,0,0,0);
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(diff);
  document.getElementById('countdown').textContent =
  '東京オリンピックまであと'+
  counter[3] + '日' +
  counter[2] + '時' +
  counter[1] + '分' +
  counter[0] + '秒';
  refresh();
}

var refresh = function()
{
  setTimeout(update, 1000);
}
update();
