
import { Header, SideBarMenu } from "Component"
import { Outlet } from "react-router-dom"
import { styled } from 'styled-components'
export const MainLayout = () => {

    return (
        <LayoutMain>
            <div className="warrap">
                <div className="lg:fixed hidden   lg:block   lg:w-[20%] w-0">
                    <SideBarMenu />
                </div>
                <div className=" lg:w-[80%] w-full lg:absolute side-right">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </LayoutMain>
    )
}
const LayoutMain = styled.div`
   
    position: relative;
    height: 100vh;
    max-width: 100%;
    .side-right{
        top: 0;
        right: 0;
    }
    .phanTrang {
    display: flex;
    justify-content: center;
    gap: 10px;
    color: white;
    li {
      padding: 10px;
    }
    li.active {
      border: 1px solid coral;
    }
  }
 
`
