
/*================== KEYBOARD AND WORD DISPLAYING COMPOMENT  ==========*/

var KeyBoardAndResult=React.createClass({
 getInitialState:function(){
   return {
       word:this.props.word,
         new_word:this.props.word,
        total_space:this.totalSpace(this.props.word),
        total_replaced:0,
     answer:this.props.answer
      };
 
 },
  componentWillMount: function () {
  this.prepareComponentState(this.props);
   
},

componentWillReceiveProps: function (nextProps) {
 
  this.prepareComponentState(nextProps);
},
  prepareComponentState:function(props){
    this.setState({
       word:props.word,
        new_word:props.word,
        total_space:this.totalSpace(props.word),
        total_replaced:0,
      answer:props.answer
    });

  },
  
    totalSpace:function(name){
    var newArray=name.split("").filter(function(val){
                return val=='_';
        });
    return newArray.length;
  },
  
  wordChecking:function(character){
 
        if(this.state.total_space>0 && this.state.total_replaced<=this.state.total_space){
      var replacedWord=this.state.new_word.replace(/\_/,character);
    
      this.setState({new_word:replacedWord,total_replaced:(this.state.total_replaced+1)});
       
    if(replacedWord==this.props.answer){
  
       if(window.interval !== undefined){
           clearInterval(window.interval);
        }
     $(window).trigger("wordmatched");
    }
    }
    
  },

  render:function(){
    return (
       <section className="container-fluid main-area" >
        <div className="row">
      <div className="col-md-12">
        <div className="keyboard" id="keyboard">
      <div className="answer">
      <h1>{this.state.new_word}</h1>
      </div>
       <KeyBoard  onWordUpdate={this.wordChecking} />
        
        </div>
      </div>
    
      <div className="col-md-12">
      <div className="question">
     <h1 className="current-word" >{this.props.word}</h1>
      </div>
      </div>
    </div>
     </section>
    );
  }
});

