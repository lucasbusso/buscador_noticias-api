import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    const [ categoria, setCategoria ] = useState('general')
    const [ noticias, setNoticias ] = useState([])

    useEffect( () =>    {
        const constularAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            
            setNoticias(data.articles)
        } 
        constularAPI()
    }, [categoria])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    return(
        <NoticiasContext.Provider
            value={{
                handleChangeCategoria,
                categoria
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )

}

export{
    NoticiasProvider
}

export default NoticiasContext