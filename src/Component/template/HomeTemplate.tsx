import { Swiperr } from "Component"
import { PATH } from "constant"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { RootState, getDataByCategory, getDataCategory, getDataComplete, getDataHome, useAppDispatch } from "store"
import styled from "styled-components"
import { LoaiDanhSach, TheLoai } from "types"
export const HomeTemplate = () => {
  const { dataHome, dataComplete, dataCategory, dataByCategory } = useSelector((state: RootState) => state.mangaHome)

  const numberRan = Math.floor(Math.random() * 10)
  const slug = dataCategory?.items[numberRan].slug
  const name = dataCategory?.items[numberRan].name
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const defaultPage: LoaiDanhSach = {
    page: 1,
    type: 'hoan-thanh'
  }
  const defaultPageCategory: TheLoai = {
    page: 1,
    slug: slug || 'one-shot'
  }
  useEffect(() => {
    dispatch(getDataHome())
    dispatch(getDataComplete(defaultPage))
    dispatch(getDataCategory())
    dispatch(getDataByCategory(defaultPageCategory))
  }, [dispatch])
  return (
    <HomePage>
      <nav>
        <div className="title-navigation">
          <h1 className="md:text-[20px] text-[14px]">Truyện mới cập nhật : </h1>
          <button className="text-[14px] md:text-[1rem]" onClick={() => {
            navigate(PATH.newComic)
          }} >Xem thêm <i className="fa-solid fa-angle-right"></i> </button>
        </div>
        <Swiperr data={dataHome} />

        <div className="title-navigation">
          <h1 className="md:text-[20px] text-[14px]">Truyện đã hoàn thành : </h1>
          <button className="text-[14px] md:text-[1rem]" onClick={() => {
            navigate(PATH.complete)
          }} >Xem thêm <i className="fa-solid fa-angle-right"></i> </button>
        </div>
        <Swiperr data={dataComplete} />

        <div className="title-navigation">
          <h1 className="md:text-[20px] text-[12px]"> Truyện ngẫu nhiên : {name} </h1>
          <button className="text-[14px] md:text-[1rem]" onClick={() => {
            const path = generatePath(PATH.comicByCategory, { idName: 1, nameCategory: slug })
            navigate(path)
          }} >Xem thêm <i className="fa-solid fa-angle-right"></i> </button>
        </div>
        <Swiperr data={dataByCategory} />
      </nav>
    </HomePage>

  )

}

const HomePage = styled.div`
  padding: var(--padding-layout);
  h1 {
    color: var(--color-h1);
  }
  .title-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    h1{
      font-weight: bold;
      &::after{
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: coral;
      }
    }
    button {
      border: var(--border-header);
      color: var(--color-h1);
      padding: 8px 16px;
      border-radius: var(--border-radius-header);
      transition: all .5s;
      &:hover {
        background-color: var(--background-border);
        color: white;
      }
      i {
        animation: move 1.5s infinite ease-in-out;
      }
    }
  }

  @keyframes move {
    0%{
      transform: translateX(0);
      opacity: 1;
    } 100% {
      transform: translateX(10px);
      opacity: 0.2;
    }
  }
`
