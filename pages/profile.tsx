import Head from "next/head";
import { Button, Col, Container, Row } from "reactstrap";

import { HeaderAuth } from "@/components/common/HeaderAuth";
import { UserForm } from "@/components/profile/User";

import styles from "../styles/profile.module.scss";
import { Footer } from "@/components/common/Footer";

const UserInfo = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix - Meus Dados</title>
      </Head>

      <main>
        <div className={styles.header}>
            <HeaderAuth />
        </div>

        <Container className="py-5">
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn }>
              <Button outline className={styles.renderFormBtn}>
                DADOS PESSOAIS
              </Button>
              <Button outline className={styles.renderFormBtn}>
                SENHA
              </Button>
            </Col>

            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>

        <div className={styles.footer}>
            <Footer />
        </div>
      </main>
    </>
  );
};

export default UserInfo;
