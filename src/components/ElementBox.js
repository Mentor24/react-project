import styled from 'styled-components'
import { AccessibilityNewIcon } from '@mui/icons-material';

const S = {
  
    ElementBox: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 300px;
      background-color: pink;
      margin: 2%;
      `,
    
    IconBox: styled.div`
        background-color: green;
        width: 50%;
        height 50%;
        `,
    
    Icon: styled(AccessibilityNewIcon)`
        && {
            width:100%;
            height: 100%;
            }
            `,

    Title: styled.span`
        font-size: 17px; 
        font-weight: 700;
        `,

    Description: styled.span`
        font-size: 13px; 
        font-weight: 700;
        `
  }

const ElementBox = ({ElementBoxTitle, ElementBoxDescription }) => {
    return (
        <S.ElementBox>
            <S.IconBox>
                <S.Icon/>
            </S.IconBox>
            <S.Title>{ElementBoxTitle}</S.Title>
            <S.Description>{ElementBoxDescription}</S.Description>
        </S.ElementBox>
    )
}

export default ElementBox