import { useState } from 'react'
// import {useQuery} from '@tanstack/react-query'
import {useInfiniteQuery} from "@tanstack/react-query"

export function App() {

  /**
   Paginação por parametro, passado a pagina a ser buscada
   import {useQuery} from '@tanstack/react-query'
   */

  // const [page, setPage] = useState(1)

  // const getPlanets = async (page) => {
  //   const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
  //   return response.json()
  // }

  // const {isLoading, isError, data, isFetching, isPreviousData, error} = useQuery(['planets', page], () => getPlanets(page),{
  //   keepPreviousData: true
  // })

  // console.log(data)

  // const nextPage = () => {
  //   setPage((old) => old + 1)
  // }

  // const backPage = () => {
  //   setPage((old) => Math.max(1, old - 1))
  // }

  // if(isLoading){
  //   return <h3>Carregando planetas....</h3>
  // }

  // if(isError){
  //   return <h3>Erro ao buscar dados.</h3>
  // }

  // return (
  //   <div>
  //     {
  //       data.results.map((resultado, index) => (
  //         <p key={index}>{resultado.name}</p>
  //       ))
  //     }
  //     <button onClick={backPage}>Antes</button>
  //     <button onClick={nextPage}>Proximo</button>

  //   </div>
  // )

  /**
   Aqui estamos usando o useInfiniteQuery para criar uma paginação infinita, como api nao possui o suporte foi adaptado com um botão
   para carregar de 10 em 10, é apenas um exemplo.
   */

  const getPlanets = async (_, page = 1) => {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    const data = await response.json()
    return data.results
  }


  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, error, isLoading} = useInfiniteQuery(['items'], getPlanets, {
    getNextPageParam: (lastPage) => {
      if (lastPage.length > 0) {
        return lastPage.length / 10 + 1; // Cada página da SWAPI contém 10 resultados
      }
      return undefined; // Indica que não há mais páginas para buscar
    }
  })

  console.log(data)

  if(isLoading){
    return <h3>Carregando planetas....</h3>
  }

  if(error){
    return <h3>Error: {error.message}</h3>
  }

  return (
    <div>
      {data.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {page.map((planet) => (
            <p key={planet.name}>{planet.name}</p>
          ))}
        </div>
      ))}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
        </button>
      )}
    </div>
  );
}
