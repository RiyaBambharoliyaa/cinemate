import React, { useEffect } from 'react'
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

function Search({apiPath }) {
  const [searchPeram] = useSearchParams();
  const queryTerm = searchPeram.get("q")
   const {data : movies} = useFetch(apiPath,queryTerm)

  const pageTitle =  useTitle( `Search result for ${queryTerm}`);
  

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white '>{movies.length===0 ? `No result found fro "${queryTerm}"` : `Result for "${queryTerm}"`}</p>
      </section>
         <section className="max-w-7xl mx-auto py-7">
           <div className="flex justify-start flex-wrap ">
             {movies.map((movie)=>
                ( <Card key={movie.id} movie={movie}/>)
             )}
           </div>
         </section>
       </main>
  )
}

export default Search