import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id, ipsum
          iste iusto cum aperiam laudantium praesentium provident saepe ad
          consequatur quasi ullam, maxime itaque tenetur magnam incidunt omnis
          ratione.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Círculo colorido"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Ricardo"
        />
      </div>
    </div>
  );
}
