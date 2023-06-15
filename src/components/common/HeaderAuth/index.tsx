import { Container, Form, Input } from "reactstrap";
import Link from "next/link";
import Modal from "react-modal";
import { useState } from "react";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

export const HeaderAuth = () => {
  const [modalIsOpne, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleToogleModal = () => {
    setModalIsOpen(!modalIsOpne);
  };

  const router = useRouter()

  const handleLogout = ()=>{
    sessionStorage.clear()

    router.push("/")
  }

  return (
    <>
      <Container className={styles.nav}>
        <Link href="/home">
          <img
            src="/logoOnebitflix.svg"
            alt="Logo da OneBitCode"
            className={styles.imgLogoNav}
          />
        </Link>

        <div className="d-flex align-items-center">
          <Form>
            <Input
              name="search"
              type="search"
              placeholder="pesquisar"
              className={styles.input}
            />
          </Form>

          <img
            src="/homeAuth/iconSearch.svg"
            alt="Lupa de pesquisar"
            className={styles.searchImg}
          />
          <p className={styles.userProfile} onClick={handleOpenModal}>
            AB
          </p>
        </div>
        <Modal
          isOpen={modalIsOpne}
          onRequestClose={handleCloseModal}
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
          <Link href="/profile">
            <p className={styles.modalLink}>Meus Dados</p>
          </Link>
          <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
        </Modal>
      </Container>
    </>
  );
};
 