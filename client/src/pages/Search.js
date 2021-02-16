import React, {useState, Fragment} from 'react'
import BBCard from '../components/BBCard'
import Select from 'react-select'
import { useLazyQuery } from 'react-apollo'
import gql from 'graphql-tag';
import ExampleDate from '../components/DatePicker'
import 'react-day-picker/lib/style.css';


const SEARCH_BEANIES = gql`
query($search: String!) {
    getBeanies(search:$search) {
    id
    img
    title
    zodiac
    }
  }
`

/**
 * 
 * 
 * 
 * The useLazyQuery hook is perfect for executing queries in response to events other than component rendering
 * https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually
 */


 /// IF THERE ARE NONE DISPLAY DIFF TEXT

export default function Search () {
    //const [beanies, setBeanies]= useState(null);
    const [title, updateTitle] = useState("Enter Name");
    const [getBeanies, { called,loading,data}] = useLazyQuery(SEARCH_BEANIES,
        {variables: { "search": title}});
    const [bday, updateBday] = useState("Enter Date");

    

    if (called && loading) return <p>Loading</p>;


    if (!called){
    return (
      <Fragment>
        <h2>
          <span role="img" aria-label="Magnifying Glass">
            🔎
          </span>{" "}
          Search by Name{" "}
          <span role="img" aria-label="Magnifying Glass">
            🔍
          </span>
        </h2>
        <h4>Searching: `{title}`</h4>
        <p>To Query Alphabetically, just search the desired letter.</p>
        <form className="form-inline"
          onSubmit={(e) => {
            e.preventDefault();
            getBeanies();
          }}
        >
          <label htmlFor="title">
            Name
            <input
              id="title"
              value={title}
              placeholder="Name"
              onChange={(e) => updateTitle(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
        
        <hr></hr>
        <h2>Search by Birthday</h2>
          <ExampleDate />
          
      </Fragment>
    );
        }
    
        // <pre>{JSON.stringify(data,null,2)}</pre>
    return (
        <>
            <h1>Results For: {title}</h1>
            <p>Pagination coming soon.</p>
            
            <div className='cards'>
            {data.getBeanies.map((beanie) => (
                <BBCard beaniebaby={beanie} key={beanie.id}/>
            ))}
        </div>
        </>
    )
}



/**
 * 
        {fakedata.map((img) => (
            <BBCard beaniebaby={img} />
        ))}
 */