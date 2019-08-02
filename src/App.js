import React, { Component } from 'react';
import NavBar from './components/NavBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import yoda from './images/yoda.png';
import sith from './images/sith.png';
import loading from './images/loading.gif';
import jarjarbink from './images/jarjarbink.png';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './App.css';

class App extends Component {

  //yoda	
  // sith
  //mandalorian

  constructor(props) {

    super(props);

    this.state = {
    	text: '',
    	species:'',
    	translateText:'',
    	loading:false
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.onClick = this.onClick.bind(this);

  }

  handleChange(e) {
  	console.log(e.target.value);
    this.setState({text: e.target.value});
  }

 handleSubmit(e) {
 	if(this.state.species === ''){
	    e.preventDefault();
	    alert('Please select species first!')
 		console.log('fail');
 	}
 	else{

	    e.preventDefault();
	    this.setState({loading:true});
	    // console.log(this.state.text);
	    axios.get('https://api.funtranslations.com/translate/yoda.json', {
		    params: {
		      text: this.state.text
		    }
	  	})
	    .then((response) => {
	    	this.setState({loading:false});
	    	console.log(response.data.contents.translated);
	    	this.setState({translateText:response.data.contents.translated});
	    }) 
	    .catch((err) => {
	    	this.setState({loading:false});
	    	alert('Limit reach , 5 request per hour');
	    })
	}
  }

  onClick(e) {
  	this.setState({species:e});
  	this.setState({translateText:''});
  	this.setState({text:''});
  }

 renderTranslator() {
    if(this.state.translateText=== '' ) {
      return null;
    } else {
      return (
      <Paper style={{padding:'1%',textAlign:'center'}}>
        <Typography variant="h5" component="h3">
          {this.state.species} translate - 
        </Typography>
        <Typography component="p">
          {this.state.translateText}
        </Typography>
      </Paper>
      );
    }
  }

  displayLoading(){
  	 if(!this.state.loading) {
      return null;
    } else {
      return (
       <div className="popup">
        <img alt="loadingimage" src={loading}/>
        <h1 style={{color:'#FFDE06'}}>Please wait , may the force be with you while waiting</h1>
        </div>
      );
    }
  }



  render() {
    return (
      <div >
        {this.displayLoading()}
        <NavBar />
      	<h1 style={{'textAlign': 'center'}} >{this.state.species === '' ? 'Please select species type' : `You choose ${this.state.species}`}</h1>
        <div style={{flexGrow: 1 , 'marginTop': '15px', 'paddingLeft': '20px',  'paddingRight': '20px'}}>
       	<Grid container spacing={3}>
	        <Grid item xs={6} sm={4}>
	          <Paper style={{padding:'1%',textAlign:'center'}}>
	          <p>
	          <img alt="Yoda" src={yoda} />
	          </p>
			 <Button style={{margin:'1px'}} variant="contained" color="primary" onClick={this.onClick.bind(this, 'Yoda')}>
			        Yoda
			 </Button>
	          </Paper>
	        </Grid>
	        <Grid item xs={6} sm={4}>
	          <Paper style={{padding:'1%',textAlign:'center'}}>
	          <p>
	          <img alt="Sith" src={sith} />
	          </p>
	          <Button  variant="contained" color="primary" onClick={this.onClick.bind(this, 'Sith')}>
	          	Sith
			 </Button>
	          </Paper>
		    </Grid>
	        <Grid item xs={6} sm={4}>
	          <Paper style={{padding:'1%',textAlign:'center'}}>
	          <p>
	          <img alt="Jar Jar Bink" src={jarjarbink}/>
	          </p>
	          <Button  variant="contained" color="primary" onClick={this.onClick.bind(this, 'JarJarBink')}>
	          Jar Jar Bink
			  </Button>
	          </Paper>
	        </Grid>
      </Grid>
      </div>
		<form onSubmit={this.handleSubmit}>
		<div style={{textAlign:'center'}}>
		<TextField
	        label="Translate It!!"
	        style={{width: '50%'}}
	        margin="normal"
	        variant="outlined"
	        fullWidth
	        value={this.state.text} 
	        onChange={this.handleChange}
	     />
	     </div>
        </form>
        {this.renderTranslator()}
      </div>
    )
  }
}

export default App
