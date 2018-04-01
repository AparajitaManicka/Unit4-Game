

        var wins = 0;
            var loses = 0;
        $(document).ready(function () {

            var savedNum1;
            var savedNum2;
            var savedNum3;
            var savedNum4;
          //  var wins = 0;
          //  var loses = 0;
            var totalscore = 0;
            var number;

           // $(window).on("load", function () {

                savedNum1 = Math.floor(Math.random() * 12) + 1; console.log(savedNum1);
                savedNum2 = Math.floor(Math.random() * 12) + 1; console.log(savedNum2);
                savedNum3 = Math.floor(Math.random() * 12) + 1; console.log(savedNum3);
                savedNum4 = Math.floor(Math.random() * 12) + 1; console.log(savedNum4);
                number = 19 + Math.floor(Math.random() * 120); console.log(number);
                document.getElementById("randomnumber").value = number;
                $("#crystal1guess").html(savedNum1);
                $("#crystal2guess").html(savedNum2);
                $("#crystal3guess").html(savedNum3);
                $("#crystal4guess").html(savedNum4);
                document.getElementById("scoredisplay").value = 0;
           // })


            $("#crystal1").on("click", function () {
                event.preventDefault();
                document.getElementById("crystal1guess").value = savedNum1;
                totalscore = savedNum1 + totalscore;
                document.getElementById("scoredisplay").value = totalscore;
                $.fn.statuscheck();

            })


            $("#crystal2").on("click", function () {
                event.preventDefault();
                document.getElementById("crystal2guess").value = savedNum2;
                totalscore = savedNum2 + totalscore;
                document.getElementById("scoredisplay").value = totalscore;
                $.fn.statuscheck();
            })


            $("#crystal3").on("click", function () {
                event.preventDefault();
                document.getElementById("crystal3guess").value = savedNum3;
                totalscore = savedNum3 + totalscore;
                document.getElementById("scoredisplay").value = totalscore;
                $.fn.statuscheck();
            })

            $("#crystal4").on("click", function () {
                event.preventDefault();
                document.getElementById("crystal4guess").value = savedNum4;
                totalscore = savedNum4 + totalscore;
                document.getElementById("scoredisplay").value = totalscore;
                $.fn.statuscheck();
            })

            $.fn.statuscheck = function () {
                console.log("totalscore:" + totalscore + ",number:" + number);
                if (totalscore == number) {
                    alert("YOU WIN!!!");
                    wins++;
                    document.getElementById("gamestatuswin").value = "Wins:" + wins;



                savedNum1 = Math.floor(Math.random() * 12) + 1; console.log(savedNum1);
                savedNum2 = Math.floor(Math.random() * 12) + 1; console.log(savedNum2);
                savedNum3 = Math.floor(Math.random() * 12) + 1; console.log(savedNum3);
                savedNum4 = Math.floor(Math.random() * 12) + 1; console.log(savedNum4);
                number = 19 + Math.floor(Math.random() * 120); console.log(number);
                document.getElementById("randomnumber").value = number;
                $("#crystal1guess").html(savedNum1);
                $("#crystal2guess").html(savedNum2);
                $("#crystal3guess").html(savedNum3);
                $("#crystal4guess").html(savedNum4);
                document.getElementById("scoredisplay").value = 0;
                totalscore = 0;


                    
                } 
                else if (totalscore > number) {
                    alert("YOU LOSE!!!");
                    loses++;
                    document.getElementById("gamestatuslose").value = "Loses:"+ loses;




                savedNum1 = Math.floor(Math.random() * 12) + 1; console.log(savedNum1);
                savedNum2 = Math.floor(Math.random() * 12) + 1; console.log(savedNum2);
                savedNum3 = Math.floor(Math.random() * 12) + 1; console.log(savedNum3);
                savedNum4 = Math.floor(Math.random() * 12) + 1; console.log(savedNum4);
                number = 19 + Math.floor(Math.random() * 120); console.log(number);
                document.getElementById("randomnumber").value = number;
                $("#crystal1guess").html(savedNum1);
                $("#crystal2guess").html(savedNum2);
                $("#crystal3guess").html(savedNum3);
                $("#crystal4guess").html(savedNum4);
                document.getElementById("scoredisplay").value = 0;
                totalscore = 0;



                    
                }
            }
                     $.fn.reset = function () {
                        savedNum1 = Math.floor(Math.random() * 12) + 1; console.log(savedNum1);
                savedNum2 = Math.floor(Math.random() * 12) + 1; console.log(savedNum2);
                savedNum3 = Math.floor(Math.random() * 12) + 1; console.log(savedNum3);
                savedNum4 = Math.floor(Math.random() * 12) + 1; console.log(savedNum4);
                number = 19 + Math.floor(Math.random() * 120); console.log(number);
                document.getElementById("randomnumber").value = number;
                $("#crystal1guess").html(savedNum1);
                $("#crystal2guess").html(savedNum2);
                $("#crystal3guess").html(savedNum3);
                $("#crystal4guess").html(savedNum4);
                document.getElementById("scoredisplay").value = 0;
                totalscore = 0;
                     }     


        });
    