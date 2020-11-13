$(document).ready(function($) {
   var stop = 0;
    window.onscroll = function() {myFunction()};


    function myFunction() {

      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

        if (stop == 0){
        setTimeout(function(){
            what_var.classList.add("wheel-active");
            why_var.classList.remove("wheel-active");
            stop = 1;

        }, 100); 
        setTimeout(function(){
            who_var.classList.add("wheel-active");
            what_var.classList.remove("wheel-active");
            stop = 1;

        }, 200); 
        setTimeout(function(){
            how_var.classList.add("wheel-active");
            who_var.classList.remove("wheel-active");
            stop = 1;
        }, 300); 
        setTimeout(function(){
            when_var.classList.add("wheel-active");
            how_var.classList.remove("wheel-active");
            stop = 1;
        }, 400); 
        setTimeout(function(){
            where_var.classList.add("wheel-active");
            when_var.classList.remove("wheel-active");
            stop = 1;
        }, 500); 
        setTimeout(function(){
            why_var.classList.add("wheel-active");
            where_var.classList.remove("wheel-active");
            stop = 1;
        }, 600); 
    }
      } 
      else {
        console.log("wait");
      }
    }

    var why_var = document.getElementById('wheel-arc-why');
    var what_var = document.getElementById('wheel-arc-what');
    var who_var = document.getElementById('wheel-arc-who');
    var how_var = document.getElementById('wheel-arc-how');
    var when_var = document.getElementById('wheel-arc-when');
    var where_var = document.getElementById('wheel-arc-where');


    var why_var_text = document.getElementById('why-text');
    var what_var_text = document.getElementById('what-text');
    var who_var_text = document.getElementById('who-text');
    var how_var_text = document.getElementById('how-text');
    var when_var_text = document.getElementById('when-text');
    var where_var_text = document.getElementById('where-text');
    
    why_var.onclick = function() {
        console.log('Click just happened');
        what_var.classList.remove("wheel-active");
        why_var.classList.add("wheel-active");
        who_var.classList.remove("wheel-active");
        how_var.classList.remove("wheel-active");
        when_var.classList.remove("wheel-active");
        where_var.classList.remove("wheel-active");

        what_var_text.classList.add("hide");
        why_var_text.classList.remove("hide");
        who_var_text.classList.add("hide");
        how_var_text.classList.add("hide");
        when_var_text.classList.add("hide");
        where_var_text.classList.add("hide");
    };
    what_var.onclick = function() {
        console.log('Click just happened');
        what_var.classList.add("wheel-active");
        why_var.classList.remove("wheel-active");
        who_var.classList.remove("wheel-active");
        how_var.classList.remove("wheel-active");
        when_var.classList.remove("wheel-active");
        where_var.classList.remove("wheel-active");

        what_var_text.classList.remove("hide");
        why_var_text.classList.add("hide");
        who_var_text.classList.add("hide");
        how_var_text.classList.add("hide");
        when_var_text.classList.add("hide");
        where_var_text.classList.add("hide");

    };
    who_var.onclick = function() {
        what_var.classList.remove("wheel-active");
        why_var.classList.remove("wheel-active");
        who_var.classList.add("wheel-active");
        how_var.classList.remove("wheel-active");
        when_var.classList.remove("wheel-active");
        where_var.classList.remove("wheel-active");

        what_var_text.classList.add("hide");
        why_var_text.classList.add("hide");
        who_var_text.classList.remove("hide");
        how_var_text.classList.add("hide");
        when_var_text.classList.add("hide");
        where_var_text.classList.add("hide");
    };
    how_var.onclick = function() {
        what_var.classList.remove("wheel-active");
        why_var.classList.remove("wheel-active");
        who_var.classList.remove("wheel-active");
        how_var.classList.add("wheel-active");
        when_var.classList.remove("wheel-active");
        where_var.classList.remove("wheel-active");

        what_var_text.classList.add("hide");
        why_var_text.classList.add("hide");
        who_var_text.classList.add("hide");
        how_var_text.classList.remove("hide");
        when_var_text.classList.add("hide");
        where_var_text.classList.add("hide");
    };
    when_var.onclick = function() {
        what_var.classList.remove("wheel-active");
        why_var.classList.remove("wheel-active");
        who_var.classList.remove("wheel-active");
        how_var.classList.remove("wheel-active");
        when_var.classList.add("wheel-active");
        where_var.classList.remove("wheel-active");

        what_var_text.classList.add("hide");
        why_var_text.classList.add("hide");
        who_var_text.classList.add("hide");
        how_var_text.classList.add("hide");
        when_var_text.classList.remove("hide");
        where_var_text.classList.add("hide");
    };
    where_var.onclick = function() {
        what_var.classList.remove("wheel-active");
        why_var.classList.remove("wheel-active");
        who_var.classList.remove("wheel-active");
        how_var.classList.remove("wheel-active");
        when_var.classList.remove("wheel-active");
        where_var.classList.add("wheel-active");

        what_var_text.classList.add("hide");
        why_var_text.classList.add("hide");
        who_var_text.classList.add("hide");
        how_var_text.classList.add("hide");
        when_var_text.classList.add("hide");
        where_var_text.classList.remove("hide");
    };
    });
