import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Ricardo!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Ricardo"
        className={styles.fotoSobreMim}
      />

<p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas harum repellendus dolorum officiis.
            </p>
            <p className={styles.paragrafo}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, alias ullam quos omnis, incidunt porro nam dolor sed, corrupti sint sunt eum nihil expedita atque ipsa quasi molestias hic ut!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit, reprehenderit et dolorum, impedit doloribus animi, id esse eveniet fugiat cupiditate assumenda! Dolores totam sunt magnam! Officia neque debitis ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione obcaecati facere quidem autem laudantium, praesentium eligendi earum voluptatibus. Nam odio nihil veritatis dicta eveniet vero consequuntur, nesciunt blanditiis deleniti maxime.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum porro odit illum, rerum aut dicta atque quasi doloremque.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus animi modi aut? Hic, modi quidem voluptate reprehenderit harum at possimus repellendus ratione officiis quae asperiores ipsum dicta eveniet nobis facilis?

            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, corrupti! Distinctio, veniam sit et incidunt, officia harum nobis fugit temporibus, at odit dolorum ut? Aspernatur architecto mollitia amet. Iure, recusandae.
            </p>
    </PostModelo>
  );
}
