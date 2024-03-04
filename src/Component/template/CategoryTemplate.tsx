import { PATH } from "constant"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { RootState, getDataCategory, useAppDispatch } from "store"
import styled from "styled-components"

export const CategoryTemplate = () => {
  const { dataCategory } = useSelector((state: RootState) => state.mangaHome);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDataCategory())
  }, [dispatch])
  return (
    <CaetegoryPage>
      {dataCategory?.items?.map((item, index) => {
        return <button className="font-semibold" key={index} onClick={() => {
          const path = generatePath(PATH.comicByCategory, { nameCategory: item.slug, idName: 1 })
          navigate(path)
        }}>{item.name}</button>
      })}
    </CaetegoryPage>
  )
}

const CaetegoryPage = styled.div`
  padding: var(--padding-layout);
  button {
    border: var(--border-header);
    border-radius: var(--border-radius-header);
    padding: 5px 10px;
    color: white;
    margin-right: 20px;
    margin-top: 40px;
    &:hover {
      color: var(--color-icon);
      border-color: var(--color-icon);
      background-color: var(--background-border);
    }
  }
`