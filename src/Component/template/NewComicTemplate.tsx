
import { Paginate } from "Component"
import { PATH } from "constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { RootState, getDataPage, useAppDispatch } from "store"
import styled from "styled-components"
import { LoaiDanhSach } from "types"
import { ScrollTop, changeTypeTime, sleep } from "util/index"


export const NewComicTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { dataPage } = useSelector((state: RootState) => state.mangaHome)
  const url = dataPage?.APP_DOMAIN_CDN_IMAGE;
  const totalPage = Math.ceil(dataPage?.params?.pagination?.totalItems / 24)
  const param = useParams();
  const id = parseInt(param.idPageNew);
  const [page, setPage] = useState(id)
  const defaultPage: LoaiDanhSach = {
    page: page || 1,
    type: 'truyen-moi'
  }

  const handlePageClick = (event: any) => {
    const path = generatePath(PATH.newPage, { idPageNew: event.selected + 1 })
    setPage(event.selected + 1)
    ScrollTop();
    navigate(path)
  }

  useEffect(() => {
    dispatch(getDataPage(defaultPage))
  }, [dispatch, page])
  return (
    <NewPageComic>
      <div className="flex justify-center gap-3">
        {dataPage?.breadCrumb?.map((title, index) => {
          return <h1 className="text-center md:text-2xl font-bold" key={index}>{title.name}</h1>
        })}
      </div>
      <div className="content-home">
        <ul>
          {dataPage?.items.map((item, index) => {
            return <li key={index} className="flex items-center gap-4" onClick={async () => {
              const path = generatePath(PATH.comic, { slug: item.slug });
              await sleep(500)
              navigate(path)
            }}>
              <img className="w-[50px] h-[80px]" src={url + dataPage?.seoOnPage?.og_image[index]} alt="..." />
              <div className="flex justify-between w-full">
                <p className="md:text-[16px] text-[12px]">{item?.name}</p>
                <p className="md:p-0 p-2">{changeTypeTime(item.updatedAt)}</p>
              </div>
            </li>
          })}

        </ul>
      </div>

      <Paginate handlePageClick={handlePageClick} totalPage={totalPage} forcePage={id ? id - 1 : null} />
    </NewPageComic>
  )
}

const NewPageComic = styled.div`
  padding: var(--padding-layout);
  h1 {

color: var(--color-h1);
}
.content-home{
li {
  color: var(--title-comic);
  background-color: rgba(174, 177, 165, 0.05);
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  transition: all .5s;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
  &:hover{
    background-color: var(--background-border);
    box-shadow: -10px -10px 0 0 #0000006d;
  }
}
}
`
