import { Container, Form, Input } from "reactstrap";
import Link from "next/link";
import Modal from "react-modal";
import { useEffect, useState, FormEvent } from "react";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { profileService } from "@/services/profileService";
import { courseService } from "@/services/courseService";

Modal.setAppElement("#__next");

export const HeaderAuth = () => {
  const [modalIsOpne, setModalIsOpen] = useState<boolean>(false);
  const [initials, setInitials] = useState<string>("false");
  const [searchName, setSearchName] = useState<string>("");

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`/search?name=${searchName}`);
    setSearchName("");
  };

  const handleSearchClick = () => {
    router.push(`/search?name=${searchName}`);
    setSearchName("");
  };

  useEffect(() => {
    profileService.fetchCurrent().then((user) => {
      const firstNameInitial = user.firstName.slice(0, 1);
      const lastNameInitial = user.lastName.slice(0, 1);
      setInitials(firstNameInitial + lastNameInitial);
    });
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.clear();

    router.push("/");
  };

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
          <Form onSubmit={handleSearch}>
            <Input
              name="search"
              type="search"
              placeholder="pesquisar"
              className={styles.input}
              value={searchName}
              onChange={(event) => {
                setSearchName(event.currentTarget.value.toLowerCase());
              }}
            />
          </Form>

          <img
            src="/homeAuth/iconSearch.svg"
            alt="Lupa de pesquisar"
            className={styles.searchImg}
            onClick={handleSearchClick}
          />
          <p className={styles.userProfile} onClick={handleOpenModal}>
            {initials}
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
          <p className={styles.modalLink} onClick={handleLogout}>
            Sair
          </p>
        </Modal>
      </Container>
    </>
  );
};
