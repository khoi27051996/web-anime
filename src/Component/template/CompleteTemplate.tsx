import { Paginate } from "Component"
import { PATH } from "constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { RootState, getDataComplete, useAppDispatch } from "store"
import styled from "styled-components"
import { LoaiDanhSach } from "types"
import { ScrollTop, changeTypeTime, sleep } from "util/"


export const CompleteTemplate = () => {
    const { dataComplete } = useSelector((state: RootState) => state.mangaHome)

    const url = dataComplete?.APP_DOMAIN_CDN_IMAGE;
    const totalPage = Math.ceil(dataComplete?.params?.pagination?.totalItems / 24)
    const param = useParams();
    const id = parseInt(param.idPageComplete)
    const [page, setPage] = useState(id)
    const defaultPage: LoaiDanhSach = {
        page: page || 1,
        type: 'hoan-thanh'
    }
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const handlePageClick = (event: any) => {
        const path = generatePath(PATH.completePage, { idPageComplete: event.selected + 1 })
        setPage(event.selected + 1);
        ScrollTop();
        navigate(path)
    }
    useEffect(() => {
        dispatch(getDataComplete(defaultPage))
    }, [dispatch, page])
    return (
        <CompletePage>
            <div className="flex justify-center gap-3">
                {dataComplete?.breadCrumb?.map((title, index) => {
                    return <h1 className="text-center md:text-2xl md:font-bold" key={index}>{title.name}</h1>
                })}
            </div>
            <div className="content-home">
                <ul>
                    {dataComplete?.items.map((item, index) => {
                        return <li key={index} className="flex items-center gap-4" onClick={async () => {
                            const path = generatePath(PATH.comic, { slug: item.slug });
                            await sleep(500),
                                navigate(path)
                        }}>
                            <img className="w-[50px] h-[80px]" src={url + dataComplete?.seoOnPage?.og_image[index]} alt="..." />
                            <div className="flex justify-between w-full">
                                <p className="md:text-[16px] text-[14px]">{item?.name}</p>
                                <p className="md:p-0 p-2">{changeTypeTime(item.updatedAt)}</p>
                            </div>
                        </li>
                    })}

                </ul>
            </div>

            <Paginate handlePageClick={handlePageClick} totalPage={totalPage} forcePage={id ? id - 1 : null} />
        </CompletePage>
    )
}
const CompletePage = styled.div`
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