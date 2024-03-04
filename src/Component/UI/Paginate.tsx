import ReactPaginate from "react-paginate"
import styled from "styled-components"

type PaginatePageNew = {
    totalPage: number,
    handlePageClick: any,
    forcePage: any
}

export const Paginate = ({ totalPage, handlePageClick, forcePage }: PaginatePageNew) => {
    return (
        <PaginatePage>
            <div className="pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={2}
                    pageCount={totalPage}
                    className="phanTrang"
                    activeClassName="active"
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    forcePage={forcePage}
                />
            </div>

        </PaginatePage>
    )
}

const PaginatePage = styled.div`
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

  @media screen and (max-width: 768px){
    .phanTrang {
       a {
        font-size: 10px;
       }
       li {
        padding: 8px;
       }
    }
  }
`