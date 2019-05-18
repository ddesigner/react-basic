import React, {Component} from 'react';
import SeriesList from '../../components/series-list';
import Loader from '../../components/loader';
import Intro from '../../components/intro/intro';
class Series extends Component{

    state = {
        series:[],
        seriesName:'',
        fetchStatue:false
      }
    
      componentDidMount()
      {
        // fetch('http://api.tvmaze.com/search/shows?q=vikings')
        // .then(
        //   respons=>respons.json()
        // )
        // .then(
        //   json=>this.setState({
        //       series:json
        //     })
          
        // )
      }
    
      GetList = (e)=>{
        this.setState({
            seriesName:e.target.value,
            fetchStatue:true
        });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(
          respons=>respons.json()
        )
        .then(
          json=>this.setState({
              series:json,
              fetchStatue:false
            })
          
        )
      }

    render(){
        const {series, seriesName, fetchStatue} = this.state;
        return(
            <div>   
                 <Intro message="Welocme to fundametal React js" />
             
               <input
                value={seriesName}
                type="text"
                onChange={this.GetList}  />

              {!fetchStatue && series.length === 0 && seriesName.trim() ==='' &&
                <p>Please enter series name </p>
              }
              {
                  !fetchStatue && series.length === 0 && seriesName.trim() !=='' &&
                  <p>No TV series has been found of this name</p>
              }
              {
                  fetchStatue && 
                   <p><Loader /></p>
                  
              } 
              {  
                  !fetchStatue &&
                  <SeriesList list={this.state.series} ></SeriesList>
               }
                
            </div>
        )
    }
}

export default Series;