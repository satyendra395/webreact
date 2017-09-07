import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { mapReducers } from 'redux-map-reducers';

class Home extends React.Component {

  constructor(props, context) {
      super(props, context);
      console.log('proop',props,context);
  }
state={
  data:[]
}
  componentDidMount(){
    fetch("http://192.168.1.47:7080/Cybersn/jobs")
 .then(response => response.json())
    .then(data => this.setState({ data
  }))
}

getJobDetail(params) {
  var id = params.id;
   alert('hi');
   fetch("http://192.168.1.47:7080/Cybersn/jobs/"+ id)
 .then(response => response.json())
    .then(data => this.setState({ data

   }))
 
}
    render() {
      const data = this.state.data;
      console.log('data',data);
        return (
            <div>
                <h1>job list Page</h1>             
                <table className="table">
                  {data.map((item, index) => {
                    return (
                      
                      <tr key={index}>
                       
                        <td>{item.jobName}</td>
                        <td>{item.jobreferNumber}</td>
                        <td>{item.name}</td>
                        <td><button   onClick={this.getJobDetail.bind(this, item)}>view </button></td>
                      </tr>
                    );
                  })}
                </table>

                
            </div>
        );
      
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      items: state.job
      
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      jobListing: items => dispatch(job.jobListing()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

