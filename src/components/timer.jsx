


/*============================ TIMER COMPONET ==============================*/
var Timer=React.createClass({
  getInitialState:function(){
    return {
      currentSecond:this.props.seconds
    };
    
  },
    componentWillMount: function () {
  this.prepareComponentState(this.props);
},

componentWillReceiveProps: function (nextProps) {
  this.prepareComponentState(nextProps);
},
  prepareComponentState:function(props){
if(props.stop==false){
     window.interval=setInterval(this.tick,1000);
    this.setState({
    currentSecond:props.seconds
    });
}else{
  clearInterval(window.interval);
}
  
  },
  
  tick:function(){
    if(this.state.currentSecond>0){
         this.setState({
      currentSecond:this.state.currentSecond-1
    });
      
    }else{
      clearInterval(window.interval);
      this.props.counterend();
      //console.log("change word and score");
    }
 
  },

  render:function(){
    return (
        <div className="col-md-4 col-sm-4 col-xs-4 right-text">
          <h2>Time: {this.state.currentSecond}</h2>
  
        </div>
    );
  }
});