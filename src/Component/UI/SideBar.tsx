import { PATH } from "constant"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { RootState } from "store"
import { styled } from 'styled-components'
export const SideBarMenu = () => {
  const { dataHome } = useSelector((state: RootState) => state.mangaHome)
  const navigate = useNavigate()
  return (
    <SideBar>
      <div className="nav-header xl:p-10 p-4 my-5">
        <i className="fa-solid fa-book xl:text-[2xl] text-[20px]"></i>
        <div className="title-nav-header" onClick={() => {
          navigate("/")
        }}>
          <h1 className="xl:text-[20px] text-[15px]">K</h1>
          <h1 className="xl:text-[25px] text-[20px]">H</h1>
          <h1 className="xl:text-[30px] text-[25px]">Ô</h1>
          <h1 className="xl:text-[35px] text-[30px]">I</h1>
          <h1>D</h1>
          <h1>E</h1>
          <h1>S</h1>
          <h1>I</h1>
          <h1>G</h1>
          <h1>N</h1>
        </div>
      </div>
      <div className="web-information ">
        <div className="content flex gap-2 items-center">
          <div className="icon-content">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="text-content">
            <p className="xl:text-[15px] text-[11px]">Cập nhật hôm nay :</p>
            <p className="font-bold">{dataHome?.params?.itemsUpdateInDay}</p>
          </div>
        </div>
        <div className="overplay-content"></div>
        <div className="content flex gap-2 items-center">
          <div className="icon-content">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <div className="text-content">
            <p className="xl:text-[15px] text-[11px]">Tổng số truyện :</p>
            <p className="font-bold">{dataHome?.params?.pagination.totalItems}</p>
          </div>
        </div>
      </div>
      <nav className="flex flex-col p-5 gap-10 max-h-[65%] overflow-auto custom__scroll">
        <NavLink to="/"><i className="fa-solid fa-house mr-2"></i><span>Trang chủ</span></NavLink>
        <NavLink to={PATH.newComic}><i className="fa-solid fa-book-open-reader mr-2"></i><span>Truyện mới</span></NavLink>
        <NavLink to={PATH.updating}><i className="fa-solid fa-angles-up mr-2"></i><span>Đang cập nhật</span></NavLink>
        <NavLink to={PATH.complete}><i className="fa-solid fa-hourglass-end mr-2"></i><span>Hoàn Thành</span></NavLink>
        <NavLink to={PATH.category}><i className="fa-solid fa-list mr-2"></i><span>Thể loại</span></NavLink>
        <NavLink to={PATH.contact}><i className="fa-regular fa-address-card mr-2"></i><span>Liên hệ</span></NavLink>
      </nav>
    </SideBar>
  )
}

const SideBar = styled.div`
  border-right: .5px solid gray;
  height: 100vh;
  color: white;
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
    gap: 20px;
  i{
    color: var(--color-icon);
   }
  .title-nav-header{
    cursor: pointer;
    display: flex;
    letter-spacing: 2px;
    filter: drop-shadow(10px 10px 3px coral );
    h1{
      font-weight: bold;
    }
    h1:nth-child(1) {
      
    };
    :hover {
      color: var(--color-icon);
      font-size: 20px;
    }
    h1:nth-child(2) {
  
    font-style: italic;
    };
    h1:nth-child(3) {
   
    };
    h1:nth-child(4) {
  
    };
   }
  }
  .web-information{
    width: 80%;
    margin: 0 auto;
    background-color: var(--background-content);
    background-image: var(--background-image-content) ;
    padding: 10px;
    border-radius: 20px;
    .icon-content {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
      i{
        font-weight: bold;
      }
    }
    p {
     
    }
  }
  .overplay-content{
    width: 100%;
    height: 1px;
    margin: 5px 0;
    background: rgb(128,208,199);
    background: radial-gradient(circle, rgba(128,208,199,1) 0%, rgba(0, 147,233,0) 100%);
  }
  .custom__scroll::-webkit-scrollbar {
    width: 5px;
  }
  .custom__scroll::-webkit-scrollbar-thumb {
    border-radius: 1.5rem;
    border-width: 4px;
    background-color: gray;
  }
`
