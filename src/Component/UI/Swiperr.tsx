import { PATH } from 'constant';
import { generatePath, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css';
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sleep } from 'util/';

type dataComic = {
    data?: any
}

export const Swiperr = ({ data }: dataComic) => {
    const url = data?.APP_DOMAIN_CDN_IMAGE;
    const navigate = useNavigate();
    return (
        <SwiperNav>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]} >
                {data?.items.map((item: any, index: any) => {
                    return <SwiperSlide key={index} className='h-[300px]' onClick={async () => {
                        const path = generatePath(PATH.comic, { slug: item.slug });
                        await sleep(500)
                        navigate(path);
                    }}>
                        <h1 className='text-left my-2 h-6 overflow-hidden'>{item?.name}</h1>
                        <img className='w-full h-full object-cover rounded-xl' src={url + data?.seoOnPage?.og_image[index]} alt="..." />
                    </SwiperSlide>
                })}
            </Swiper>
        </SwiperNav>
    )
}
const SwiperNav = styled.div`
    .swiper-slide{
        cursor: pointer;
        h1 {
            transition: all .5s;
        }
        &:hover h1{
            font-size: 20px;
            font-weight: bold;
        }
    }
`
