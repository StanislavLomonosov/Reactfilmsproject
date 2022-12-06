import React from "react"
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

class Main extends React.Component{
   
   state ={
    movies: [],
   }
   componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=e56bf1cc&s=lord of the rings')
    .then(response => response.json()) //приходит response,далее преобразование в json
    .then(data => this.setState({movies: data.Search})) //а потом приходят данные,которые показал postman по запросу
   }
   searchMovies=(str,type= 'all')=>{
    fetch(`http://www.omdbapi.com/?apikey=e56bf1cc&s=${str}${type!== 'all'?`&type=${type}`:''}`) //обновится массив фильмов и отрисуются другие
    .then(response => response.json()) 
    .then(data => this.setState({movies: data.Search})) 
   }
   
   render(){   
    const {movies} = this.state;
            return <main className='container content'>
                <Search searchMovies={this.searchMovies}/>
                {
                    movies.length ? (
                    <Movies movies={this.state.movies}/>
                    ):<Preloader/> 
                }
                
            </main>
        } 
    }
    export{Main}
    
