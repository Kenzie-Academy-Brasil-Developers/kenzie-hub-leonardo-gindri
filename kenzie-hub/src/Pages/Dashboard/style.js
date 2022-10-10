import styled from "styled-components";

export const DashbaordPage = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        header{
            width: 100% ;
            height: 72px;
            max-width: 1400px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 1rem;
            border-bottom: 1px solid var(--grey-3);
            button{
                height: 32px;
                background-color: var(--grey-3);
                padding: 0px 16px;
            }
        }

        main{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 1400px;
            padding: 0px 1rem;
            height: 118px;
            border-bottom: 1px solid var(--grey-3);
            width: 100%;

            div{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                h1{
                    color: var(--grey-0);
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 28px;
                }

                span{
                    color: var(--grey-1);
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 18px;
                }
            }
        }

`