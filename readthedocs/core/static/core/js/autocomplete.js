require=function n(i,c,f){function p(r,e){if(!c[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(a)return a(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var o=c[r]={exports:{}};i[r][0].call(o.exports,function(e){return p(i[r][1][e]||e)},o,o.exports,n,i,c,f)}return c[r].exports}for(var a="function"==typeof require&&require,e=0;e<f.length;e++)p(f[e]);return p}({"core/autocomplete":[function(e,r,t){var u=e("jquery");e("jquery-ui");r.exports=function(e,r){u(e).autocomplete({source:r,minLength:2,open:function(e,r){var t=u(".ui-autocomplete").css("top");u(".ui-autocomplete").css({width:"233px",top:t+10})}})}},{jquery:"jquery","jquery-ui":"jquery-ui"}]},{},[]);