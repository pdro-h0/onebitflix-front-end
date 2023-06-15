import { HeaderGeneric } from "@/components/common/HeaderGeneric";
import styles from "../styles/registerLogin.module.scss";

import Head from "next/head";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Footer } from "@/components/common/Footer";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { ToastComponent } from "@/components/common/ToastComponent";
import { authService } from "@/services/authService";

const Login = () => {
  const router = useRouter();
  const [toastColor, setToastColor] = useState<string>("");
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() =>{
    if(sessionStorage.getItem("onebitflix-token")){
      router.push("/home")
    }
  }, []);

  useEffect(() => {
    const registerSucess = router.query.registred;

    if (registerSucess === "true") {
      setToastColor("bg-success");
      setToastIsOpen(true);
      setToastMessage("Cadastro feito com sucesso!");

      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
    }
  }, [router.query]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);

    if (status === 200) {
      router.push("/home");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setToastMessage("Email ou senha incorretos!");

      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
    }
  };

  return (
    <>
      <Head>
        <title>Onebitflix - Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/register"
          btnContent="Quero fazer parte"
        />

        <Container className="py-5">
          <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>

          <Form className={styles.form} onSubmit={handleLogin}>
            <p className="text-center">
              <strong>Bem-vindo(a) ao OneBitFlix!</strong>
            </p>

            <FormGroup>
              <Label for="email" className={styles.label}>
                E-MAIL
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Qual o seu email?"
                required
                className={styles.input}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password" className={styles.label}>
                SENHA
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Qual a sua senha?"
                required
                className={styles.input}
              />
            </FormGroup>

            <Button type="submit" outline className={styles.formBtn}>
              ENTRAR
            </Button>
          </Form>
        </Container>
        <Footer />
        <ToastComponent
          color={toastColor}
          isOpen={toastIsOpen}
          message={toastMessage}
        />
      </main>
    </>
  );
};

export default Login;
