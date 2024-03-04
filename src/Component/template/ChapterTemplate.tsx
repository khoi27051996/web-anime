import styled from "styled-components"


export const ChapterTemplate = ({ chapter, onHide }) => {

    const doamin = chapter.domain_cdn;
    const chapter_path = chapter?.item?.chapter_path;
    const handleClose = () => {
        onHide()
    }
    return (
        <ChapterPage>
            <div className="title-chapter">
                <h1 className="text-center text-2xl mt-3">Chapter : {chapter?.item?.chapter_name}</h1>
                <button className="close-up" onClick={handleClose}>X</button>
            </div>
            <div className="content-chapter lg:w-[50%] w-[100%]">
                {chapter?.item.chapter_image.map((image: any, index: any) => {
                    return <div key={index}>
                        <img className="w-full object-cover" src={doamin + "/" + chapter_path + "/" + image.image_file} alt="..." />
                    </div>
                })}
                <div className="text-center w-full my-5">
                    <button className="close-bot" onClick={handleClose}>X</button>
                </div>
            </div>
        </ChapterPage>
    )
}
const ChapterPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #00000096;
    button {
            color: var(--color-h1);
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: white;
            border-radius: 50%;
        }
    .close-up{
        position: absolute;
        z-index: 9999;
        right: 10%;
    }
    .close-bot {
        
    }
    .content-chapter {
      
        margin: 20px auto;
    }
`