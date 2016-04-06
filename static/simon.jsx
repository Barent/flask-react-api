 var SimonComponent = React.createClass({
       
        render: function(){
            return (
                <div className="container-fluid">
                         <div className="jumbotron row">
                         <div className="well">
                            <ButtonController/>
                            </div>
                         <div className="well">
                            <ControlPannel/>
                         </div> 
                         </div>
                </div>
        )
    }
});

var ButtonController = React.createClass({
    
    render: function(){
        return(
        <div>
            <button className="blueButton"></button>
            <button className="redButton"></button>
            <br/>
            <button className="yellowButton"></button>
            <button className="greenButton"></button>
        </div>
        )
    }
});

var ControlPannel = React.createClass({
    
    render: function(){
        return(
        <div>
            <p>Here it Shall go!</p>
        </div>
        )
    }
});



React.render(<SimonComponent/>, document.getElementById('mount-simon'));

