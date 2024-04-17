import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.logo}>
          <Image src="/logo-footer.svg" alt="Logo" width={121} height={34} />
        </div>
        <nav className={styles.footerNav}>
          <ul>
            <li>Chi siamo</li>
            <li>PNRR</li>
            <li>Media</li>
            <li>Lavora con noi</li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerSection}>
        <ul>
          <li>App IO</li>
          <li>Piattaforma pagoPA</li>
          <li>Centro stella</li>
          <li>Check IBAN</li>
          <li>Piattaforma Digitale Nazionale Dati</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <ul>
          <li>Informativa Privacy</li>
          <li>Certificazioni</li>
          <li>Sicurezza delle informazioni</li>
          <li>Diritto alla protezione dei dati personali</li>
          <li>Società trasparente</li>
        </ul>
      </div>
      <div className={styles.footerInfo}>
        <p>
          Pagopa S.p.A. — società per azioni con socio unico - capitale sociale
          di euro 1,000,000 interamente versato - sede legale in Roma, Piazza
          Colonna 370, CAP 00187 - n. di iscrizione a Registro Imprese di Roma,
          CF e P.IVA 15376371009
        </p>
      </div>
    </footer>
  );
};

export default Footer;
