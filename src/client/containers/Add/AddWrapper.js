import styled from 'styled-components';

const AddWrapper = styled.div`
  padding: 12px 20%;  
  h1{
    font-size: 1.6rem;
    color: yellow;
    text-shadow: 1px 1px 1px #333;
  }
  .ant-divider-inner-text{
    font-size: 1.6rem;
    color: yellow;    
  }
  .ant-form-explain{
    background: red;
    color: white !important;        
  }
  .ant-form-item-required{
    color: yellow !important;        
    text-shadow: 1px 1px 1px #333;
    font-size: 1.1rem;
    &:before{
      color: yellow !important;        
      text-shadow: 1px 1px 1px #333;       
    }
  }
`;

export default AddWrapper;
