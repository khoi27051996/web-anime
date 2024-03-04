import { Paginate } from "Component"
import { PATH } from "constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { GetDataSearch, RootState, useAppDispatch } from "store"
import styled from "styled-components"
import { SearchComic } from "types"

import { ScrollTop, changeTypeTime, sleep } from "util/"


export const ComicSearch = () => {
    const { dataSearch } = useSelector((state: RootState) => state.mangaHome)

    const totalPage = Math.ceil(dataSearch?.params?.pagination?.totalItems / 24)
    const param = useParams();
    const id = parseInt(param.numberPage)
    const [page, setPage] = useState(id)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const url = dataSearch?.APP_DOMAIN_CDN_IMAGE
    const defaultPage: SearchComic = {
        keyword: param.nameComic,
        page: page || 1
    }

    const handlePageClick = (event: any) => {
        const path = generatePath(PATH.comicSearch, { nameComic: param.nameComic, numberPage: event.selected + 1 })
        setPage(event.selected + 1)
        ScrollTop()
        navigate(path)

    }
    useEffect(() => {
        dispatch(GetDataSearch(defaultPage))
    }, [dispatch, page])
    return (
        <ComicSearchPage>
            <div className="title-search">
                <h1 className="md:text-2xl text-[14px] text-center font-bold">Tìm thấy : {dataSearch?.params?.pagination?.totalItems} kết quả với từ khóa '{param?.nameComic}'</h1>
                {dataSearch?.items?.length > 0 ? <p className="my-3 text-center text-white md:text-[16px] text-[14px]">Trang : {id}</p> : null}
            </div>
            {dataSearch?.items?.length > 0 ? <div className="content-home">
                <ul>
                    {dataSearch?.items.map((item, index) => {
                        return <li key={index} className="flex items-center gap-4" onClick={async () => {
                            const path = generatePath(PATH.comic, { slug: item.slug });
                            await sleep(500)
                            navigate(path)
                        }}>
                            <img className="w-[50px] h-[80px]" src={url + "/uploads/" + dataSearch?.seoOnPage?.og_image[index]} alt="..." />
                            <div className="flex justify-between w-full">
                                <p className="md:text-[16px] text-[12px]">{item?.name}</p>
                                <p>{changeTypeTime(item.updatedAt)}</p>
                            </div>
                        </li>
                    })}

                </ul>
            </div> : <div className="title-hidden">
                <button onClick={() => {
                    navigate("/")
                }}>Trở lại</button>
            </div>}


            {dataSearch?.items?.length > 0 ? <Paginate forcePage={id ? id - 1 : null} handlePageClick={handlePageClick} totalPage={totalPage} /> : null}
        </ComicSearchPage>
    )
}

const ComicSearchPage = styled.div`
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

.title-hidden{
    text-align: center;
    margin-top: 20px;
    button {
        border: var(--border-comic);
        padding: var(--padding-button);
        color: var(--color-text-button);
        border-radius: var(--border-radius-header);

        &:hover {
            box-shadow: var(--hover-box-shadow-button);
            border-color: var(--background-border-hover);
        }
    }
}
`
