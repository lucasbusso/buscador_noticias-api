import { useContext } from 'react'
import NoticiasProvider from '../context/NoticiasProvider'

const useNoticias = () => {
    return useContext(NoticiasContext)
}

import default useNoticias;