import { Paginate } from "Component"
import { PATH } from "constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { RootState, getDataUpdate, useAppDispatch } from "store"
import styled from "styled-components"
import { LoaiDanhSach } from "types"
import { ScrollTop, changeTypeTime, sleep } from "util/"

export const UpdatingTemplate = () => {
  const { dataUpdate } = useSelector((state: RootState) => state.mangaHome)
  const totalPage = Math.ceil(dataUpdate?.params?.pagination?.totalItems / 24)
  const url = dataUpdate?.APP_DOMAIN_CDN_IMAGE
  const param = useParams();
  const id = parseInt(param.idPageUdate)
  const navigate = useNavigate();
  const [page, setPage] = useState(1)
  const defaultPage: LoaiDanhSach = {
    page: page || 1,
    type: 'dang-phat-hanh'
  }
  const dispatch = useAppDispatch()
  const handlePageClick = (event: any) => {
    const path = generatePath(PATH.updatingPage, { idPageUdate: event.selected + 1 });
    setPage(event.selected + 1)
    ScrollTop();
    navigate(path)
  }
  useEffect(() => {
    dispatch(getDataUpdate(defaultPage))
  }, [dispatch, page])
  return (
    <UpdatePage>
      <div className="title-updatePage flex justify-center gap-3">
        {dataUpdate?.breadCrumb?.map((title, index) => {
          return <h1 className="md:text-2xl md:font-bold" key={index}> {title.name}</h1>
        })}
      </div>
      <div className="content-home">
        <ul>
          {dataUpdate?.items.map((item, index) => {
            return <li key={index} className="flex items-center gap-4" onClick={async () => {
              const path = generatePath(PATH.comic, { slug: item.slug });
              await sleep(500)
              navigate(path);
            }}>
              <img className="w-[50px] h-[80px]" src={url + dataUpdate?.seoOnPage?.og_image[index]} alt="..." />
              <div className="flex justify-between w-full">
                <p className="md:text-[16px] text-[14px]">{item?.name}</p>
                <p className="md:p-0 p-2">{changeTypeTime(item.updatedAt)}</p>
              </div>
            </li>
          })}

        </ul>
      </div>
      <Paginate handlePageClick={handlePageClick} totalPage={totalPage} forcePage={id ? id - 1 : null} />
    </UpdatePage>
  )
}

const UpdatePage = styled.div`
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
