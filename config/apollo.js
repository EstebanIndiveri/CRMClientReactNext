import {ApolloClient,createHttpLink,InMemoryCache} from '@apollo/client';
import {setContext} from 'apollo-link-context'
import fetch from 'node-fetch';

const httpLink=createHttpLink({
    uri:'https://crmadmingraph.herokuapp.com/',
    fetch
});

const authLink=setContext((_,{headers})=>{
    //read storage
    const token=localStorage.getItem('token');
    //`Bearer ${token}`
return{
    headers:{
        ...headers,
        authorization:token?`${token}`:''
    }
}
});

const client=new ApolloClient({
    connectToDevTools:true,
    cache:new InMemoryCache(),
    link:authLink.concat(httpLink)
});
export default client;