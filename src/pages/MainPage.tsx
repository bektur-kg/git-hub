import React, {useEffect, useState} from 'react'
import {useLazyGetReposQuery, useSearchUsersQuery} from 'store/github/github.api'
import {useDebounce} from 'hooks/debounce'
import RepoCard from 'components/RepoCard'
import {Helmet} from 'react-helmet-async'


const MainPage = () => {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  const [showDropdown, setShowDropdown] = useState(false)
  const {data} = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })
  const [fetchRepos, {isLoading: areReposLoading, data: repos, isError: areReposError}] = useLazyGetReposQuery()

  useEffect(() => {
    setShowDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  const fetchReposHandler = (username: string) => {
    fetchRepos(username)
    setShowDropdown(false)
  }

  return (
    <>
      <Helmet>
        <title>GitHub Search</title>
        <meta
          name="description"
          content="Search repositories from GitHub Search."
        />
        <link rel="canonical" href="/"/>
      </Helmet>
      <div className="flex items-center container mx-auto pt-10 flex-col h-screen">
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="Search for GitHub username ..."
            className="w-full px-4 py-2 outline-0 border my-4 rounded"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {
            showDropdown && (
              <ul className="w-full absolute z-10 bg-white top-[56px] overflow-y-auto max-h-[300px] shadow-xl">
                {
                  data?.map(account => (
                    <li
                      onClick={() => fetchReposHandler(account.login)}
                      key={account.id}
                      className="border-b w-full px-5 py-3 cursor-pointer hover:text-white hover:font-semibold hover:transition-all hover:bg-blue-400"
                    >{account.login}</li>
                  ))
                }
              </ul>
            )
          }
        </div>

        {
          areReposLoading ? (
            <span>Loading ...</span>
          ) : areReposError ? (
            <span>Error !</span>
          ) : (
            <ul className="container mx-auto pt-4 w-2/3">
              {
                repos?.map(repo => (
                  <RepoCard
                    key={repo.id}
                    repository={repo}
                  />
                ))
              }
            </ul>
          )
        }
      </div>
    </>
  )
}

export default MainPage


