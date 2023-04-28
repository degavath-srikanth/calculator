var s="";
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var add=document.getElementById("add");
var sub=document.getElementById("sub");
var ans=document.getElementById("ans");
var nine=document.getElementById("nine");
var mul=document.getElementById("mul");
var div=document.getElementById("div");
var del=document.getElementById("del");
var reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    ans.value="0";
    s="";
})
one.addEventListener("click",()=>{
    s+='1';
    ans.value=s;
});
two.addEventListener("click",()=>{
    s+='2';
    ans.value=s;
});
three.addEventListener("click",()=>{
    s+='3';
    ans.value=s;
});
four.addEventListener("click",()=>{
    s+='4';
    ans.value=s;
});
five.addEventListener("click",()=>{
    s+='5';
    ans.value=s;
});
six.addEventListener("click",()=>{
    s+='6';
    ans.value=s;
});
seven.addEventListener("click",()=>{
    s+='7';
    ans.value=s;
});
eight.addEventListener("click",()=>{
   s+='8';
   ans.value=s;
});
nine.addEventListener("click",()=>{
    s+='9';
    ans.value=s;
});
add.addEventListener("click",()=>{
    s+='+';
    ans.value=s;
});
sub.addEventListener("click",()=>{
    s+='-';
    ans.value=s;
});
mul.addEventListener("click",()=>{
    s+='*';
    ans.value=s;
});
div.addEventListener("click",()=>{
    s+='/';
    ans.value=s;
});
del.addEventListener("click",()=>{
    if(s.length>0)
    {
    var temp=s.slice(0,-1);
    s=temp;
    }
    else
     s="0";
    ans.value=s;
    console.log(s);
});
equal.addEventListener("click",()=>{
   console.log(s);
   var inop='+';
   var op;
   if(s[0]=='-')
   inop='-';
   var i=0;
   if(inop=='-')
   i=1;
   var val1=0,val2=0;
   while(i<s.length && s[i]>='0' && s[i]<='9')
   {
      val1=val1*10+(s[i]-'0');
      i++;
   }
   op=s[i];
   i++;
   while(i<s.length)
   {
    val2=val2*10+(s[i]-'0');
    i++;
   }
   if(inop=='-')
   val1=-val1;
   if(op=='+')
   {
    ans.value=val1+val2;
   }
   else if(op=='-')
   {
    ans.value=val1-val2;
   }
   else if(op=='*')
   {
    ans.value=val1*val2;
   }
   else if(op=='/')
   {
    ans.value=val1/val2;
   }
   s="";
   val1=0,val2=0;
});

