import styled from "styled-components";

export const Container = styled('div')`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction:column;
height: 100vh;
.content {
  width: 270px;
 border-radius: 1em;
 background-color: #202124;
  padding: 10px;
}
.result {
  color: white;
  text-align: right;
  background-color: gray;
  width: 240px;
  margin: 20px 0;

  padding-right: 10px;
}

button{
  width: 3rem;
  height: 3rem;
  font-size: 1.5em;
  border: none;
  border-radius: 2em;
  margin: 0.3em;
  cursor: pointer;

 &:hover{
 opacity: 0.8;
}
}
.orange{
  color: white;
 background-color : #F69609;
}

.gray{
 background-color: gray;
 color: white;
}

`