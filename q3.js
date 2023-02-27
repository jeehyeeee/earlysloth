// userInfo에 있는 ableSkill에 skill을 넣을 수 있는 함수인 setAbleSkill을 userInfo안에 만들어보세요

 const userInfo = {
 name:"sina",
 ableSkill:{},
 setAbleSkill: function(skill,score) {
    this.ableSkill[skill] = score;
},
   // getlearnProgramming: function() {
      //  return Object.keys(this.ableSkill).length
 //   }
 };

 userInfo.setAbleSkill("javascript","10점")
 userInfo.setAbleSkill("react","8점")

 console.log(userInfo.ableSkill);


// { javascript: '10점', "react":"8점"} => 이렇게 콘솔에 찍히면 됩니다.
// 힌트) ...(스프레드 연산자)를 사용하면 비교적 쉽게 해결할 수 있습니다.