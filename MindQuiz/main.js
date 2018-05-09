$(document).ready(function() {
    //儲存目前作答到第幾題
    var currentQuiz=null;
    
    $("#startButton").click(function(){
        if(currentQuiz==null)
        {
            //alert("還沒開始作答");
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append(
                "<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            $("#startButton").attr("value","Next"); 
        }
        else
        {
            //alert("看到鬼");
            $.each($(":radio"),function(i,val){
                if(val.checked)
                {
                    //alert(i);
                    //兵分兩路：通往最終結果/跳向下一題題目
                    if(isNaN(questions[currentQuiz].answers[i][1]))
                    {
                       //alert("顯示最終結果!");
                       var finalResult = questions[currentQuiz].answers[i][1];
                       $("#question").text(finalAnswers[finalResult][0]);
                       $("#options").empty();
                       $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                       currentQuiz=null;
                       $("#startButton").attr("value","重新開始");
                    }
                    else
                    {
                       //alert("顯示下一題!");
                       currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0;x<questions[currentQuiz].answers.length;x++)
                        {
                            $("#options").append(
                            "<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        } 
                      
                    }
                    
                    return false;
                    
                }
            });
            
        }
    });
    
});

