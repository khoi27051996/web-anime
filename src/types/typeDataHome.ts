export type DataHome = {
    seoOnPage: {
        titleHead: string,
        descriptionHead: string,
        og_type: string,
        og_image: []
    },
    items: {
        id: string,
        name: string,
        slug: string,
        origin_name: [],
        status: string,
        thumb_url: string,
        sub_docquyen: boolean,
        category: {
            id: string,
            name: string,
            slug: string
        }[],
        updatedAt: string,
        chaptersLatest: {
            filename: string,
            chapter_name: string,
            chapter_title: string,
            chapter_api_data: string
        }[],
    }[],
    params: {
        type_slug: string,
        filterCategory: [],
        sortField: string,
        pagination: {
            totalItems: number,
            totalItemsPerPage: number,
            currentPage: number,
            pageRanges: number
        },
        itemsUpdateInDay: number
    },
    type_list: string,
    APP_DOMAIN_FRONTEND: string,
    APP_DOMAIN_CDN_IMAGE: string
}

export type DataHomePage = DataHome & {
    breadCrumb: [
        {
            name: string,
            slug: string,
            isCurrent: boolean,
            position: number
        },
        {
            name: string,
            isCurrent: boolean,
            position: number
        }
    ],
}

export type Comic = {
    seoOnPage: {
        og_type: string,
        titleHead: string,
        seoSchema: {
            "@context": string,
            "@type": string,
            name: string,
            url: string
            image: string
            director: string
        },
        descriptionHead: string,
        og_image: [],
        updated_time: number,
        og_url: string
    },
    breadCrumb: {
        name: string,
        slug: string,
        position: number,
    }[],
    params: {
        slug: string
    },
    item: {
        _id: string,
        name: string,
        slug: string,
        origin_name: [],
        content: string,
        status: string,
        thumb_url: string,
        sub_docquyen: boolean,
        author: [],
        category: {
            id: string,
            name: string,
            slug: string
        }[],
        chapters: [
            {
                server_name: string,
                server_data: {
                    filename: string,
                    chapter_name: string,
                    chapter_title: string,
                    chapter_api_data: string
                }[]
            }
        ],
        updatedAt: string,
    }
    APP_DOMAIN_CDN_IMAGE: string
}

export type Chapter = {
    domain_cdn: string,
    item: {
        _id: string,
        comic_name: string,
        chapter_name: string,
        chapter_title: string,
        chapter_path: string,
        chapter_image: {
            image_page: number,
            image_file: string
        }[]
    }
}

export type DataSearch = {
    seoOnPage: {
        og_type: string,
        titleHead: string,
        descriptionHead: string,
        og_image: [],
        og_url: string
    },
    breadCrumb: [
        {
            name: string,
            isCurrent: boolean,
            position: number
        }
    ],
    titlePage: string,
    items: {
        _id: string,
        name: string,
        slug: string,
        origin_name: [],
        status: string,
        thumb_url: string,
        sub_docquyen: boolean,
        author: [],
        category: {
            id: string,
            name: string,
            slug: string
        }[],
        updatedAt: string,
        score: number
    }[],
    params: {
        type_slug: string,
        keyword: string,
        filterCategory: [],
        sortField: string,
        sortType: string,
        pagination: {
            totalItems: number,
            totalItemsPerPage: number,
            currentPage: number,
            pageRanges: number
        }
    },
    type_list: string,
    APP_DOMAIN_FRONTEND: string,
    APP_DOMAIN_CDN_IMAGE: string
}