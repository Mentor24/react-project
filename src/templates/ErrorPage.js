import styled from "styled-components";

const S = {
     Wrapper: styled.div`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-size: 60px;
     `,
};

const ErrorPage = () => {
     return <S.Wrapper>Error! Page not found</S.Wrapper>;
};

export default ErrorPage;
