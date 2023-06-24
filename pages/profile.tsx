import Head from "next/head";
import { Button, Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { HeaderAuth } from "@/components/common/HeaderAuth";
import { UserForm } from "@/components/profile/User";

import styles from "../styles/profile.module.scss";
import { Footer } from "@/components/common/Footer";
import { PasswordForm } from "@/components/profile/Password";
import { PageSpinner } from "@/components/common/Spinner";

const UserInfo = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [form, setForm] = useState<string>("userForm");

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>OneBitFlix - Meus Dados</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <HeaderAuth />
        </div>

        <Container className={styles.gridContainer}>
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button
                outline
                className={styles.renderFormBtn}
                style={{ color: form === "userForm" ? "#ff0044" : "white" }}
                onClick={() => {
                  setForm("userForm");
                }}
              >
                DADOS PESSOAIS
              </Button>
              <Button
                outline
                className={styles.renderFormBtn}
                style={{ color: form === "passwordForm" ? "#ff0044" : "white" }}
                onClick={() => {
                  setForm("passwordForm");
                }}
              >
                SENHA
              </Button>
            </Col>

            <Col md>
              {form === "userForm" ? <UserForm /> : <PasswordForm />}
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
