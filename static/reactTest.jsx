 var Input = React.createClass({
        updateLabel(event){
            this.setState({value: event.target.value});
        },
        displayLabel(){
            var currentNumber = parseFloat(this.state.value);
            var objectPass = {};
            objectPass.number = currentNumber;

            var that = this;
            $.getJSON('/testdata', function(data){
                console.log(data.number);
                var final = currentNumber + data.number;
                that.setState({outputLabel: final})  
            })
            
        },
        getInitialState(){
            return {
                value: '', 
                outputLabel: ''
            }
        },
        componentWillMount(){
            this.setState({value: this.state.value})
        },
        render(){
            return (
                <div className="container">
                    <div className="update-label jumbotron">
                        <Label 
                            value={this.state.value}
                            outputLabel={this.state.outputLabel}
                            updateLabel = {this.updateLabel}
                            displayLabel ={this.displayLabel}
                        />
                    </div>
                </div>
        )
    }
});

var Label = React.createClass({
    render: function(){
        return (
        <div class="my-label">
        <p>This program adds 5 to the number you enter.</p>
         <input type="text" placeholder="Enter number" onChange={this.props.updateLabel}/>
         <br/>
         <button className="btn btn-primary" onClick={this.props.displayLabel}>Submit</button>
        <h2>{this.props.outputLabel}</h2>
        </div>
        )
    }
});

React.render(<Input/>, document.getElementById('mount-point'));

