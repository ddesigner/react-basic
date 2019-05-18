import React from 'react';
import {Link} from 'react-router-dom';

const SeriesItem = ({seriesItem}) => (
            
            <li >
            <Link to={`/series/${seriesItem.show.id}`}>
                {seriesItem.show.name}
            </Link>
            </li>
        )


const SeriesList = (props) =>{
    
        return( 
                <div>
                     {props.list.map(item => (
                        <SeriesItem seriesItem={item} key={item.show.id}  />
                     )
                    )}
                </div>
              )
}

export default SeriesList;