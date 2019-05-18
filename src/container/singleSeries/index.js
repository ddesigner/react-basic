import React, {Component} from 'react';
import Loader from '../../components/loader';
class SingleSeries extends Component {
   state={
     show:null
   }
   
   componentDidMount(){
       const id = this.props.match.params.id;

       fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
       .then(
         respons=>respons.json()
       )
       .then(
         json=>this.setState({
             show:json,
             
           })
         
       )
   }

   render(){
       const {show} =this.state;
       console.log(show);
       return(
           <div>
               {show === null &&
                <p><Loader /></p>
               }
               {show !== null &&
                 <div>
                <p>{show.name}</p>
                <p>
                    <img src={show.image.medium} alt={show.name} />
                </p>
                </div>
              }
           </div>
       )
   }

}

export default SingleSeries;