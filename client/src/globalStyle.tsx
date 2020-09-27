/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';

export const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        font-family: Open Sans, arial, Apple SD Gothic Neo, Noto Sans CJK KR, 본고딕, 나눔바른고딕, 나눔고딕, NanumGothic, 맑은고딕, Malgun Gothic, sans-serif;
        font-weight: 400;
        font-size: 16px;
      }
    `}
  />
);
