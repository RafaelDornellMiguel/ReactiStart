
//junção css
import estilos from "./page.module.css";

//inicio do projeto
export default function Home() {
  return (
    
    <div className={estilos.container_principal}>
      <div className={estilos.container_texto}>
          <h1>Hello World</h1>
          <p>Parágrafo com React.Js</p>
          <p className={estilos.autor}>Criado por DevMedia</p>
      </div>
      
    </div>
  );
}
