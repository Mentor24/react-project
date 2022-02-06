import styled from 'styled-components'

const S = {
  
Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #e3e0cc;
`,

Circle: styled.img`
    border-radius: 50%;
    width: 250px;
    height: 250px;
`,
    
Personals: styled.span`
    font-size: 31px;
    font-weight: bold;
    margin: 1% 0;
`,

Description: styled.span`
    font-size: 20px;
    font-weight: 300;
    text-align: justify;
    width: 30%;
`,
}

const AboutMeComponent = ({Image, Personals, Description}) => {
    return (
        <S.Wrapper>
            <S.Circle src= {Image}/>
            <S.Personals>{Personals}</S.Personals>
            <S.Description>{Description}</S.Description>
        </S.Wrapper>
    )
}

export default AboutMeComponent