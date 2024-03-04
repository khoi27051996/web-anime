import styled from "styled-components"


export const ContactTemplete = () => {
    return (
        <ContactPage>
            <div className="content">
                <div className="overplay overplay1"></div>
                <div className="overplay overplay2"></div>
                <div className="overplay overplay3"></div>
                <div className="overplay overplay4"></div>
                <div className="overplay5"></div>
                <h1>Xin chào mọi người ! Website được xây dựng từ API free : <a href="https://docs.otruyenapi.com">https://docs.otruyenapi.com</a> !!!</h1>
                <h1>Mọi ý kiến đóng góp xây dựng website xin được gửi về thông tin liên hệ : </h1>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100003828624936"><i className="fa-brands fa-facebook"></i>
                            <p>My Facebook</p>
                        </a>
                    </li>
                    <li><a href="mailto:nguyenkhoi27051996@gmail.com" target="_blank">
                        <i className="fa-regular fa-envelope"></i>
                        <p>My Email</p>
                    </a>
                    </li>
                    <li>
                        <a href="tel:0812553688">
                            <i className="fa-solid fa-phone-volume"></i>
                            <p>My Phone</p>
                        </a>
                    </li>
                </ul>
            </div>
        </ContactPage>
    )
}

const ContactPage = styled.div`
    padding: var(--padding-layout);
    .content {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 750px;
        margin: 0 auto;
        padding: 20px;
        box-shadow: inset 0 0 10px 0 black;
        position: relative;
        overflow: hidden;
        h1, a {
              color: var(--color-h1);
              margin: 10px 0;
              font-weight: bold;
        }
        li {
            margin: 50px 0;
            a {
                display: flex;
                gap: 50px;
            }
        }
        i {
            font-size: 2rem;
            
        }
        a:hover{
            color: white;
        }

        .overplay {
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            background-color: coral;
        }
        .overplay1 {
            position: absolute;
            top: 0;
            left: 0;
            animation: move1 1s infinite ease-in;
        }
        .overplay2 {
            position: absolute;
            bottom: 0;
            left: 0;
            animation: move2 1s infinite ease-in;
            animation-delay: 1s;
        }
        .overplay3 {
            position: absolute;
            bottom: 0;
            right: 0;
            animation: move3 1s infinite ease-in;
            animation-delay: 2s;
        }
        .overplay4 {
            position: absolute;
            top: 0;
            right: 0;
            animation: move4 1s infinite ease-in;
            animation-delay: 3s;
        }
        .overplay5 {
            width: 150px;
            height: 200px;
            background-image: url('/image/thank-you.png');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 0;
            right: 0;
            animation: appear 3s infinite ease-in;
        }
        @keyframes move1 {
            0%{
                opacity: 0;
                transform: translateY(0);
            }100%{
                opacity: 1;
                transform: translateY(400px);
                width: 20px;
                height: 20px;
            }
        }
        @keyframes move3 {
            0%{
                opacity: 0;
                transform: translateY(0);
            }100%{
                opacity: 1;
                transform: translateY(-400px);
                width: 20px;
                height: 20px;
            }
        }
        @keyframes move2 {
            0%{
                opacity: 0;
                transform: translateX(0);
            }100%{
                opacity: 1;
                transform: translateX(750px);
                width: 20px;
                height: 20px;
            }
        }
        @keyframes move4 {
            0%{
                opacity: 0;
                transform: translateX(0);
            }100%{
                opacity: 1;
                transform: translateX(-750px);
                width: 20px;
                height: 20px;
            }
        }

        @keyframes appear {
            0% {
                opacity: 0;
                transform: scale(0);
            }50% {
                opacity: 1;
                transform: scale(1);
            } 100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    }





    
`