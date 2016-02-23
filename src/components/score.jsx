/*============================ SCORE MAIN COMPONET ==============================*/

var ScoreMain=React.createClass({
  _endCounter:function(){
    this.props.ontimeup();
    //console.log("I am triggered rahul");
  },
  render:function(){
    return (
      <section className="container-fluid heder-area" >
        <div className="row">
     
      <div className="col-md-12 ">
         <PointScore points={this.props.score}/>
         <WordIndex current={this.props.current} limit={this.props.questionlimit}/>
         <Timer seconds={this.props.duration} stop={this.props.stopTimer} counterend={this._endCounter}/>
      </div>
      
    </div>
       </section>
    );
  }
});

/*============================ POINT SCORE  COMPONET ==============================*/
var PointScore=React.createClass({
  render:function(){
    return (
        <div className="col-md-4 col-sm-4 col-xs-4">
          <h2>Score: {this.props.points}</h2>
        </div>
    );
  }
});

/*============================ WORD INDEX COMPONET ==============================*/
var WordIndex=React.createClass({
  render:function(){
    return (
        <div className="col-md-4 col-sm-4 col-xs-4 middle-text">
      <h2>{this.props.current}/{this.props.limit}</h2>
        </div>
    );
  }
});