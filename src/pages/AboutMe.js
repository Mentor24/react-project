import AboutMeComponent from '../components/AboutMeComponent'
import MB from '../images/MB.png'
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
}

const AboutMe = () => {
    return (
       <S.Wrapper>
            <AboutMeComponent Image = {MB} Personals = 'Marcin Burdach' Description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.'/>
       </S.Wrapper>
    )
}

export default AboutMe