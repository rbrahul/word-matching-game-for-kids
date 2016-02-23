

/*============================ FOOTER COMPONET ==============================*/
var Footer=React.createClass({
  _skip:function(){
     clearInterval(window.interval);
    this.props.skipquestion();
  },
  _refresh:function(){
    
    this.props.onRefresh();
  },
  render:function(){
  
   var replayStyle;
    var showSkip;
    if(this.props.hideReplay==true){
       replayStyle={
      display:"none",
    };
      showSkip={
        display:"block"
      };
    }else{
    replayStyle={
      display:"block",
    };
      showSkip={
        display:"none"
      };
      
    }
    
    return (
        <section className="container-fluid footer-area" >
           <div className="row">
      <div className="col-md-12 footer-bar clearfix">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <h3 id="message">{this.props.message}</h3>
        </div>

         <div className="col-md-6 col-sm-6 col-xs-6">
        <button style={replayStyle}  className="btn btn-default btn-sm pull-right" onClick={this._refresh}>Play Again</button>
           <button style={showSkip} className="btn btn-default btn-sm pull-right" onClick={this._skip}>Skip</button>
        </div>
      </div> 
    </div>
       </section>
    );
  }
});