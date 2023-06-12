import { Container } from "reactstrap";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/logoOnebitcode.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <a
          href="https://onebitcode.com"
          target={"blank"}
          className={styles.footerLink}
        >
          ONEBITCODE.COM
        </a>
      </Container>
    </>
  );
};
