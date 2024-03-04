import { PATH } from 'constant'
import { useState } from 'react'
import { NavLink, generatePath, useNavigate } from 'react-router-dom'
import { GetDataSearch, useAppDispatch } from 'store'
import { styled } from 'styled-components'
import { SearchComic } from 'types'


export const Header = () => {
    const [isBarButotn, setIsBarButotn] = useState(false)
    const handleNav = () => {
        setIsBarButotn(!isBarButotn)
    }
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState("");
    const handleComicSearch = async () => {

        const path = generatePath(PATH.comicSearch, { nameComic: inputValue, numberPage: 1 });
        navigate(path)
        setInputValue("")
    }
    return (
        <HeaderNav>
            <div className="inputSearch">

                <input type="text" placeholder='Tìm kiếm truyện' value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }} onKeyDown={(event) => {
                    if (event.keyCode == 13) {
                        const pageSearch: SearchComic = {
                            keyword: inputValue,
                            page: 1
                        }
                        dispatch(GetDataSearch(pageSearch))
                        handleComicSearch()
                    }
                }} />
                <button onClick={() => {
                    const pageSearch: SearchComic = {
                        keyword: inputValue,
                        page: 1
                    }
                    dispatch(GetDataSearch(pageSearch))
                    handleComicSearch()
                }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="commiunity flex items-center">
                <a href="#" className='lg:block hidden'>
                    <i className="fa-brands fa-facebook"></i>
                    <span className='ml-2'>Cộng Đồng</span>
                </a>
                <button className='lg:hidden block' onClick={handleNav}>
                    {
                        !isBarButotn ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-barcode"></i>
                    }
                </button>
            </div>

            {
                isBarButotn ? <div className="bar lg:hidden text-[13px]">

                    <div className="nav-header my-10">
                        <i className="fa-solid fa-book text-[20px]"></i>
                        <div className="title-nav-header" onClick={() => {
                            handleNav();
                            navigate("/")
                        }}>
                            <h1>K</h1>
                            <h1>H</h1>
                            <h1>Ô</h1>
                            <h1>I</h1>
                            <h1>D</h1>
                            <h1>E</h1>
                            <h1>S</h1>
                            <h1>I</h1>
                            <h1>G</h1>
                            <h1>N</h1>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-10 mt-10">
                        <NavLink onClick={handleNav} to="/"><i className="fa-solid fa-house mr-2"></i><span>Trang chủ</span></NavLink>
                        <NavLink onClick={handleNav} to={PATH.newComic}><i className="fa-solid fa-book-open-reader mr-2"></i><span>Truyện mới</span></NavLink>
                        <NavLink onClick={handleNav} to={PATH.updating}><i className="fa-solid fa-angles-up mr-2"></i><span>Đang cập nhật</span></NavLink>
                        <NavLink onClick={handleNav} to={PATH.complete}><i className="fa-solid fa-hourglass-end mr-2"></i><span>Hoàn Thành</span></NavLink>
                        <NavLink onClick={handleNav} to={PATH.category}><i className="fa-solid fa-list mr-2"></i><span>Thể loại</span></NavLink>
                        <NavLink onClick={handleNav} to={PATH.contact}><i className="fa-regular fa-address-card mr-2"></i><span>Liên hệ</span></NavLink>
                    </nav>



                </div> : null
            }



        </HeaderNav>
    )
}

const HeaderNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    .inputSearch {
        position: relative;
        border: var(--border-header);
        border-radius: var(--border-radius-header);
        width: 60%;
        input{
            padding: 10px 0px 10px 30px; 
            width: 100%;
            outline: none;
            background-color: var(--background-layout);
            color: white;
            &:focus {
                outline: 1px solid coral;
                border-radius: var(--border-radius-header);
            }
        }
        button{
            position: absolute;
            top: 25%;
            right: 10px;
            color: gray;
            animation: blink 2s infinite ease;
            transition: all .5s;
        }
        
    }
    .commiunity {
        border: var(--border-header);
        border-radius: var(--border-radius-header);
        padding: 10px;
        color: white;
        a{
            transition: all .5s;
            &:hover{
                color: var(--color-icon);
            }
        }
    }
    .bar {
        position: fixed;
        top: 0;
        left: 0;
        background-color: #4d4343eb;
        height: 100vh;
        overflow-y: scroll;
        z-index: 50;
        color: white;
        padding: 10px;
        a{
        transition: all .3s;
        padding: 5px 15px;
         border-radius: 10px;
             border: none;
    &:hover {
      background-color: var(--background-border);
      color: var(--color-icon);
      border-right: 2px solid coral;
     }
   } 
  .active {
    background-color: var(--background-border);
    border-right: 2px solid coral;
    i {
      color: var(--color-icon);
    } 
  } 

  .nav-header{
    display: flex;
    align-items: center;
    gap: 10px;
  i{
    color: var(--color-icon);
   }
  .title-nav-header{
    cursor: pointer;
    display: flex;
    filter: drop-shadow(10px 10px 3px coral );
    h1{
      font-weight: bold;
    }
    h1:nth-child(1) {
      font-size: 15px;
    };
    :hover {
      color: var(--color-icon);
      font-size: 20px;
    }
    h1:nth-child(2) {
    font-size: 20px;
    font-style: italic;
    };
    h1:nth-child(3) {
    font-size: 25px;
    };
    h1:nth-child(4) {
    font-size: 30px;
    };
   }
  }
}

@keyframes blink {
    0% {
        color: gray;
        transform: translateX(0);
        font-size: 16px;
    } 100%{
        color: white;
        transform: translateX(-10px);
        font-size: 20px;
    }
}
`

