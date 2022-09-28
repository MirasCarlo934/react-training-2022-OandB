import {useEffect, useState} from "react";

function FetchSample() {

  const[userData, setUserData] = useState(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  // TODO put note (hooks) on the documentation notes
  /**
   * Some notes on Hooks
   * - You can only call them from functional components (not class components)
   * - You must write them as top level functions (as much as possible). Although it's
   *       not a hard rule to write them inside control structures (if, while, etc)
   *       React doesn't guarantee that they will be called (if not on top-level)
   *
   * */

  // TODO write the useEffect -> lifecycle mapping on the training doc

  useEffect(()=> {

    setLoading(true);
    const url = "https://api.github.com/users/tedhagos";

    // setTimeout(function() {
    //
    // }, 3000)

    // TODO put in the training doc -> HTTP states + CRUD and REST Mapping
    // TODO put an explanation of Promises on the training doc
    fetch(url)
      .then(res => res.json())
      .then(data =>  setUserData(data))
      .then(() => setLoading(false))
      .catch((error) => setError(error))

  },[])


  if(loading) return <h1>Loading</h1>
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if(!userData) return null

  return(
    <div>
      <h1>Fetch Sample</h1>
      <div>
        <GitHubUser
          name = {userData.name}
          id = {userData.id}
          bio = {userData.bio}
        />
        <pre>
            {JSON.stringify(userData, null, 2)}
          </pre>
      </div>
    </div>
  )
}

function GitHubUser({name, id, bio}) {
  return(
    <div className="card">
      <div className="card-body">
        <h3>{name}</h3>
        <h4>{id}</h4>
        <p>{bio}</p>
      </div>
    </div>
  )
}
export default FetchSample;