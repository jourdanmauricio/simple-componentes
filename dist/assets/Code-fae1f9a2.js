import{j as e,u as s,r as i,a}from"./index-81810e2e.js";const l=({code:r,setCode:t})=>(t(`
  ############
  #   HTML   #
  ############
  import styles from './Spinner.module.css';
  <div className={styles.spinner}></div>;
  
  ###########
  #   CSS   #
  ###########
  .spinner {
    width: 5vw;
    height: 5vw;
    margin-left: auto;
    margin-right: auto;
    border: 0.5vw solid rgba(0, 0, 0, 0.1);
    border-top-color: #09f;
    border-radius: 50%;
    animation: spinner 1s ease-out infinite;
    /* animation: spinner 1s linear infinite; */
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`),e("div",{children:e("pre",{children:r})})),c=()=>{const{component:r}=s(),[t,o]=i.useState(null),n=()=>{console.log("..."),navigator.clipboard.writeText(t)};return e("div",{children:a("div",{className:"relative w-full py-2 mt-4 border border-slate-200",children:[r==="modal-html"&&e(ModalHtml,{}),r==="spinner"&&e(l,{code:t,setCode:o}),e("button",{onClick:n,className:"absolute top-4 right-4 p-2 border border-slate-200",children:"Copy"})]})})};export{c as default};
