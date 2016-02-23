
/*================ KEY BOARD's BUTTON ITEM COMPONENT GOES HERE============*/
var Rbutton=React.createClass({

  _clickedButton:function(event){
    this.props.onUserInput(
      event.target.getAttribute("data-character")
    );
  },
  render:function(){
    return (

 <button data-character={this.props.character} onClick={this._clickedButton} className="btn btn-default btn-sm">
      {this.props.character}
    
      </button>

    );
  }
})

/*================ KEY BOARD COMPONENT GOES HERE============*/

var KeyBoard=React.createClass({
  getInitialState:function(){
      return {
        word:this.props.word,

      };
  },

  updateWord:function(character){

     this.props.onWordUpdate(character);

  },
  render:function(){
    
    var self=this;
    var keys=keyList.map(function(val,index){
      return <Rbutton key={index} onUserInput={self.updateWord}  character={val}/>
    })
    return (
<div>
      {keys}
      </div>
     
     
    );
  }
});
