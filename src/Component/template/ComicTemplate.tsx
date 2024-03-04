
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { RootState, getDataComic, useAppDispatch } from "store"
import styled from "styled-components"
import { SlugComic } from "types"
import { ChapterTemplate } from "."
import ReactPaginate from "react-paginate"
import { sleep } from "util/"
import { PATH } from "constant"


export const ComicTemplate = () => {
    const { comic } = useSelector((state: RootState) => state.mangaHome)
    const [chaptersss, setChaptersss] = useState(null)

    const valueNull = "Đang cập nhật !!!"
    let countChapter = 0;
    comic?.item?.chapters?.forEach(value => value.server_data?.forEach(item => {
        countChapter++;
        item.chapter_title
    }));
    const [chapter, setChapter] = useState(null);

    let countNumberInChapter = 0
    chapter?.item?.chapter_image.forEach((items) => {
        countNumberInChapter++;
        items.image_page
    })
    const handleHideChapter = () => {
        setChapter(null)
    }
    const [forcePage, setForcePage] = useState(0);
    const param = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handlePageClick = async (event: any) => {
        const url = chaptersss[event.selected].chapter_api_data;
        axios.get(url).then((res) => {
            setChapter(res.data.data)
        }).catch((err) => console.log(err))
        await sleep(800)
        window.scrollTo({
            top: 0,
        })
    }
    const defaultPage: SlugComic = {
        slug: param.slug
    }

    useEffect(() => {
        dispatch(getDataComic(defaultPage))
    }, [dispatch])
    return (
        <ComicPage>
            <section className="title-header md:flex">
                <div className="title-left md:w-[20%] w-full">
                    <img className="md:w-full rounded-xl" src={comic?.seoOnPage?.seoSchema?.image} alt="..." />
                </div>
                <div className="title-right md:w-[80%] w-full">
                    <h1 className="text-center md:text-2xl font-semibold">{comic?.item?.name}</h1>
                    <div className="infoComic">
                        <p className="md:text-[16px] text-[12px]">Trạng thái : <span>{comic?.item?.status}</span></p>
                        <p className="md:text-[16px] text-[12px]">Tác giả : {comic?.item?.author ? comic?.item?.author.map((au, index) => {
                            return <span key={index}>{au}</span>
                        }) : valueNull}</p>

                        <p className="grid md:grid-cols-12 items-center md:text-[16px] text-[12px]">Thể loại : {comic?.item?.category?.map((cat, index) => {
                            return <span onClick={() => {
                                const path = generatePath(PATH.comicByCategory, { nameCategory: cat.slug, idName: 1 });
                                navigate(path)
                            }} className="md:col-span-2 text-center my-2" key={index}>{cat?.name}</span>
                        })}</p>
                    </div>
                    <p className="content-comic h-[250px] overflow-y-scroll md:overflow-y-hidden">{comic?.item?.content.replace("<p>", "").replace("</p>", "")}</p>
                </div>
            </section>
            <section className="data-comic" >
                <h1 className="text-2xl font-semibold my-2">Tổng số chương : {countChapter}</h1>
                {comic?.item?.chapters?.map((chapters, index) => {
                    return <div key={index} className="grid grid-cols-12" onClick={() => {
                        setChaptersss(chapters?.server_data)
                        window.scrollTo({
                            top: 0
                        })
                    }}>{chapters?.server_data?.map((chapter, index) => {
                        return <div key={index} className="col-span-2 text-center">
                            <button className="button-data" onClick={() => {
                                setForcePage(parseInt(chapter.chapter_name))
                                axios.get(chapter.chapter_api_data).then((res) => {
                                    setChapter(res.data.data)
                                }).catch((err) => console.log(err))
                            }}>{chapter.chapter_name}</button>
                        </div>
                    })}</div>
                })}
            </section>
            <section className="pre-next md:w-[100px] w-[50px]" hidden={!chapter}>
                <div className="button-next-pre top-[40%] md:right-[35%]">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={2}
                        pageCount={countChapter}
                        className="paginate"
                        activeClassName="active"
                        previousLabel="< pre"
                        renderOnZeroPageCount={null}
                        forcePage={forcePage - 1}
                    />
                </div>
            </section>
            {chapter ? <ChapterTemplate chapter={chapter} onHide={handleHideChapter} /> : null}

        </ComicPage>
    )
}

const ComicPage = styled.div`
    padding: var(--padding-layout);
    transition: all .8s;
    h1 {
        color: var(--color-h1);
    }
    .title-header{
        width: 100%;
        .title-left{
           
        }
        .title-right {
            h1 {
                &::after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 1px;
                    background: radial-gradient(circle, coral 0%, rgba(191,198,203,0) 100%);
                    margin: 10px 0;
                }
            }
         
            padding: 15px;

            .infoComic{
                p{
                    color: white;
                    font-weight: bold;
                    margin: 25px 0;
                }
                span{
                    border: var(--border-comic);
                    background-color: var(--background-border);
                    color: var(--color-text-button);
                    border-radius: 20px;
                    padding: var(--padding-button);
                    margin-right: 10px;
                    cursor: pointer;
                    &:hover{
                        box-shadow: var(--hover-box-shadow-button);
                        border-color: var(--background-border-hover);
                    }
                }
            }
            .content-comic{
                color: white;
                padding: 10px;
                box-shadow: inset 0 0 10px 0px black;
                background-color: var(--background-border);
                border-radius: 20px;
            }
        }
    }
    .data-comic{

        .button-data {
            border: var(--border-comic);
            width: 50px;
            color: var(--color-text-button);
            padding: var(--padding-button);
            margin: 10px 0;
            border-radius: var(--border-radius-header);
            transition: all .5s;
            &:hover{
                border-color: var(--background-border-hover);
                box-shadow: var(--hover-box-shadow-button);
                color: white;
            }
        }
    }
    .pre-next{
        
        height: 100vh;
        background-color: var(--background-border);
        text-align: center;
        position: fixed;
        gap: 50px;
        top: 0%;
        right: 0%;
        z-index: 999;
        padding: 10px 0;
        .button-next-pre{
            position: absolute;
            
        }
        .paginate {
            color: white;
            li {
                margin-bottom: 10px;
            }
            .active{
                color: coral;
            }
        }
    }
`