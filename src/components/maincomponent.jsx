/*============================ MAIN COMPONET ==============================*/
var MainApp=React.createClass({
  
  getInitialState:function(){
    var randomNumber=this.randomIndex();
    var word=words[randomNumber];
    var question=null;
   //console.log(this.randomIndex());
    if(word.question!==undefined){
      question=word.question;
    }
    var self=this;
    $(window).on("wordmatched",function(event){
      console.log("I am fired");
      self.setState({
        score:(self.state.score+10),
         currentQuestion:self.state.currentAnswer
      });
      //self._changeWord();
      if(window.interval !== undefined){
       clearInterval(window.interval);
    }
      
      self._showMessage("success");
      setTimeout(function(){
       $("#message").hide(100);
        self._changeWord();
      },2000);
    });
    
    return {
      score:0,
      currentQuestionIndex:1,
      questionLimit:10,
      questionTimeDuration:10,
      currentQuestionAnswer:null,
      currentQuestion:question,
      currentAnswer:word.answer,
      wordIndex:randomNumber,
      message:"Good Job",
      hideReplay:true,
      stopTimer:false,
     
    };
  },
_showMessage:function(type){
  if(type=="success"){
    this.state.message="Good Job :)";
  }else{
    this.state.message="Ooops :( ";
  }
  $("#message").show(200);
},
  _changeWord:function(){
    if(window.interval !== undefined){
       clearInterval(window.interval);
    }
   
    if(this.state.currentQuestionIndex<this.state.questionLimit){
      var randNum=this.randomIndex();
         var word=words[randNum];
         var question=null;
        question=word.question;
        this.setState({
          currentQuestionIndex:this.state.currentQuestionIndex+1,
           currentQuestion:question,
           currentAnswer:word.answer,
           questionTimeDuration:this.state.questionTimeDuration,
        });
      questions.push(randNum);
    
    }else{
         $("#score-card").html(this.state.score);
       clearInterval(window.interval);
      $("#result-modal").modal({
        backdrop:'static',
        show:true
      });
      this.setState({hideReplay:false, stopTimer:true});
    }
  
  
  },
  randomIndex:function(){
    var rand = Math.floor(Math.random()*RANDOM_LIMIT) + 1;
   while(rand<=words.length-1 && questions.indexOf(rand)>-1){
    rand=Math.floor(Math.random()*RANDOM_LIMIT)+1;
    }
   
    return rand;

  },
  durationEnd:function(){
    //console.log("he he rahul");
    this._changeWord();
  },
  updateAnswer:function(answer){
   
    this.setState({
         currentAnswer:answer,
    });
    
    console.log(answer);
  },
  _playAgain:function(){
       clearInterval(window.interval);
      var randomNumber=this.randomIndex();
    var word=words[randomNumber];
    var question=null;
   //console.log(this.randomIndex());
    if(word.question!==undefined){
      question=word.question;
    }
    this.setState({
      score:0,
      currentQuestionIndex:1,
      questionLimit:10,
      questionTimeDuration:10,
      currentQuestionAnswer:null,
      currentQuestion:question,
      currentAnswer:word.answer,
      wordIndex:randomNumber,
      message:"Good Job",
       hideReplay:true,
       stopTimer:false,
    });
  },
  render:function(){
    return (
      <div>
        <ScoreMain score={this.state.score} 
          current={this.state.currentQuestionIndex} 
          questionlimit={this.state.questionLimit}
          duration={this.state.questionTimeDuration}
          ontimeup={this.durationEnd} stopTimer={this.state.stopTimer}
        />
        <KeyBoardAndResult answer={this.state.currentAnswer} setAnswer={this.updateAnswer} word={this.state.currentQuestion} />
        <Footer hideReplay={this.state.hideReplay} onRefresh={this._playAgain} message={this.state.message} skipquestion={this._changeWord} />
      </div>
    );
  }
});
